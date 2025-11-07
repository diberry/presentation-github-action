#!/bin/bash
# 2025/11/07
set -e
echo "🚀 Setting up GitHub Actions Development Environment..."

# Ensure Docker is available
sudo chmod 666 /var/run/docker-host.sock
sudo ln -sf /var/run/docker-host.sock /var/run/docker.sock

# Install nektos/act directly
echo "📦 Installing nektos/act..."
curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash

# Verify installations
echo "✅ Verifying tool installations..."
echo "Docker version:"
docker --version

echo "GitHub CLI version:"
gh --version

echo "nektos/act version:"
act --version

echo "Node.js version:"
node --version

# Set up act configuration
echo "⚙️ Creating default act configuration..."
cat > ~/.actrc << 'EOF'
--rm
--verbose
--platform ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-latest
--artifact-server-path ./artifacts
--secret-file .secrets
EOF

# Create sample secrets file template
echo "🔐 Creating secrets template..."
cat > .secrets.template << 'EOF'
# Template for local GitHub Actions secrets
# Copy this to .secrets and fill in real values
# Never commit .secrets to your repository!

GITHUB_TOKEN=your_github_token_here
API_KEY=your_custom_api_key_here
AZURE_CLIENT_ID=your_azure_client_id
AZURE_CLIENT_SECRET=your_azure_client_secret
AZURE_TENANT_ID=your_azure_tenant_id
EOF

# Set up .gitignore for secrets
echo "📝 Updating .gitignore for security..."
cat >> .gitignore << 'EOF'

# GitHub Actions local development
.secrets
artifacts/
act-cache/
EOF

echo "🎯 Setup complete! Your development environment is ready for GitHub Actions development."
echo ""
echo "📚 Quick start commands:"
echo "  - Test workflow locally: act workflow_dispatch"
echo "  - List available workflows: act -l"
echo "  - Open Command Palette: Ctrl+Shift+P → 'GitHub Local Actions'"
echo ""
echo "🔒 Remember to:"
echo "  1. Copy .secrets.template to .secrets"
echo "  2. Fill in real values in .secrets file"
echo "  3. Never commit .secrets to version control"