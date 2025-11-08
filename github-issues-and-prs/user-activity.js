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

// Get authenticated user
async function getAuthenticatedUser() {
    const { data } = await octokit.rest.users.getAuthenticated();
    return data.login;
}

// Fetch issues and PRs
async function fetchIssuesAndPRs() {
    try {
        const username = await getAuthenticatedUser();
        console.log(`Fetching issues and PRs for @${username} since ${dateFilter}...\n`);

        // Search queries for different criteria (must specify is:issue or is:pr)
        const queries = [
            `is:issue author:${username} created:>=${dateFilter}`,
            `is:pr author:${username} created:>=${dateFilter}`,
            `is:issue assignee:${username} updated:>=${dateFilter}`,
            `is:pr assignee:${username} updated:>=${dateFilter}`,
            `is:issue mentions:${username} updated:>=${dateFilter}`,
            `is:pr mentions:${username} updated:>=${dateFilter}`,
            `is:pr review-requested:${username} updated:>=${dateFilter}`
        ];

        const allItems = new Map(); // Use Map to deduplicate by URL

        // Fetch all matching issues and PRs
        for (const query of queries) {
            console.log(`Searching: ${query}`);
            const { data } = await octokit.rest.search.issuesAndPullRequests({
                q: query,
                sort: 'updated',
                order: 'desc',
                per_page: 100
            });

            console.log(`  Found ${data.items.length} items`);

            data.items.forEach(item => {
                allItems.set(item.html_url, {
                    title: item.title,
                    url: item.html_url,
                    type: item.pull_request ? 'PR' : 'Issue',
                    state: item.state,
                    repo: item.repository_url.split('/').slice(-2).join('/'),
                    created: item.created_at,
                    updated: item.updated_at
                });
            });
        }
        console.log('');

        // Display results
        const items = Array.from(allItems.values())
            .sort((a, b) => new Date(b.updated) - new Date(a.updated));

        console.log(`Found ${items.length} unique items:\n`);

        items.forEach(item => {
            console.log(`[${item.type}] ${item.state.toUpperCase()}`);
            console.log(`  Repo: ${item.repo}`);
            console.log(`  Title: ${item.title}`);
            console.log(`  URL: ${item.url}`);
            console.log(`  Updated: ${new Date(item.updated).toLocaleDateString()}`);
            console.log('');
        });

    } catch (error) {
        console.error('Error fetching issues and PRs:', error.message);
        process.exit(1);
    }
}

fetchIssuesAndPRs();
