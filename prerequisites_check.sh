# Verify all requirements are met
docker --version && docker ps  # Docker must be running
gh auth status                 # GitHub CLI authenticated
code --list-extensions | grep github-local-actions  # Extension installed