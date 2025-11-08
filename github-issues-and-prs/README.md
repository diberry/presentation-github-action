# GitHub Issues and PRs Tracker

Simple Node.js application to fetch GitHub issues and PRs from the last 7 days where you are:
- The author/creator
- @mentioned
- Assigned
- Requested as a reviewer

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a GitHub Personal Access Token:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate a new token with `repo` scope
   - Copy the token

3. Set the token as an environment variable:
   ```bash
   export GITHUB_TOKEN=your_token_here
   ```

## Usage

Run the application:
```bash
npm start
```

Or directly:
```bash
node index.js
```

## Output

The script displays all matching issues and PRs with:
- Type (Issue or PR)
- State (open/closed)
- Repository
- Title
- URL
- Last updated date

Results are automatically deduplicated and sorted by most recently updated.
