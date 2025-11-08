import { Octokit } from '@octokit/rest';

// Get GitHub token from environment variable
const token = process.env.GITHUB_TOKEN;
if (!token) {
    console.error('Error: GITHUB_TOKEN environment variable is required');
    process.exit(1);
}

// Initialize Octokit
const octokit = new Octokit({ auth: token });

// Get date 7 days ago
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
const dateFilter = sevenDaysAgo.toISOString().split('T')[0];

// Convert GitHub URL to owner/repo format
function normalizeRepo(repo) {
    // If it's a URL, extract owner/repo
    if (repo.startsWith('http://') || repo.startsWith('https://')) {
        const match = repo.match(/github\.com\/([^\/]+\/[^\/]+)/);
        if (match) {
            return match[1].replace(/\.git$/, '');
        }
    }
    return repo;
}

// Get the correct case-sensitive repo name from GitHub API
async function getCorrectRepoName(repo) {
    const [owner, repoName] = repo.split('/');
    try {
        const { data } = await octokit.rest.repos.get({ owner, repo: repoName });
        return data.full_name;
    } catch (error) {
        console.error(`  Warning: Could not verify repo "${repo}": ${error.message}`);
        return repo; // Fall back to original input
    }
}

// Fetch issues and PRs for specific repos
async function fetchRepoActivity(repos) {
    if (!repos || repos.length === 0) {
        console.error('Error: Please provide a list of repositories (e.g., ["owner/repo1", "owner/repo2"])');
        process.exit(1);
    }

    try {
        console.log(`Fetching issues and PRs since ${dateFilter}...\n`);

        const allItems = new Map(); // Use Map to deduplicate by URL

        // Fetch for each repo
        for (const repoInput of repos) {
            const normalizedRepo = normalizeRepo(repoInput);
            const repo = await getCorrectRepoName(normalizedRepo);
            const [owner, repoName] = repo.split('/');
            console.log(`Fetching from repo: ${repo}`);

            // Use REST API list endpoints instead of search (more reliable)
            const options = {
                owner,
                repo: repoName,
                state: 'all',
                since: new Date(dateFilter).toISOString(),
                per_page: 100
            };

            // Fetch issues
            const { data: issues } = await octokit.rest.issues.listForRepo(options);

            // Fetch pull requests
            const { data: prs } = await octokit.rest.pulls.list({
                ...options,
                sort: 'created',
                direction: 'desc'
            });

            // Process issues (filter out PRs which are included in issues endpoint)
            issues.forEach(item => {
                if (!item.pull_request && new Date(item.created_at) >= new Date(dateFilter)) {
                    allItems.set(item.html_url, {
                        title: item.title,
                        url: item.html_url,
                        type: 'Issue',
                        state: item.state,
                        repo: repo,
                        created: item.created_at,
                        updated: item.updated_at,
                        author: item.user.login
                    });
                }
            });

            // Process PRs
            prs.forEach(item => {
                if (new Date(item.created_at) >= new Date(dateFilter)) {
                    allItems.set(item.html_url, {
                        title: item.title,
                        url: item.html_url,
                        type: 'PR',
                        state: item.state,
                        repo: repo,
                        created: item.created_at,
                        updated: item.updated_at,
                        author: item.user.login
                    });
                }
            });

            console.log(`  Found ${Array.from(allItems.values()).filter(i => i.repo === repo).length} items`);
        }
        console.log('');

        // Display results
        const items = Array.from(allItems.values())
            .sort((a, b) => new Date(b.created) - new Date(a.created));

        console.log(`Found ${items.length} unique items:\n`);

        items.forEach(item => {
            console.log(`[${item.type}] ${item.state.toUpperCase()}`);
            console.log(`  Repo: ${item.repo}`);
            console.log(`  Author: @${item.author}`);
            console.log(`  Title: ${item.title}`);
            console.log(`  URL: ${item.url}`);
            console.log(`  Created: ${new Date(item.created).toLocaleDateString()}`);
            console.log('');
        });

    } catch (error) {
        console.error('Error fetching repo activity:', error.message);
        process.exit(1);
    }
}

// Get repos from command line arguments or load from repos.json
let repos = process.argv.slice(2);

if (repos.length === 0) {
    console.log('No repos provided, loading from repos.json...\n');
    try {
        const fs = await import('fs');
        const reposData = fs.readFileSync(new URL('./repos.json', import.meta.url), 'utf8');
        repos = JSON.parse(reposData);
    } catch (error) {
        console.error('Error loading repos.json:', error.message);
        console.log('\nUsage: node repo-activity.js owner/repo1 owner/repo2 ...');
        console.log('Example: node repo-activity.js microsoft/vscode octokit/rest.js');
        console.log('Or create a repos.json file with an array of repo names\n');
        process.exit(1);
    }
}

fetchRepoActivity(repos);
