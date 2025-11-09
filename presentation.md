# From Scripts to Solutions: Automating Developer Experience with GitHub Actions

## Presentation Overview

Title: Automating with GitHub Actions

**Key Learning Outcomes:**
- Understand the progression from local scripts to automated team tools
- Create a GitHub action in a repository
- Develop local GitHub Actions development using VS Code 
- Run and debug local actions with nektos/act
---

**Presentation Duration:** 30-45 minutes  
**Target Audience:** Azure content developers and engineering teams  
**Objective:** Show progression from manual scripts to automated team tools using GitHub Actions

---

## Slide 1: Title Slide
**Title:** From Scripts to Solutions: Automating Developer Experience with GitHub Actions  
**Subtitle:** Building team tools that scale from local scripts to organizational solutions  

**Script:**
"Today we're going to explore how we can transform our one-off scripts into powerful, shareable tools that our entire organization can use. We'll start with the current developer experience landscape and show you how to build automation that's both free and accessible to everyone on your team."

**Time: 1 minute**

---

## Slide 2: The Current Developer Experience Landscape
**Visual:** Grid of tool logos with brief descriptions

### Local Developer Experience Tools
| Tool | Purpose |
|------|---------|
| **Visual Studio Code** | Code editing with rich extensions ecosystem |
| **Dev Containers** | Consistent, containerized development environments |
| **Docker CLI** | Local containerization and testing |
| **PowerShell/Bash** | Local scripting and automation |
| **Azure Functions Core Tools** | Local serverless function development and testing |

### DevOps & Deployment Experience Tools
| Tool | Purpose |
|------|---------|
| **Azure CLI** | Azure resource management and automation |
| **Azure Developer CLI (azd)** | Full application lifecycle management |
| **Bicep/ARM Templates** | Infrastructure as Code for Azure deployments |
| **Terraform** | Multi-cloud infrastructure provisioning |
| **Azure Resource Manager (ARM)** | Azure resource deployment orchestration |

### Source Control & Automation Platforms
| Tool | Purpose |
|------|---------|
| **GitHub CLI (gh)** | GitHub integration and repository management |
| **GitHub Actions** | CI/CD workflows and automation platform |
| **Azure DevOps CLI** | Azure DevOps pipeline and work item automation |
| **Azure Pipelines** | Enterprise CI/CD and release management |
| **Git** | Distributed version control system |

### Microsoft & .NET Ecosystem Tools
| Tool | Purpose |
|------|---------|
| **.NET CLI** | .NET application development, build, and deployment |
| **Microsoft Graph CLI** | Microsoft 365 and Azure AD management |
| **Azure Static Web Apps CLI** | Static web application development and deployment |
| **Windows Package Manager (winget)** | Package management for Windows development |
| **NuGet CLI** | .NET package management and publishing |

**Script:**
"We work with four distinct categories of tools in our development ecosystem. First, our local developer experience tools - VS Code, Dev Containers, and Docker CLI for day-to-day coding. Second, our DevOps and deployment tools like Azure CLI, Bicep, and Terraform that handle infrastructure and production deployments. Third, and critically important, our source control and automation platforms - GitHub Actions, Azure DevOps, and Git itself - these are the orchestration layer that connects everything together. Finally, we have the broader Microsoft ecosystem tools like .NET CLI and Microsoft Graph CLI that connect us to enterprise services. Here's the challenge: while these tools are powerful individually, the scripts we create to connect them across categories typically stay trapped on our local machines. GitHub Actions changes this by providing a cloud-native automation platform that can orchestrate workflows spanning all four categories."

**Time: 2 minutes**

---

## Slide 3: The Script-to-Solution Journey
**Visual:** Flow diagram showing progression with platform options

```
Local Script → Team Script → Automated Tool → Organizational Solution
     ↓              ↓              ↓                    ↓
  You only    Personal GitHub repo    GitHub Actions      Enterprise ready

Platform Options:
• Public GitHub (github.com) - Open source, public repositories
• GitHub inside Microsoft (aka.ms/gim) - Proprietary code, compliance required
• Setup via Start Right (aka.ms/startright) for GiM governance
```

**Script:**
"There's a natural progression in how we solve problems. We start with a quick script to solve our immediate need. Then colleagues ask for it, so we put it in a personal GitHub repository where others can access it. Eventually, we realize this should be available to the whole team or organization through proper automation. GitHub Actions bridges this gap perfectly. Now, for Microsoft teams, we have two paths: public GitHub for open-source work, and GitHub inside Microsoft - aka.ms/gim - for proprietary code and automation that shouldn't be public. While GiM requires authentication and takes a bit more setup time using Start Right (aka.ms/startright), it conforms to our governance and security requirements. This means you can automate sensitive workflows like internal metrics, proprietary deployment processes, or customer data handling while maintaining compliance. The automation principles we'll cover today work the same way on both platforms."

**Time: 2 minutes**

---

## Slide 4: GitHub Actions - The Free Automation Platform
**Visual:** GitHub Actions workflow diagram

### Key Benefits
- **Free tier:** 2,000 minutes/month for public repos, 500 for private
- **No infrastructure:** GitHub hosts the runners
- **Triggered execution:** On events, schedules, or manual triggers
- **Team accessible:** Anyone with repo access can use

**Script:**
"GitHub Actions gives us enterprise-grade automation capabilities with zero infrastructure overhead. The free tier is generous enough for most team automation needs, and since it's integrated with GitHub, your team already has access. You don't need Azure DevOps or Azure Hosting to get started - if your code is in GitHub, you can start automating today."

**Time: 1 minute**

---

## Slide 5: What Can You Automate?
**Visual:** Grid of automation categories with examples

### Runtime Environments & Languages
- **Bash/Shell Scripts:** System automation, file processing, API calls
- **PowerShell:** Windows automation, Azure resource management
- **Python:** Data processing, API integration, machine learning workflows
- **Node.js/JavaScript:** Web automation, package management, testing
- **.NET Applications:** Build, test, and deploy .NET projects
- **Go Applications:** Build cross-platform binaries, microservice deployment
- **Java/Maven/Gradle:** Enterprise application builds and deployments

### Command-Line Interfaces & Tools
- **Azure CLI:** Cloud resource provisioning and management
- **AWS CLI:** Multi-cloud infrastructure automation
- **GitHub CLI (gh):** Repository management and API interactions
- **Docker CLI:** Container builds, registry pushes, orchestration
- **Terraform:** Infrastructure as Code across cloud providers
- **Kubernetes (kubectl):** Container orchestration and deployment

### API & Integration Workflows
- **REST API Calls:** Third-party service integration and data synchronization
- **Webhook Processing:** Event-driven automation triggers
- **Database Operations:** Migrations, backups, data validation
- **File Processing:** Document generation, image optimization, data transformation
- **Notification Systems:** Teams, Slack, email, SMS integration

### GitHub Actions Marketplace
**20,000+ pre-built actions including:**
- **Microsoft Actions:** Azure deployment, Office 365 integration
- **Cloud Provider Actions:** AWS, GCP, Azure native integrations
- **Testing & Quality:** Code coverage, security scanning, performance testing
- **Deployment Actions:** Kubernetes, Docker, static site deployment
- **Utility Actions:** Cache management, artifact handling, notification systems

### Custom Action Development
- **JavaScript Actions:** Fast execution, npm ecosystem access
- **Docker Actions:** Any language, full environment control
- **Composite Actions:** Combine multiple steps into reusable workflows
- **Organization Actions:** Private marketplace for enterprise teams

**Script:**
"The beauty of GitHub Actions is its versatility - you can automate virtually anything you can run from a command line. Whether you're working with traditional scripting languages like Bash and PowerShell, modern applications in .NET, Go, or Python, or orchestrating complex workflows with CLI tools like Azure CLI and Terraform, GitHub Actions provides the runtime environment. But here's where it gets really powerful - the GitHub Actions Marketplace has over 20,000 pre-built actions covering everything from cloud deployments to security scanning. And if you need something specific, you can create custom actions using JavaScript for speed, Docker for maximum flexibility, or composite actions to package common workflow patterns. This means you're not just limited to what you can script - you're tapping into an entire ecosystem of automation building blocks.

As a content developer, I can use GitHub Actions to validate my procedural documentation. When customers report that quickstart steps aren't working, the workflows simulate their experience - installing prerequisites, configuring Azure resources, and running through each step."

**Time: 3 minutes**

---

## Slide 6: From Local Scripts to Automation
**Visual:** Before/after comparison

### Before: Manual Local Scripts
```bash
# Check for new issues and PRs on repo
gh issue list --state open --limit 5
gh pr list --state open --limit 5
# Review results manually
# Send summary to team via email
```

**Benefits of Local Scripts:**
- **Quick to create:** Immediate solution to specific problems
- **Full control:** Run exactly when and how you want
- **No setup overhead:** Works with tools you already have
- **Private by default:** Stays on your machine unless shared
- **Easy to modify:** Change logic instantly without deployment

### After: Automated Solutions
- Scheduled execution
- Automatic notifications
- Consistent results
- Team accessibility

**Benefits of Automated Solutions:**
- **Consistent execution:** Runs reliably without human intervention
- **Team accessibility:** Everyone can benefit from the automation
- **Scheduled reliability:** Never forget to run important checks
- **Standardized output:** Same format and quality every time
- **Reduced manual overhead:** Frees up time for higher-value work
- **Scalable insights:** Can process more data than manual reviews
- **Historical tracking:** Builds a record of activity over time

**Script:**
"Let's say you have a script that checks for new issues and pull requests on your content repositories. The local approach has real benefits - it's quick to create, gives you full control, and works with your existing tools. But automation brings different advantages: consistent execution without human error, team accessibility so everyone benefits, and the ability to scale beyond what manual processes can handle. This is where automation transforms reactive monitoring into proactive team awareness that scales across your organization."

**Time: 2 minutes**

---

## Slide 7: GitHub Actions Architecture Overview
**Visual:** Platform diagram showing workflow components and execution flow

### What Makes GitHub Actions Powerful
GitHub Actions is more than a simple script runner - it's a complete automation platform with enterprise-grade capabilities built into GitHub's infrastructure.

### Core Platform Components
- **Workflow Engine:** Event-driven automation that responds to repository changes, schedules, or manual triggers
- **Runner Infrastructure:** GitHub-hosted or self-hosted environments (Ubuntu, Windows, macOS)
- **Action Marketplace:** 20,000+ pre-built actions for common tasks and integrations
- **Security Layer:** Secrets management, OIDC authentication, and enterprise compliance features

### Key Architectural Benefits
- **Zero Infrastructure:** No servers to manage or maintain
- **Integrated Experience:** Native integration with GitHub repositories and APIs
- **Scalable Execution:** Automatic scaling based on workload demands
- **Rich Ecosystem:** Extensive marketplace of community and Microsoft-built actions

### Input → Processing → Output Flow
```yaml
# Triggers (Input)
on: [push, pull_request, schedule, workflow_dispatch]

# Processing (Jobs & Steps)
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Processing..."

# Outputs (Artifacts, Notifications, Deployments)
- uses: actions/upload-artifact@v3
```

### Why This Matters for Content Teams
- **Familiar Environment:** Works where your code already lives
- **No Learning Curve:** If you know YAML and basic scripting, you can build workflows
- **Team Accessibility:** Anyone with repository access can use and modify workflows
- **Enterprise Ready:** Scales from personal scripts to organization-wide automation

**Script:**
"Before we dive into creating our first workflow, let's understand what makes GitHub Actions so powerful. This isn't just a simple script runner - it's a complete automation platform built into GitHub's infrastructure. The beauty is that it works where your code already lives, with zero additional infrastructure to manage. Whether you're automating a simple task or building complex deployment pipelines, the same foundational concepts apply. This architecture means you can start with a simple 'Hello World' workflow and gradually build up to sophisticated automation that serves your entire organization."

**Time: 3 minutes**

---

## Slide 8: Hello World GitHub Action Demo
**Demo Summary:** Create a simple "Hello World" GitHub Action using VS Code

### Prerequisites for Demo
- VS Code with GitHub Actions extension installed (`GitHub.vscode-github-actions`)
- Repository with `.github/workflows/` folder (create if needed)
- GitHub CLI authenticated (`gh auth status` to verify)

### Demo Steps:
1. **Create workflow file in VS Code**
   - Navigate to `.github/workflows/` folder (create if doesn't exist)
   - Create new file: `hello-world.yml`
   - VS Code GitHub Actions extension provides IntelliSense and validation

2. **Basic Hello World workflow**

   ```prompt
   Create a simple GitHub Actions workflow that:
   - Can be triggered manually and on pushes to main branch
   - Runs on Ubuntu
   - Displays a hello world message with an emoji
   - Shows the current date and time
   - Displays information about the runner environment, repository, and current branch
   - Uses GitHub context variables to make the output dynamic
   ```

   ```yaml
   name: Hello World Action
   
   on:
     workflow_dispatch:  # Manual trigger
     push:
       branches: [main]
   
   jobs:
     say-hello:
       runs-on: ubuntu-latest
       steps:
         - name: Say Hello
           run: echo "Hello, GitHub Actions World! 🎉"
         
         - name: Show current date
           run: date
           
         - name: List environment info
           run: |
             echo "Runner: ${{ runner.os }}"
             echo "Repository: ${{ github.repository }}"
             echo "Branch: ${{ github.ref_name }}"
   ```

3. **Basic workflow understanding**
   - Review the Hello World structure
   - Understand trigger types and job execution
   - Practice with context variables and runner information

4. **VS Code Extension Features to Highlight**
   - **Syntax highlighting:** YAML and GitHub Actions specific
   - **IntelliSense:** Auto-completion for action properties
   - **Schema validation:** Real-time error detection
   - **Workflow visualization:** Right-click → "View workflow graph"
   - **Action marketplace integration:** Browse and insert actions

### Demo Notes for Presenter
- **File Location:** Emphasize `.github/workflows/` must be exact (case-sensitive)
- **Extension Benefits:** Show how extension prevents common YAML syntax errors
  - **Real-time validation:** Red squiggly lines appear immediately for syntax errors
  - **IntelliSense auto-completion:** Type `on:` and see trigger options like `push`, `pull_request`, `workflow_dispatch`
  - **Schema validation:** Extension knows GitHub Actions properties and validates them
  - **Marketplace integration:** Right-click in editor → "Insert Action" to browse and add marketplace actions
  - **Workflow visualization:** Right-click YAML file → "View workflow graph" to see job dependencies
  - **Common error prevention:** Catches issues like incorrect indentation, invalid property names, missing required fields
  - **Context variable suggestions:** When typing `${{` you get suggestions for `github.repository`, `runner.os`, etc.
  - **Action version warnings:** Highlights when you're using outdated action versions
- **Trigger Options:** Explain `workflow_dispatch` allows manual running for testing
- **Context Variables:** Highlight `${{ }}` syntax for accessing GitHub context
- **Runner Selection:** Mention `ubuntu-latest` is most common and fastest

### Testing the Workflow
1. **Commit and push** the workflow file
2. **Navigate to GitHub** → Actions tab
3. **Run manually** using "Run workflow" button (thanks to `workflow_dispatch`)
4. **View results** in the Actions dashboard

### Expected Output
```
Hello, GitHub Actions World! 🎉
Sun Nov  3 10:30:45 UTC 2025
Runner: Linux
Repository: your-username/your-repo
Branch: main
```

**Script:**
"Before we dive deeper, let's create our first GitHub Action together. This 'Hello World' example will show you the basic structure and give you hands-on experience with the VS Code GitHub Actions extension. The extension is invaluable - it provides syntax highlighting, IntelliSense for GitHub Actions properties, and real-time validation that catches errors before you commit. Notice how we're using `workflow_dispatch` as a trigger - this allows us to run the action manually, which is perfect for testing. The `${{ }}` syntax gives us access to GitHub's context variables, so we can access information about the repository, runner, and current execution. This simple example demonstrates the foundation that all GitHub Actions build upon - you define jobs, specify where they run, and list the steps to execute."

**Time: 5-7 minutes**

---


## Slide 9: GitHub Actions Architecture - Triggers, Inputs, and Outputs
**Visual:** Flow diagram showing the complete GitHub Actions data flow

### Understanding the GitHub Actions Pipeline

GitHub Actions workflows follow a clear Input → Processing → Output pattern. Understanding these three components is essential for building effective automation.

---

### 🎯 TRIGGERS (When workflows run)

**Top 5 Most Common Triggers:**
1. **`workflow_dispatch`**: Manual trigger with input parameters - perfect for on-demand automation
2. **`push`**: Code pushed to specific branches - automatic CI/CD on commits
3. **`pull_request`**: PR opened or updated - automated code review and testing
4. **`schedule`**: Cron-based scheduled execution - recurring maintenance tasks
   ```yaml
   schedule:
     - cron: '0 8 * * 1'  # Every Monday at 8 AM UTC
   ```
5. **`workflow_call`**: Called by other workflows - reusable workflow components

**[See full trigger list in Appendix B](#appendix-b-complete-triggers-reference)**

---

### 📥 INPUTS (What workflows receive)

**Top 5 Essential Input Types:**
1. **Workflow dispatch inputs**: User-provided parameters for manual triggers
   - Types: `string`, `boolean`, `choice`, `environment`
2. **Repository secrets**: Encrypted credentials (`secrets.API_KEY`, `secrets.GITHUB_TOKEN`)
   - Scoped to repository, environment, or organization
3. **Environment variables**: Configuration values available to jobs and steps
   - Job-level: `env:` at job level
   - Step-level: `env:` at step level
4. **GitHub context**: Built-in variables about the workflow execution
   - `github.repository`, `github.actor`, `github.sha`, `github.ref`
5. **Checkout data**: Repository files via `actions/checkout@v4`
   - Access to code, config files, and repository content

**[See full inputs reference in Appendix B](#appendix-b-complete-inputs-reference)**

---

### 📤 OUTPUTS (What workflows produce)

**Top 5 Valuable Output Types:**
1. **Step Summary**: Rich markdown display in Actions UI (`$GITHUB_STEP_SUMMARY`)
   - Visible without digging through logs
   - Tables, lists, code blocks, images
2. **Artifacts**: Downloadable files and reports (`actions/upload-artifact@v4`)
   - Build outputs, test results, generated files
   - 90-day retention (customizable)
3. **Console Logs**: Real-time execution output
   - Standard output, error messages, debug info
4. **Repository changes**: Automated commits, PRs, releases
   - Update code, documentation, configurations
5. **External integrations**: Notifications and deployments
   - Teams/Slack notifications, cloud deployments, API calls

**[See full outputs reference in Appendix B](#appendix-b-complete-outputs-reference)**

---

### Architecture Flow Example

```yaml
# TRIGGERS
on:
  push:
    branches: [main]
  schedule:
    - cron: '0 9 * * 1-5'  # Weekdays at 9 AM
  workflow_dispatch:
    inputs:
      environment:
        type: choice
        options: [dev, staging, prod]

jobs:
  process:
    runs-on: ubuntu-latest
    
    # INPUTS
    env:
      DEPLOY_ENV: ${{ github.event.inputs.environment || 'dev' }}
      API_KEY: ${{ secrets.API_KEY }}
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Process with inputs
        run: |
          echo "Environment: $DEPLOY_ENV"
          echo "Triggered by: ${{ github.actor }}"
      
      # OUTPUTS
      - name: Generate artifact
        run: echo "Build complete" > result.txt
      
      - uses: actions/upload-artifact@v4
        with:
          name: build-result
          path: result.txt
      
      - name: Create step summary
        run: |
          echo "## Deployment Summary" >> $GITHUB_STEP_SUMMARY
          echo "Environment: $DEPLOY_ENV" >> $GITHUB_STEP_SUMMARY
```

### Key Resources
- **Official Documentation**: [GitHub Actions Triggers](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- **Context Variables**: [GitHub Actions Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts)
- **Complete Reference**: See Appendix B for comprehensive lists

**Script:**
"Before we jump into a practical demo, let's understand the three fundamental components of every GitHub Actions workflow: triggers, inputs, and outputs. I'm showing you the top five most commonly used options in each category - the ones you'll use in 90% of your workflows. Triggers are the 'when' - manual triggers for on-demand tasks, push events for automatic CI/CD, pull requests for code reviews, scheduled runs for maintenance, and reusable workflows for shared components. Inputs are the 'what with' - user parameters, encrypted secrets, environment variables, GitHub's built-in context about the workflow, and your repository's code and files. Outputs are the 'what happens' - step summaries for quick visibility, artifacts for downloadable results, console logs for detailed execution info, repository changes for automation, and external integrations for notifications and deployments. There are many more options available - I've included comprehensive lists in Appendix B and links to the official documentation. But these top five in each category will cover most of your automation needs. Now let's see this in action with a practical demo."

**Time: 4 minutes**

---

## Slide 9 DEMO: Weekly GitHub Activity Report with Automation
**Demo Summary:** Real-world workflow that automatically tracks GitHub issues and PRs across repositories

### Demo Overview
We'll create a practical automation workflow that demonstrates scheduled execution, secret management, and artifact generation. This workflow uses a Node.js application to fetch GitHub activity data and generates downloadable reports - a pattern you'll use for real developer automation tasks.

### The Node.js Application

Located in `github-issues-and-prs/`, this simple console application demonstrates:
- **GitHub REST API integration** using `@octokit/rest`
- **Two activity tracking modes**:
  - `user-activity.js`: Your personal issues/PRs (created, assigned, mentioned, reviewing)
  - `repo-activity.js`: All issues/PRs in specified repositories
- **Configuration via `repos.json`**: Default list of repositories to monitor
- **Flexible CLI**: Can override repos via command-line arguments

### Enhanced Workflow

```prompt
Create a GitHub Actions workflow that:
- Runs on a schedule (weekly) and manual trigger
- Uses repository secrets for GitHub API authentication
- Executes a Node.js application to fetch GitHub activity data
- Generates dated artifact files for download and archival
- Demonstrates real-world patterns for API-based automation
```

```yaml
name: Weekly GitHub Activity Report
# 2025/11/08

on:
  # Manual trigger with optional repo override
  workflow_dispatch:
    inputs:
      repos:
        description: "Comma-separated list of repos (e.g., owner/repo1,owner/repo2)"
        required: false
  
  # Schedule trigger (every Monday at 9 AM UTC)
  schedule:
    - cron: '0 9 * * 1'

jobs:
  activity-report:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v5
      
      - name: Setup Node.js LTS
        uses: actions/setup-node@v6
        with:
          node-version: "lts/*"
      
      - name: Set date for artifact naming
        run: echo "DATE=$(date +%Y-%m-%d)" >> $GITHUB_ENV
      
      - name: Run GitHub activity check
        working-directory: github-issues-and-prs
        env:
          GITHUB_TOKEN: ${{ secrets.WEEKLYINFO_GITHUB_TOKEN }}
        run: |
          npm install
          npm run start > ../activity-${DATE}-${{ github.run_number }}.txt 2>&1
      
      - name: Upload activity report artifact
        uses: actions/upload-artifact@v5
        with:
          name: activity-report-${{ env.DATE }}-${{ github.run_number }}
          path: activity-*.txt
          retention-days: 30
```

### Demo Steps

1. **Show the Node.js application structure**
   ```bash
   cd github-issues-and-prs
   # Show package.json - simple dependencies (@octokit/rest)
   # Show repos.json - configured repositories to monitor
   # Show user-activity.js and repo-activity.js - two tracking modes
   ```

2. **Test locally first** (demonstrates local dev workflow)
   ```bash
   npm install
   npm run user:dev     # Your personal activity
   npm run repo:dev     # Activity in configured repos
   npm run dev:all      # Both reports
   ```

3. **Create repository secret**
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `WEEKLYINFO_GITHUB_TOKEN`
   - Value: Your GitHub personal access token with `repo` scope
   - This demonstrates secure secret management

4. **Run the workflow manually**
   - Navigate to Actions tab in GitHub
   - Click "Weekly GitHub Activity Report"
   - Click "Run workflow"
   - Leave repos empty to use defaults from `repos.json`
   - Click "Run workflow" button

5. **Review outputs**
   - **Console logs**: See the GitHub API calls and results in real-time
   - **Artifacts**: Download the dated activity report (e.g., `activity-2025-11-08-42.txt`)
   - **Scheduled execution**: Explain it will run every Monday automatically

### Demo Talking Points

**Real-World Use Case:**
- "This solves a common problem: staying on top of GitHub activity across multiple repositories"
- "Instead of manually checking each repo, this automation runs weekly and sends you a report"
- "The same pattern works for any API-based data collection: Azure resources, deployment status, test results"

**Simple, Maintainable Code:**
- "Notice the Node.js app is straightforward - just 150 lines total across two scripts"
- "Uses official GitHub SDK `@octokit/rest` - no need to manually construct API calls"
- "Configuration in `repos.json` means non-developers can update the repo list"
- "Easy to test locally before running in Actions"

**Workflow Best Practices:**
- "Scheduled execution: Runs every Monday automatically, no manual intervention"
- "Manual override: Can trigger anytime and optionally override the repo list"
- "Secret management: GitHub token stored securely, never exposed in logs"
- "Dated artifacts: Each report includes date and run number for easy tracking"
- "Environment variables: `DATE` set once and used throughout the workflow"

**Practical Patterns You'll Use:**
- "This demonstrates the three-layer architecture: workflow → Node.js app → API"
- "Local development first, then deploy to Actions - standard dev workflow"
- "Output redirection captures all results to a file for archival"
- "Artifact retention (30 days) keeps historical data without cluttering the repo"

### Expected Demo Duration
- **Show Node.js app structure**: 1 minute
- **Run locally to demonstrate**: 1-2 minutes
- **Set up secret**: 1 minute
- **Trigger workflow and review**: 2-3 minutes
- **Total**: 5-7 minutes

### Key Takeaways for Audience

1. **Start Simple**: This is a ~150-line Node.js app that solves a real problem
2. **Test Locally First**: The same code runs locally and in Actions
3. **Use Official SDKs**: `@octokit/rest` handles API complexity
4. **Secure by Default**: Secrets never appear in logs or artifacts
5. **Automate Repetitive Tasks**: Weekly reports run without manual intervention

**Script:**
"Let me show you a real-world automation that I use myself. This workflow tracks GitHub activity across multiple repositories - issues, PRs, review requests - and generates a weekly report. The key here is that we're not writing complex workflow YAML - we're using a simple Node.js application that we can develop and test locally, then run it in GitHub Actions with just a few lines of workflow configuration. Notice how we handle the GitHub token securely through repository secrets, how we generate dated artifacts for historical tracking, and how the same workflow can run on a schedule or be triggered manually. This three-layer architecture - workflow, application code, external API - is the pattern you'll use for most real automation tasks. The workflow orchestrates, your code does the work, and APIs provide the data."

**Time: 5-7 minutes**

---

## Development Workflow Transition
**From Cloud-Only to Local Development**

Now that you've seen the basics of GitHub Actions and understand how to create workflows with inputs and secrets, let's address the biggest challenge in GitHub Actions development: the slow feedback loop. 

**The Traditional Problem:**
1. Write workflow → 2. Commit → 3. Push → 4. Wait for runner → 5. Debug → 6. Repeat

**Our Solution:** Local development with nektos/act transforms this into:
1. Write workflow → 2. Test locally → 3. Iterate immediately → 4. Deploy when perfect

This next section will show you how to set up a complete local development environment that mirrors GitHub's cloud infrastructure on your machine.

---

## Slide 10: Local Development with nektos/act
**Visual:** Split screen showing cloud vs local execution

### Why Local Development Matters
- **Fast iteration:** No wait for cloud runners
- **Cost efficiency:** Unlimited local testing
- **Offline development:** Work without internet
- **Debug capability:** Step through workflows locally

### Docker Requirement (Simplified)
- **Docker Desktop required:** nektos/act uses containers to simulate GitHub runners
- **Containerization handled automatically:** act downloads and manages runner images
- **No Docker expertise needed:** GitHub Copilot and act handle container complexity
- **Pre-built runner images:** Ubuntu, Windows, macOS containers ready to use

### Alternative: GitHub Codespaces Development
- **Browser-based development:** Use Codespaces instead of local setup
- **Pre-configured environments:** Dev containers with extensions already installed
- **Your Codespaces resources:** Uses your allocated compute time and storage
- **Clean development:** Build and debug without polluting repo's visible action runs
- **Zero local setup:** No Docker Desktop or VS Code installation required

**Script:**
"The challenge with GitHub Actions has always been the development cycle - make a change, push, wait for the runner, check results. nektos/act changes this by letting you run GitHub Actions locally using Docker containers. Now, yes, you do need Docker Desktop installed, but here's the key point - you don't need to understand containerization or manage Docker images yourself. act automatically downloads and manages the GitHub runner containers, and GitHub Copilot can help with any Docker-related configuration if needed. The containerization complexity is completely abstracted away - you just focus on your workflow logic while act handles creating the same Ubuntu, Windows, or macOS environments that GitHub uses in the cloud. And here's another great option - if you don't want to install anything locally, you can develop your GitHub Actions entirely in GitHub Codespaces using your browser. You can set up dev containers with all the necessary extensions pre-installed, use your Codespaces compute time and storage, and build and debug your workflows without any of those test runs showing up in your repository's Actions tab. This gives you a completely clean development environment that doesn't pollute your production action history."

**Time: 3 minutes**

---

## Slide 11: Installation and Setup
**Visual:** Step-by-step installation commands

### Prerequisites
- **Docker Desktop installed and running** (Required for nektos/act)
- **GitHub CLI available** (should already be installed)
- **VS Code** with extension capabilities

### Recommended Installation Path
```bash
# Verify Docker is running (REQUIRED for local testing)
docker --version
docker ps

# Verify GitHub CLI is available (should already be installed)
gh --version

# Verify nektos/act is installed (pre-installed in dev container)
act --version

# Install GitHub Local Actions extension by Sanula Ganepola
code --install-extension sanulaganepola.github-local-actions

# If NOT using dev container, the extension will prompt to install nektos/act
# or trigger installation via Command Palette:
# Ctrl+Shift+P → "GitHub Local Actions: Install Act"
```

### Alternative Direct Installation (if needed)
```bash
# Direct installation (Windows) - only if extension method fails
choco install act-cli
# or
winget install nektos.act
```

**Script:**
"Let's talk about prerequisites for local GitHub Actions development. You need three things: VS Code as your development environment with the GitHub Local Actions extension, GitHub CLI for easier authentication and act installation, and Docker Desktop - this is critical. Why Docker? Because GitHub Actions run inside containers in the cloud. When nektos/act tests locally, it runs those same Docker images on your machine, mirroring production exactly. The extension handles container configuration complexity, but Docker must be installed and running. This setup gives you a complete local environment matching GitHub's cloud infrastructure. Now, if you're using this repository's dev container, you're in luck - nektos/act is already pre-installed and configured. You just need to install the VS Code extension and you're ready to go."

**Time: 3 minutes**

---

## Slide 12: DEMO - Running Workflows Locally with act Extension
**Demo Summary:** Hands-on demonstration of local testing using the GitHub Local Actions extension

### Demo Overview
This demo shows the complete local development workflow - from creating workflows to testing them locally without any cloud execution. We'll run both our Hello World and Advanced workflows to demonstrate the power of local iteration.

### Prerequisites Check
```bash
# Verify all requirements are met
docker --version && docker ps  # Docker must be running
gh auth status                 # GitHub CLI authenticated
code --list-extensions | grep github-local-actions  # Extension installed
```

### Demo Steps

#### Part 1: Test Hello World Workflow Locally
1. **Open VS Code Command Palette**
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "GitHub Local Actions"
   - Select "GitHub Local Actions: Run Workflow"

2. **Select Hello World Workflow**
   - Extension will scan `.github/workflows/` folder
   - Choose `hello-world.yml` from the list
   - Select trigger event: `workflow_dispatch`

3. **Watch Local Execution**
   - Extension opens integrated terminal
   - Shows real-time Docker container creation
   - Displays step-by-step execution output
   - No GitHub cloud runners used

4. **Expected Output**
   ```
   [Hello World Action/say-hello] 🚀  Start image=ghcr.io/catthehacker/ubuntu:act-latest
   [Hello World Action/say-hello]   🐳  docker pull image=ghcr.io/catthehacker/ubuntu:act-latest
   [Hello World Action/say-hello]   🐳  docker create image=ghcr.io/catthehacker/ubuntu:act-latest
   [Hello World Action/say-hello] Say Hello | Hello, GitHub Actions World! 🎉
   [Hello World Action/say-hello] Show current date | Sun Nov  5 15:30:45 UTC 2025
   [Hello World Action/say-hello] List environment info | Runner: Linux
   [Hello World Action/say-hello] List environment info | Repository: diberry/demo-repo
   [Hello World Action/say-hello] List environment info | Branch: main
   ```

#### Part 2: Test Advanced Workflow with Inputs and Secrets
1. **Create Local Secrets File**
   ```bash
   # Create .secrets file in project root
   echo "GITHUB_TOKEN=your_github_token_here" > .secrets
   echo "API_KEY=demo_api_key_12345" >> .secrets
   ```

2. **Run Advanced Workflow**
   - Command Palette → "GitHub Local Actions: Run Workflow"
   - Select `repository-analysis-with-secrets.yml`
   - Choose trigger: `workflow_dispatch`
   - Extension prompts for input parameters:
     - **target_repo**: `microsoft/vscode` (use default)
     - **analysis_type**: `basic` (select from dropdown)

3. **Observe Advanced Features**
   - Input parameter handling in local environment
   - Secrets loading from `.secrets` file
   - Environment variables at job level
   - API calls with authentication
   - Artifact generation locally

4. **Local Artifacts**
   - Check for generated `analysis-report.md`
   - Verify report contains API data
   - Notice artifacts saved locally (not in GitHub)

### Demo Talking Points

#### Extension Benefits Demonstration
- **No cloud pollution**: Test runs don't appear in GitHub Actions history
- **Instant feedback**: No waiting for GitHub runners to spin up
- **Cost-free iteration**: Unlimited local testing within Docker resource limits
- **Offline development**: Works without internet after initial image download
- **Debug capability**: Can pause, inspect, and modify during execution

#### Input Parameter Handling
- **Interactive prompts**: Extension creates form-like interface for inputs
- **Type validation**: Choice inputs show dropdown, boolean shows checkbox
- **Default value population**: Pre-fills forms with workflow defaults
- **Required field validation**: Prevents execution if required inputs missing

#### Secrets Management
- **Local secrets file**: `.secrets` loaded automatically when present
- **Environment variable injection**: Job-level env vars work identically to cloud
- **Security masking**: Secrets still masked in local output for safety
- **Development safety**: Never commit real secrets to repositories

#### Performance Considerations
- **Container reuse**: Subsequent runs faster due to Docker layer caching
- **Image management**: Extension handles pulling and updating runner images
- **Resource usage**: Monitor Docker Desktop resource consumption
- **Cleanup**: Extension can clean up containers automatically

### Common Local Testing Scenarios

#### Rapid Development Workflow
1. **Edit workflow YAML** in VS Code with syntax highlighting
2. **Save changes** (no commit required)
3. **Run locally** via extension
4. **Iterate immediately** based on results
5. **Commit only when satisfied** with workflow logic

#### Debugging Failed Workflows
1. **Add debug steps** with verbose output
2. **Test locally** to identify issues
3. **Fix problems** without cloud execution costs
4. **Validate fixes** before pushing to repository

#### Testing Different Scenarios
1. **Multiple input combinations** without manual GitHub form filling
2. **Different secret configurations** using local `.secrets` files
3. **Branch-specific behavior** by checking out different branches locally
4. **Error condition handling** by simulating failure scenarios

### Troubleshooting Local Execution
```bash
# Common issues and solutions
docker system prune -f          # Clean up Docker resources
act --list                      # Verify workflows detected
act --platform ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-latest  # Use compatible image
act --secret-file .secrets -v   # Verbose output with secrets loading
```

### Demo Conclusion Points
- **Local testing transforms development speed**: Iteration cycles drop from minutes to seconds
- **Confidence before deployment**: Catch issues locally rather than in production workflows
- **Team productivity**: Everyone can test workflows without impacting shared repositories
- **Cost optimization**: Extensive testing without consuming GitHub Actions minutes
- **Learning acceleration**: Experiment freely without fear of breaking shared automation

**Script:**
"Now let's see the real power of local development in action. I'm going to demonstrate running both our Hello World and Advanced workflows locally using the GitHub Local Actions extension. Watch how we can test complex workflows with input parameters and secrets without ever touching GitHub's cloud runners. This is where the development experience becomes truly iterative - we can modify, test, and refine our workflows in seconds rather than minutes. Notice how the extension handles input prompts, loads secrets from our local file, and provides the same execution environment as GitHub's hosted runners. This capability transforms how you develop automation - instead of the traditional commit-push-wait-debug cycle, you get immediate feedback and can iterate rapidly until your workflow is perfect."

**Time: 5-7 minutes**

---

## Slide 13: Dev Container Setup for GitHub Actions Development
**Visual:** Dev Container configuration file and VS Code interface

### Complete Development Environment
This slide provides a production-ready dev container configuration that includes all tools, extensions, and dependencies needed for GitHub Actions development as demonstrated in this presentation.

### Prompt to Generate Dev Container Files

```prompt
Create a complete dev container setup for GitHub Actions development with the following requirements:

CORE REQUIREMENTS:
- Base image: Microsoft's universal dev container with Linux
  (doesn't work on Apple silicon Macs)
- Docker-in-Docker support for nektos/act
- GitHub CLI to help install nektos/act and manage authentication
- Language runtime for local development
- nektos/act extension

VS CODE EXTENSIONS:
- GitHub Local Actions extension by Sanula Ganepola for local testing
- Docker extension for container management

DEVELOPMENT OPTIMIZATIONS:
- YAML schema mapping for GitHub Actions workflow validation
- Format on save enabled
- Proper file associations for .yml and .yaml files
- Port forwarding for web applications (3000, 8080, 9000)

AUTOMATION SETUP:
- Post-creation script that installs nektos/act
- Creates .actrc configuration file with recommended settings
- Generates .secrets.template file for secure local testing
- Updates .gitignore to prevent secret commits
- Creates sample workflow directory structure
- Includes a basic Hello World workflow example

SECURITY FEATURES:
- Template for managing secrets safely
- Proper Docker socket permissions
- Gitignore patterns for local development artifacts

DEVCONTAINER FILES NEEDED:
1. .devcontainer/devcontainer.json - Main configuration
2. .devcontainer/post-create.sh - Setup automation script


The setup should be production-ready, team-friendly, and eliminate "works on my machine" issues.
```

### Dev Container Configuration

#### `.devcontainer/devcontainer.json`
```json
{
  "name": "GitHub Actions Development Environment",
  "image": "mcr.microsoft.com/devcontainers/universal:2-linux",
  
  "features": {
    "ghcr.io/devcontainers/features/docker-in-docker:2": {
      "version": "latest",
      "dockerDashComposeVersion": "v2"
    },
    "ghcr.io/devcontainers/features/github-cli:1": {
      "installDirectlyFromGitHubRelease": true,
      "version": "latest"
    },
    "ghcr.io/devcontainers/features/node:1": {
      "version": "lts",
      "nodeGypDependencies": true
    }
  },

  "customizations": {
    "vscode": {
      "extensions": [
        "GitHub.vscode-github-actions",
        "sanulaganepola.github-local-actions",
        "redhat.vscode-yaml",
        "ms-vscode.vscode-json",
        "GitHub.copilot",
        "GitHub.copilot-chat",
        "GitHub.vscode-pull-request-github",
        "ms-vscode.remote-containers",
        "ms-azuretools.vscode-docker",
        "streetsidesoftware.code-spell-checker"
      ],
      "settings": {
        "yaml.schemas": {
          "https://json.schemastore.org/github-workflow.json": ".github/workflows/*.yml"
        },
        "yaml.customTags": [
          "!And",
          "!If",
          "!Not",
          "!Equals",
          "!Or",
          "!FindInMap sequence",
          "!Base64",
          "!Cidr",
          "!Ref",
          "!Sub",
          "!GetAtt",
          "!GetAZs",
          "!ImportValue",
          "!Select",
          "!Split",
          "!Join sequence"
        ],
        "files.associations": {
          "*.yml": "yaml",
          "*.yaml": "yaml"
        },
        "editor.formatOnSave": true,
        "editor.codeActionsOnSave": {
          "source.fixAll": true
        }
      }
    }
  },

  "postCreateCommand": "bash .devcontainer/post-create.sh",

  "forwardPorts": [3000, 8080, 9000],

  "portsAttributes": {
    "3000": {
      "label": "Application Server",
      "onAutoForward": "notify"
    }
  },

  "remoteUser": "codespace",

  "workspaceFolder": "/workspaces/${localWorkspaceFolderBasename}",

  "mounts": [
    "source=/var/run/docker.sock,target=/var/run/docker-host.sock,type=bind"
  ]
}
```

#### `.devcontainer/post-create.sh`
```bash
#!/bin/bash

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
```

### Key Components Explained

#### **Pre-configured Extensions**
- **GitHub Actions**: Official extension with IntelliSense and validation
- **GitHub Local Actions**: For local testing with nektos/act
- **YAML Support**: Schema validation and syntax highlighting
- **GitHub Copilot**: AI-powered code completion for workflows
- **Docker**: Container management and debugging

#### **Automatic Tool Installation**
- **nektos/act**: For local GitHub Actions execution
- **GitHub CLI**: Repository management and API access
- **Docker-in-Docker**: Container support within dev containers
- **Node.js**: For JavaScript-based actions development

#### **Development Optimizations**
- **YAML schema mapping**: Automatic validation for workflow files
- **Format on save**: Consistent code formatting
- **Port forwarding**: For testing web applications
- **File associations**: Proper syntax highlighting

#### **Security Best Practices**
- **Secrets template**: Safe pattern for managing local secrets
- **Gitignore entries**: Prevents accidental secret commits
- **Permission management**: Proper Docker socket access

### Usage Instructions

#### **Getting Started**
1. **Clone or create repository** with this dev container configuration
2. **Open in VS Code** → "Reopen in Container"
3. **Wait for setup** to complete (shows in terminal)
4. **Copy secrets template**: `cp .secrets.template .secrets`
5. **Edit .secrets file** with your actual tokens and keys

#### **Testing Workflows**
```bash
# Via Command Palette (Recommended)
# Ctrl+Shift+P → "GitHub Local Actions: Run Workflow"

# Via Terminal
act workflow_dispatch                    # Run manual trigger
act -l                                  # List available workflows
act --secret-file .secrets -v          # Verbose output with secrets
```

#### **Development Workflow**
1. **Edit workflows** in `.github/workflows/` with full IntelliSense
2. **Test locally** using extension or command line
3. **Iterate rapidly** without cloud execution
4. **Commit when satisfied** with workflow logic

### Benefits for Teams

#### **Consistency**
- **Identical environment**: Every team member has same tools and versions
- **Reproducible setup**: No "works on my machine" issues
- **Shared configuration**: Extensions and settings synchronized

#### **Productivity**
- **Zero setup time**: Ready to develop immediately after container creation
- **All tools included**: No individual installation requirements
- **Optimized workflow**: Pre-configured for GitHub Actions development

#### **Security**
- **Isolated environment**: Separated from host system
- **Secret management**: Template-based approach for credentials
- **Safe testing**: Local execution without cloud pollution

### Customization Options

#### **Additional Tools**
Add to `features` section:
```json
"ghcr.io/devcontainers/features/azure-cli:1": {},
"ghcr.io/devcontainers/features/terraform:1": {},
"ghcr.io/devcontainers/features/kubectl-helm-minikube:1": {}
```

#### **Team-Specific Extensions**
Add to `extensions` array:
```json
"ms-azuretools.vscode-azurefunctions",
"hashicorp.terraform",
"ms-kubernetes-tools.vscode-kubernetes-tools"
```

#### **Custom Workflows**
Modify `post-create.sh` to include team-specific workflow templates and configurations.

**Script:**
"Here's something that will accelerate your team's adoption - a complete dev container configuration that includes everything we've demonstrated today. This JSON file creates a fully-configured development environment with all the extensions, tools, and settings needed for GitHub Actions development. When team members open this in VS Code, they get nektos/act, the GitHub Local Actions extension, proper YAML validation, and even GitHub Copilot - all pre-configured and ready to use. The post-creation script handles the complex setup automatically, creates secure templates for secrets management, and even includes sample workflows to get started. This eliminates the 'it works on my machine' problem entirely. Whether someone is new to the team or working from a different computer, they get an identical, optimized environment in minutes rather than hours of manual setup. This is how you scale GitHub Actions knowledge across your organization - make it effortless for anyone to start developing automation."

**Time: 3 minutes**

---

## Slide 14: GitHub Local Actions Extension Configuration & Usage
**Visual:** VS Code interface showing extension settings and workflow execution

### Prompt for Extension Configuration

```prompt
Configure the GitHub Local Actions extension for VS Code with these optimal settings:

EXTENSION SETTINGS TO CONFIGURE:
- Default act arguments for consistent execution behavior
- Platform image selection for better compatibility  
- Secrets file location for secure credential management
- Artifact storage location for generated outputs
- Verbose logging during development and debugging
- Container cleanup preferences to prevent disk bloat
- Environment file loading for dynamic configuration

VS CODE WORKSPACE SETTINGS:
- YAML schema validation for GitHub Actions workflows
- File associations for .yml and .yaml files  
- Auto-formatting on save for consistent code style
- IntelliSense and auto-completion for actions
- Syntax highlighting for workflow files

PROJECT CONFIGURATION FILES:
- .actrc file with recommended flags and settings
- .secrets template for secure local development
- .gitignore entries to prevent accidental secret commits
- Sample environment files for different scenarios

OPTIMAL SETTINGS TO INCLUDE:
- Container removal after execution (prevents accumulation)
- Verbose output for debugging workflow issues
- Compatible platform images (catthehacker/ubuntu:act-latest)
- Artifact and cache directory organization
- Secret file management and loading

The configuration should eliminate the need for manual CLI flag management while providing a smooth development experience through the VS Code interface.
```

### Extension Settings Configuration

#### **VS Code Settings (settings.json)**
```json
{
  "githubLocalActions.act.defaultArgs": [
    "--rm",
    "--verbose", 
    "--platform", "ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-latest",
    "--artifact-server-path", "./artifacts",
    "--secret-file", ".secrets"
  ],
  "githubLocalActions.act.executable": "act",
  "githubLocalActions.showActOutput": true,
  "githubLocalActions.act.containerCleanup": "always"
}
```

#### **Project Configuration (.actrc)**
```bash
# Automatically loaded by extension and CLI
--rm
--verbose
--platform ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-latest
--artifact-server-path ./artifacts
--secret-file .secrets
```

### Extension-First Workflow Usage

#### **Running Workflows via Extension**
1. **Command Palette Method**
   - Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
   - Type "GitHub Local Actions: Run Workflow"
   - Select from detected workflows
   - Choose trigger event from dropdown

2. **Explorer Context Menu**
   - Right-click on workflow file in VS Code Explorer
   - Select "Run GitHub Action Locally"
   - Extension handles configuration automatically

3. **CodeLens Integration**
   - Extension adds "Run locally" links above workflow definitions
   - Click to execute with default settings
   - Immediate feedback in integrated terminal

#### **Extension Features for Development**
- **Workflow Detection:** Automatically finds all workflows in `.github/workflows/`
- **Input Prompts:** Creates forms for `workflow_dispatch` input parameters
- **Real-time Output:** Shows execution progress in VS Code terminal
- **Error Highlighting:** Links error messages back to workflow YAML lines
- **Artifact Management:** Opens generated artifacts directly in VS Code

### Extension Settings Breakdown

#### **Execution Management**
- **`defaultArgs`:** Pre-configured flags applied to every run
- **`containerCleanup`:** Automatic container removal after execution
- **`showActOutput`:** Display detailed execution logs in VS Code
- **`executable`:** Path to act binary (auto-detected after installation)

#### **Development Optimizations**
- **Verbose logging:** Shows detailed step execution for debugging
- **Platform consistency:** Uses compatible runner images automatically
- **Secret integration:** Loads `.secrets` file without manual specification
- **Artifact storage:** Organizes outputs in predictable locations

#### **Security and Safety**
- **Secret masking:** Extension respects act's secret masking behavior
- **Container isolation:** Each run uses fresh, isolated environments
- **File watching:** Prevents running workflows with unsaved changes
- **Validation:** Checks workflow syntax before execution

### Extension vs CLI Usage

#### **When to Use Extension Interface**
- **Daily development:** Writing and testing new workflows
- **Interactive debugging:** Step-by-step workflow analysis
- **Input parameter testing:** Workflows with `workflow_dispatch` inputs
- **Artifact inspection:** Viewing generated files and reports
- **Team collaboration:** Consistent execution environment

#### **When CLI is Still Useful**
```bash
# Advanced debugging scenarios
act --dry-run --graph        # Workflow dependency visualization
act --list                   # Quick workflow inventory
act --detect-event          # Event trigger analysis

# Automation and scripting
act workflow_dispatch --input param=value  # Scripted execution
act --env-file .env.staging  # Multiple environment configurations
```

### Troubleshooting via Extension

#### **Common Issues and Solutions**
- **Workflow not detected:** Check `.github/workflows/` folder structure
- **Permission errors:** Verify Docker Desktop is running and accessible
- **Secret loading failures:** Ensure `.secrets` file exists and is properly formatted
- **Container resource limits:** Monitor Docker Desktop resource usage
- **Extension not responding:** Restart VS Code or reload window

#### **Debug Information Access**
- **Output Panel:** View detailed act execution logs
- **Developer Tools:** Access extension debug information
- **Command History:** Review previously executed workflows
- **Error Linking:** Click error messages to jump to problematic YAML lines

### Best Practices for Extension Usage

#### **Project Setup**
1. **Configure settings once** in workspace or user settings
2. **Create `.actrc` file** for project-specific defaults
3. **Set up `.secrets` template** for secure credential management
4. **Use `.gitignore` patterns** to prevent secret commits

#### **Development Workflow**
1. **Edit workflows** with full VS Code IntelliSense support
2. **Save changes** (extension prevents running unsaved files)
3. **Run via Command Palette** or CodeLens for immediate testing
4. **Review output** in integrated terminal with error linking
5. **Iterate rapidly** without leaving VS Code environment

#### **Team Adoption**
- **Share workspace settings** to ensure consistent extension configuration
- **Document `.actrc` patterns** for project-specific requirements
- **Provide `.secrets` templates** for secure onboarding
- **Use dev containers** with pre-configured extension settings

**Script:**
"Now let's focus on making GitHub Local Actions extension work seamlessly in your daily development workflow. The key is proper configuration - by setting up your VS Code workspace settings and project `.actrc` file correctly, you eliminate the need to remember command-line flags and create a consistent experience for your entire team. The extension transforms nektos/act from a command-line tool into an integrated VS Code experience. You can run workflows through the Command Palette, right-click context menus, or even CodeLens links that appear directly in your workflow files. The extension handles input prompts for `workflow_dispatch` triggers, displays real-time output in the integrated terminal, and even links error messages back to specific lines in your YAML files. While the CLI is still useful for advanced debugging scenarios like viewing workflow dependency graphs, the extension should be your primary interface for daily development. The configuration we're showing here eliminates the friction of local testing and makes GitHub Actions development feel native to your VS Code environment."

**Time: 3 minutes**

---



## Slide 15: Demo 1: Repository Content Search Workflow

### What This Demo Shows
**Demo Summary:** Transform a GitHub repository monitoring script into a GitHub Action

### Tools That Help Build Actions
- **VS Code Extensions:**
  - GitHub Actions (GitHub) - Syntax highlighting, IntelliSense, and validation
  - YAML (Red Hat) - YAML syntax support and schema validation
  - GitHub Local Actions (Sanula Ganepola) - Local testing and debugging
- **Linting & Validation:**
  - actionlint - Static checker for GitHub Actions workflow files
  - yamllint - YAML syntax and style checker
  - GitHub's built-in workflow validator
- **AI & Automation Assistance:**
  - GitHub Copilot - AI-powered code completion for workflows
  - MCP Services - Model Context Protocol for enhanced AI assistance
  - GitHub Actions Importer - Convert existing CI/CD pipelines
- **Schema & Documentation:**
  - GitHub Actions JSON Schema - Auto-completion and validation
  - Actions Marketplace - Pre-built actions and examples
  - Workflow syntax documentation - Official GitHub reference

### Demo Steps:
1. **Start with local search concept**
   ```bash
   # Manual search for terms in repository
   grep -r "TODO" . --include="*.md" --include="*.js"
   find . -name "*.py" -exec grep -l "FIXME" {} \;
   ```

2. **Create GitHub Action workflow** (using VS Code with extensions)
   ```yaml
   name: Repository Content Search
   on:
     workflow_dispatch:
       inputs:
         search_terms:
           description: 'Search terms (comma-separated)'
           required: true
           default: 'TODO,FIXME,BUG'
         file_extensions:
           description: 'File extensions to search (comma-separated)'
           required: false
           default: '.md,.js,.ts,.py,.yml,.yaml'
   
   jobs:
     search-content:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Install ripgrep for fast searching
           run: |
             sudo apt-get update
             sudo apt-get install -y ripgrep
         
         - name: Perform fuzzy search
           run: |
             echo "# Repository Content Search Report" > search-report.md
             echo "Generated: $(date)" >> search-report.md
             echo "Repository: ${{ github.repository }}" >> search-report.md
             echo "Branch: ${{ github.ref_name }}" >> search-report.md
             echo "" >> search-report.md
             
             # Convert comma-separated inputs to arrays
             IFS=',' read -ra TERMS <<< "${{ github.event.inputs.search_terms }}"
             IFS=',' read -ra EXTENSIONS <<< "${{ github.event.inputs.file_extensions }}"
             
             # Build file extension pattern for ripgrep
             EXT_PATTERN=""
             for ext in "${EXTENSIONS[@]}"; do
               EXT_PATTERN="$EXT_PATTERN --glob=*$ext"
             done
             
             # Search for each term
             for term in "${TERMS[@]}"; do
               echo "## Search Results for: '$term'" >> search-report.md
               echo "" >> search-report.md
               
               # Use ripgrep for fast, fuzzy-like searching
               if rg --line-number --with-filename --ignore-case $EXT_PATTERN "$term" . > temp_results.txt 2>/dev/null; then
                 echo "Found $(wc -l < temp_results.txt) matches:" >> search-report.md
                 echo "" >> search-report.md
                 echo "\`\`\`" >> search-report.md
                 head -50 temp_results.txt >> search-report.md  # Limit to first 50 results
                 if [ $(wc -l < temp_results.txt) -gt 50 ]; then
                   echo "... (showing first 50 of $(wc -l < temp_results.txt) total matches)" >> search-report.md
                 fi
                 echo "\`\`\`" >> search-report.md
               else
                 echo "No matches found for '$term'" >> search-report.md
               fi
               echo "" >> search-report.md
             done
             
             # Add summary statistics
             echo "## Summary Statistics" >> search-report.md
             echo "- Total files in repository: $(find . -type f | wc -l)" >> search-report.md
             echo "- Search terms: ${{ github.event.inputs.search_terms }}" >> search-report.md
             echo "- File extensions searched: ${{ github.event.inputs.file_extensions }}" >> search-report.md
             echo "- Search completed: $(date)" >> search-report.md
             
             # Clean up temp files
             rm -f temp_results.txt
         
         - name: Upload search report as artifact
           uses: actions/upload-artifact@v4
           with:
             name: repository-search-report-${{ github.run_number }}
             path: search-report.md
             retention-days: 30
         
         - name: Post summary to Action Summary
           run: |
             echo "## 🔍 Repository Search Completed" >> $GITHUB_STEP_SUMMARY
             echo "" >> $GITHUB_STEP_SUMMARY
             echo "**Search Terms:** ${{ github.event.inputs.search_terms }}" >> $GITHUB_STEP_SUMMARY
             echo "**File Extensions:** ${{ github.event.inputs.file_extensions }}" >> $GITHUB_STEP_SUMMARY
             echo "**Repository:** ${{ github.repository }}" >> $GITHUB_STEP_SUMMARY
             echo "**Branch:** ${{ github.ref_name }}" >> $GITHUB_STEP_SUMMARY
             echo "" >> $GITHUB_STEP_SUMMARY
             echo "### 📋 Quick Summary" >> $GITHUB_STEP_SUMMARY
             
             # Add quick stats to summary
             IFS=',' read -ra TERMS <<< "${{ github.event.inputs.search_terms }}"
             for term in "${TERMS[@]}"; do
               count=$(rg --count --ignore-case "$term" . 2>/dev/null | awk -F: '{sum += $2} END {print sum+0}')
               echo "- **$term**: $count matches found" >> $GITHUB_STEP_SUMMARY
             done
             
             echo "" >> $GITHUB_STEP_SUMMARY
             echo "📄 **Detailed report available in artifacts:** \`repository-search-report-${{ github.run_number }}\`" >> $GITHUB_STEP_SUMMARY
             echo "" >> $GITHUB_STEP_SUMMARY
             echo "🕒 **Search completed at:** $(date)" >> $GITHUB_STEP_SUMMARY
   ```

3. **Validate and test locally with GitHub Local Actions extension**

**Script:**
"Before we dive into the demo, let's talk about the tools that make building GitHub Actions much easier. VS Code has excellent extensions - the official GitHub Actions extension provides syntax highlighting and IntelliSense, while the GitHub Local Actions extension we installed earlier handles local testing. For quality assurance, actionlint is fantastic for catching workflow errors before you commit. And if you're using GitHub Copilot or MCP services, they can significantly speed up workflow creation by suggesting common patterns and actions. Let's see this in action - I'll create a workflow that performs fuzzy content searches across our repository. Instead of manually running grep commands to find TODO items, technical debt, or specific patterns, we'll automate this into a searchable, repeatable process that generates detailed reports as artifacts. This demonstrates how GitHub Actions can transform ad-hoc repository analysis into systematic, shareable intelligence."

**Time: 5-7 minutes**

---

## Slide 16: DEMO 2 - Local Testing with GitHub Local Actions
**Demo Summary:** Show local debugging and iteration workflow using the extension

### Demo Steps:
1. **Run action locally via extension**
   - Open Command Palette (Ctrl+Shift+P)
   - Search "GitHub Local Actions: Run Workflow"
   - Select the Repository Activity Monitor workflow
   - Choose trigger event (workflow_dispatch)

2. **Debug and iterate**
   - View real-time output in VS Code terminal
   - Modify workflow YAML file
   - Re-run immediately without pushing to GitHub
   - Test different schedule triggers

3. **Verify results**
   - Check generated activity report
   - Validate Teams notification (if configured)
   - Confirm workflow logic works as expected

**Script:**
"Now I'll show you the real power - testing this action locally using the GitHub Local Actions extension. Instead of pushing to GitHub and waiting for a runner, I can test immediately on my machine. The extension provides a seamless interface that makes local testing feel native to VS Code. You can iterate rapidly, debug issues, and perfect your workflow before it ever runs in the cloud."

**Time: 5-7 minutes**

---

## Slide 17: GitHub Actions Architecture & Features
**Visual:** Workflow architecture diagram showing inputs, processing, and outputs

### Workflow Input & Configuration
```yaml
name: Production Deployment Pipeline
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Target environment'
        required: true
        default: 'staging'
        type: choice
        options: ['staging', 'production']
      force_deploy:
        description: 'Force deployment'
        type: boolean
        default: false
  push:
    branches: [main]
  schedule:
    - cron: '0 2 * * 1-5'  # Weekdays at 2 AM
```

### Runtime Environment & State Management
- **Base Images:** Ubuntu, Windows, macOS runners with pre-installed tools
- **Secrets Management:** Repository, environment, and organization-level secrets
- **Environment Variables:** Runtime configuration and state passing
- **Matrix Strategies:** Parallel execution across multiple configurations
- **Caching:** Dependency and build artifact caching for performance

### Job Orchestration & Dependencies
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    outputs:
      test-results: ${{ steps.test.outputs.results }}
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        id: test
        run: echo "results=passed" >> $GITHUB_OUTPUT

  security-scan:
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    steps:
      - name: Security scan
        run: echo "Scanning for vulnerabilities..."

  deploy:
    needs: [test, security-scan]
    runs-on: ubuntu-latest
    if: needs.test.outputs.test-results == 'passed'
    environment: production
    steps:
      - name: Deploy to production
        run: echo "Deploying application..."
```

### Conditional Logic & Flow Control
- **Job Dependencies:** `needs` keyword for sequential/parallel execution
- **Conditional Steps:** `if` expressions based on context, outputs, or events
- **Environment Gates:** Manual approvals and protection rules
- **Failure Handling:** `continue-on-error` and `always()` conditions
- **Matrix Exclusions:** Skip specific combinations in matrix builds

### Output & Persistence Options
```yaml
steps:
  - name: Generate report
    run: |
      echo "## Build Summary" >> $GITHUB_STEP_SUMMARY
      echo "✅ Tests passed: 95%" >> $GITHUB_STEP_SUMMARY
      
  - name: Upload artifacts
    uses: actions/upload-artifact@v3
    with:
      name: build-artifacts
      path: dist/
      
  - name: Store in database
    env:
      DATABASE_URL: ${{ secrets.DATABASE_URL }}
    run: |
      curl -X POST $DATABASE_URL/api/deployments \
        -H "Content-Type: application/json" \
        -d '{"status": "deployed", "version": "${{ github.sha }}"}'
        
  - name: Push to storage
    run: |
      az storage blob upload-batch \
        --destination reports \
        --source ./reports \
        --account-name ${{ secrets.STORAGE_ACCOUNT }}
```

### Advanced Integration Capabilities
- **Service Containers:** Run databases, Redis, or other services during workflows
- **Self-hosted Runners:** Custom environments with specific tools or security requirements
- **Reusable Workflows:** Call workflows from other repositories
- **Composite Actions:** Package multiple steps into reusable actions
- **OIDC Integration:** Keyless authentication with cloud providers

**Script:**
"Now that you've seen GitHub Actions in action with our first two demos, let's dive deeper into what makes this platform so powerful. GitHub Actions isn't just about running scripts - it's a full orchestration platform with sophisticated workflow capabilities. You can accept input parameters for dynamic behavior, securely manage secrets and environment variables, and use pre-configured runner images with extensive tooling. The real power comes from job orchestration - you can run jobs in parallel, create dependencies between them, and use conditional logic to control execution flow based on results, events, or manual inputs. For outputs, you're not limited to console logs - you can generate rich summaries with markdown, store artifacts for later use, push data to databases or cloud storage, and integrate with external systems. This architecture transforms simple automation into enterprise-grade pipelines that can handle complex deployment scenarios, compliance workflows, and data processing tasks."

**Time: 3 minutes**

---

## Slide 18: Team Adoption and Governance
**Visual:** Organizational workflow diagram

### Making Automation Discoverable

#### **Documentation Strategy**
- **README files:** Clear usage instructions with examples
- **Workflow comments:** Inline documentation explaining complex logic
- **Wiki pages:** Central documentation hub for all team automations
- **Video walkthroughs:** Screen recordings showing workflow usage

#### **Repository Organization**
- **Dedicated automation repos:** Central location for shared workflows
- **Template repositories:** Pre-configured setups for common patterns
- **Workflow libraries:** Reusable actions and composite workflows
- **Example collections:** Real-world use cases and implementations

#### **Team Enablement**
- **Lunch and learns:** Regular knowledge sharing sessions
- **Pair programming:** Work together on automation challenges
- **Office hours:** Dedicated time for automation questions
- **Champions program:** Power users who help onboard others

### Governance and Security

#### **Access Control Strategy**
- **Repository permissions:** Who can create and modify workflows
- **Environment protection:** Manual approvals for production deployments
- **Secret management:** Organizational vs repository-level secrets
- **Branch protection:** Require reviews for workflow changes

#### **Security Best Practices**
```yaml
# Example: Secure secret handling
env:
  AZURE_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
  AZURE_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
# Never: AZURE_SECRET: "hardcoded-value"
```

#### **Cost and Resource Management**
- **Usage monitoring:** Track Actions minutes across the organization
- **Efficiency guidelines:** Best practices for optimizing workflow runtime
- **Resource limits:** Self-hosted runners for heavy workloads
- **Budget alerts:** Notifications when approaching limits

#### **Compliance and Auditing**
- **Workflow approval process:** Review workflows before deployment
- **Change tracking:** Git history provides complete audit trail
- **Security scanning:** Automated checks for hardcoded secrets
- **Regular reviews:** Quarterly assessment of all team automations

### Adoption Success Metrics

#### **Usage Indicators**
- **Active workflows:** Number of workflows running regularly
- **Team participation:** Percentage of team members creating workflows
- **Problem resolution:** Time saved on manual tasks
- **Error reduction:** Decreased incidents from manual processes

#### **Practical Implementation Steps**
1. **Start small:** Begin with one high-value, low-risk automation
2. **Show success:** Document time savings and error reduction
3. **Gather feedback:** Regular retrospectives on automation effectiveness
4. **Scale gradually:** Expand to more complex scenarios based on learning
5. **Celebrate wins:** Recognize successful automation implementations

**Script:**
"Success isn't just about building the automation - it's about making it discoverable, maintainable, and governable across your organization. The key is starting with clear documentation and strong examples that help your team understand not just how to use the workflows, but why they're valuable. Governance isn't about creating barriers - it's about creating safe patterns that allow teams to innovate while maintaining security and compliance. The most successful teams treat automation as a shared capability, with clear ownership, regular reviews, and continuous improvement. Remember, adoption is a process, not an event. Start with your most enthusiastic team members, prove the value with concrete examples, and let success drive broader adoption."

**Time: 2 minutes**

---

## Slide 19: Team Integration & Notifications
**Visual:** Integration diagram showing GitHub Actions connecting to various team tools

### Webhook & Notification Integrations
- **Microsoft Teams:** Real-time workflow notifications and status updates
- **Slack:** Cross-platform team communication integration
- **Email notifications:** Built-in GitHub Actions email capabilities
- **Custom webhooks:** POST to any HTTP endpoint with workflow data
- **Azure Logic Apps:** Complex workflow orchestration and business process automation

### Teams Integration Deep Dive
```yaml
- name: Post summary to Teams
  uses: skitionek/notify-microsoft-teams@master
  with:
    webhook_url: ${{ secrets.TEAMS_WEBHOOK }}
    title: "📊 Repository Activity Report"
    message: "Daily repository activity report available"
    color: "28a745"  # Green for success
```

### Best Practices for Team Notifications
- **Selective notifications:** Only alert on important events
- **Rich formatting:** Use cards, colors, and emojis for clarity
- **Actionable content:** Include links to reports, PRs, or dashboards
- **Failure handling:** Always include error notifications for critical workflows

**Script:**
"One of the most powerful aspects of GitHub Actions is how it integrates with your existing team collaboration tools. Whether you're using Microsoft Teams, Slack, or custom webhooks, you can ensure your team stays informed about automation results. The key is being selective - you want notifications that add value, not noise. For Microsoft Teams specifically, you can create rich, actionable notifications that help your team stay on top of repository activity without overwhelming them."

**Time: 2 minutes**

---

## Slide 20: Resources and Community
**Visual:** Links and references

### Essential Documentation
- **GitHub Actions Documentation:** [docs.github.com/actions](https://docs.github.com/actions)
- **Workflow Syntax Reference:** [docs.github.com/actions/reference/workflow-syntax-for-github-actions](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions)
- **GitHub Actions Changelog:** Track new features and deprecations
- **Azure Actions Marketplace:** Pre-built Azure integrations
- **Community Examples:** [github.com/actions/starter-workflows](https://github.com/actions/starter-workflows)

### Development & Testing Tools
- **nektos/act:** [github.com/nektos/act](https://github.com/nektos/act) - Local workflow testing
- **actionlint:** [github.com/rhysd/actionlint](https://github.com/rhysd/actionlint) - Static workflow validation
- **act-js:** [github.com/kiegroup/act-js](https://github.com/kiegroup/act-js) - Programmatic act interface
- **GitHub Actions Toolkit:** [github.com/actions/toolkit](https://github.com/actions/toolkit) - Build custom actions

### VS Code Extensions
- **GitHub Actions (Official):** Syntax highlighting and IntelliSense
- **GitHub Local Actions:** By Sanula Ganepola - Local testing integration
- **YAML:** By Red Hat - Schema validation
- **GitHub Copilot:** AI-powered workflow generation

### Debugging & Troubleshooting
- **Debug Logging:** Add `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG` secrets
- **GitHub Actions Runner:** [github.com/actions/runner](https://github.com/actions/runner) - Understand runner internals
- **act Troubleshooting Guide:** Common local testing issues
- **Workflow Visualization:** [github.com/githubocto/flat-viewer](https://github.com/githubocto/flat-viewer) - Visualize workflow runs

### Online Tools & Utilities
- **GitHub Actions Status:** [www.githubstatus.com](https://www.githubstatus.com) - Service status monitoring
- **Action Versions:** [github-actions-up-to-date.vercel.app](https://github-actions-up-to-date.vercel.app) - Check for outdated actions
- **Workflow Parser:** [rhysd.github.io/actionlint](https://rhysd.github.io/actionlint/) - Online workflow validation
- **Cron Expression Generator:** [crontab.guru](https://crontab.guru) - Schedule syntax helper

### Security & Best Practices
- **GitHub Security Lab:** [securitylab.github.com](https://securitylab.github.com) - Security research and guidance
- **Actions Hardening Guide:** Official security recommendations
- **Dependabot for Actions:** Automated action version updates
- **Secret Scanning:** Detect exposed credentials in workflows

### Community & Support
- **GitHub Community:** GitHub Discussions for actions
- **Stack Overflow:** `github-actions` tag
- **Reddit:** r/github and r/devops communities
- **Discord:** GitHub Community Discord server
- **Internal Teams:** Azure content automation channel

### Learning Resources
- **GitHub Learning Lab:** Interactive GitHub Actions courses
- **GitHub Actions Heroes:** Community showcase and case studies
- **YouTube Channels:** GitHub, DevOps tutorials, and workflow examples
- **Blog Posts:** GitHub Blog's Actions category

**Script:**
"You're not alone in this journey. There's a rich ecosystem of tools, documentation, and community support specifically for GitHub Actions development. For development, actionlint is essential for catching workflow errors before you commit, and the GitHub Actions Toolkit helps if you're building custom actions. The online tools I've listed here solve real problems - checking if your actions are outdated, validating workflow syntax, and understanding cron expressions. For debugging, remember that you can enable detailed logging with the debug secrets we discussed. The GitHub Security Lab provides crucial guidance on securing your workflows, and Dependabot can automatically keep your action versions up to date. Start with the official docs and actionlint for validation, explore the community examples for inspiration, and don't hesitate to use the debugging tools when things don't work as expected. The GitHub Community and Stack Overflow are incredibly responsive for troubleshooting specific issues."

**Time: 2 minutes**

---

## Slide 21: Advanced GitHub Actions Secrets - Tips Even Experts Miss
**Visual:** Code snippets showing advanced patterns

### 1. Reusable Workflows Call Other Repositories
**What most people miss:** You can call workflows from other repositories, creating a centralized automation library

```yaml
# .github/workflows/deploy.yml
name: Deploy Application
on: workflow_dispatch

jobs:
  call-shared-workflow:
    uses: your-org/shared-workflows/.github/workflows/azure-deploy.yml@main
    with:
      environment: production
      region: eastus
    secrets:
      AZURE_CREDENTIALS: ${{ secrets.AZURE_CREDENTIALS }}
```

**Why this matters:**
- **Single source of truth:** Update deployment logic once, affects all repositories
- **Version control:** Pin to specific versions (`@v1`, `@main`, `@commit-sha`)
- **Organization-wide standards:** Enforce best practices across teams
- **Reduced duplication:** Write complex workflows once, reuse everywhere

**Real-world use case:** Create a shared workflow library repository that contains your organization's approved deployment patterns, security scans, and compliance checks. Teams can consume these without reinventing the wheel.

---

### 2. Composite Actions in `.github/actions/` ARE Local Reusable Components
**What most people miss:** The `.github/actions/` folder creates custom, reusable building blocks for your workflows

```yaml
# .github/actions/setup-azure/action.yml
name: Setup Azure Environment
description: Configures Azure CLI and authenticates
inputs:
  azure-credentials:
    description: 'Azure service principal credentials'
    required: true
runs:
  using: composite
  steps:
    - name: Azure Login
      uses: azure/login@v1
      with:
        creds: ${{ inputs.azure-credentials }}
    
    - name: Set default subscription
      shell: bash
      run: az account set --subscription ${{ inputs.subscription-id }}

# Use it in multiple workflows:
# .github/workflows/deploy-staging.yml
steps:
  - uses: ./.github/actions/setup-azure
    with:
      azure-credentials: ${{ secrets.AZURE_CREDS }}
```

**Why this matters:**
- **DRY principle:** Eliminate repeated step sequences across workflows
- **Encapsulation:** Hide complexity behind simple interfaces
- **Testability:** Test action logic independently from workflows
- **Not automatically discovered:** Must be explicitly called with `uses: ./.github/actions/action-name`

**Common misconception:** Many developers think actions ONLY come from the marketplace. Your repository can define its own reusable actions that work exactly like marketplace actions.

---

### 3. Job Outputs Enable Workflow Orchestration
**What most people miss:** Jobs can pass data to downstream jobs, enabling sophisticated conditional logic

```yaml
jobs:
  check-changes:
    runs-on: ubuntu-latest
    outputs:
      backend-changed: ${{ steps.filter.outputs.backend }}
      frontend-changed: ${{ steps.filter.outputs.frontend }}
    steps:
      - uses: actions/checkout@v4
      - uses: dorny/paths-filter@v2
        id: filter
        with:
          filters: |
            backend:
              - 'api/**'
            frontend:
              - 'web/**'

  deploy-backend:
    needs: check-changes
    if: needs.check-changes.outputs.backend-changed == 'true'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy API
        run: echo "Deploying backend..."

  deploy-frontend:
    needs: check-changes
    if: needs.check-changes.outputs.frontend-changed == 'true'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy Web
        run: echo "Deploying frontend..."
```

**Why this matters:**
- **Intelligent execution:** Only run jobs when necessary
- **Cost optimization:** Skip unnecessary deployments and tests
- **Complex workflows:** Build decision trees based on previous job results
- **Parallel execution:** Jobs run concurrently unless explicitly dependent

**Advanced pattern:** Use job outputs to implement approval gates, environment promotion logic, or dynamic matrix generation.

---

### 4. `$GITHUB_STEP_SUMMARY` Creates Rich Markdown Reports
**What most people miss:** GitHub provides a special file path for creating beautiful workflow summaries

```yaml
- name: Generate deployment summary
  run: |
    echo "## 🚀 Deployment Summary" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY
    echo "| Metric | Value |" >> $GITHUB_STEP_SUMMARY
    echo "|--------|-------|" >> $GITHUB_STEP_SUMMARY
    echo "| Environment | Production |" >> $GITHUB_STEP_SUMMARY
    echo "| Region | East US |" >> $GITHUB_STEP_SUMMARY
    echo "| Build Time | 3m 42s |" >> $GITHUB_STEP_SUMMARY
    echo "| Tests Passed | ✅ 247/247 |" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY
    echo "### 🔗 Resources" >> $GITHUB_STEP_SUMMARY
    echo "- [Application URL](https://myapp.azurewebsites.net)" >> $GITHUB_STEP_SUMMARY
    echo "- [Build Artifacts](./artifacts)" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY
    echo "✨ Deployment completed successfully at $(date)" >> $GITHUB_STEP_SUMMARY
```

**Why this matters:**
- **Professional presentation:** Shows rich formatted output in Actions UI
- **Stakeholder friendly:** Non-technical users can understand results
- **Replaces digging through logs:** Key information visible at a glance
- **Supports full Markdown:** Tables, links, images, checkboxes, code blocks

**Hidden feature:** Multiple steps can append to the same summary, building a comprehensive report throughout the workflow.

---

### 5. Matrix Strategies with Dynamic Values from Job Outputs
**What most people miss:** Matrix values can be dynamically generated from previous job outputs, not just hardcoded

```yaml
jobs:
  discover-environments:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
      - name: Generate dynamic matrix
        id: set-matrix
        run: |
          # Dynamically discover environments from API or config
          ENVIRONMENTS=$(curl -s https://api.example.com/environments | jq -c)
          echo "matrix={\"environment\":$ENVIRONMENTS}" >> $GITHUB_OUTPUT

  deploy:
    needs: discover-environments
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{ fromJSON(needs.discover-environments.outputs.matrix) }}
    steps:
      - name: Deploy to ${{ matrix.environment }}
        run: |
          echo "Deploying to ${{ matrix.environment }}"
```

**Why this matters:**
- **Configuration as code:** Environments defined in external systems
- **Auto-scaling workflows:** Automatically adapt to infrastructure changes
- **Database-driven workflows:** Query databases for deployment targets
- **API-driven automation:** Integrate with external orchestration systems

**Advanced use case:** Query your Azure subscription for all app services matching a tag, then deploy to each dynamically without hardcoding names.

---

### Bonus Tip: Debug Secrets Without Exposing Them
**What most people miss:** You can debug secret availability without exposing values

```yaml
- name: Debug secrets availability
  env:
    AZURE_CREDS: ${{ secrets.AZURE_CREDENTIALS }}
    API_KEY: ${{ secrets.API_KEY }}
  run: |
    echo "Checking secret availability..."
    echo "AZURE_CREDS is set: $([[ -n "$AZURE_CREDS" ]] && echo 'YES ✅' || echo 'NO ❌')"
    echo "AZURE_CREDS length: ${#AZURE_CREDS} characters"
    echo "AZURE_CREDS first 4 chars: ${AZURE_CREDS:0:4}****"
    echo "API_KEY is set: $([[ -n "$API_KEY" ]] && echo 'YES ✅' || echo 'NO ❌')"
```

**Why this matters:**
- **Safe debugging:** Confirm secrets are available without exposing them
- **Troubleshooting:** Identify missing or incorrectly named secrets
- **Validation:** Verify secret format without revealing content
- **Team support:** Help colleagues debug secret configuration issues

---

### 6. Concurrency Controls Prevent Redundant Workflow Runs
**What most people miss:** You can automatically cancel in-progress workflows when new commits are pushed

```yaml
name: Build and Test
on: [push, pull_request]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Long running build
        run: |
          echo "Building application..."
          sleep 300  # 5 minute build
```

**Why this matters:**
- **Cost savings:** Stop wasting runner minutes on outdated code
- **Faster feedback:** Latest code always gets priority in the queue
- **PR optimization:** Rapid commits don't queue up multiple obsolete builds
- **Resource efficiency:** Runners become available for other workflows faster

**Real-world scenario:** Developer pushes 5 commits to a PR in quick succession. Without concurrency control, all 5 builds run (wasting 25 minutes). With concurrency control, only the latest commit builds (5 minutes total).

**Advanced pattern:** Use different concurrency groups for different workflow types:
```yaml
# Cancel previous PR builds, but not production deployments
concurrency:
  group: ${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: ${{ github.ref != 'refs/heads/main' }}
```

---

### 7. Environment Protection Rules with Required Reviewers
**What most people miss:** GitHub provides built-in deployment approval gates without external tools

```yaml
jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    environment: staging  # No approval needed
    steps:
      - name: Deploy to staging
        run: echo "Deploying to staging..."

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://myapp.azurewebsites.net
    steps:
      - name: Deploy to production
        run: |
          echo "Deploying to production after approval..."
          az webapp deploy --name myapp --resource-group prod
```

**Complete Configuration Guide (via GitHub UI):**

#### **Step 1: Create Environment**
1. Navigate to **Repository Settings** → **Environments** (left sidebar)
2. Click **New environment** button
3. Enter environment name: `production` (case-sensitive, must match YAML)
4. Click **Configure environment**

#### **Step 2: Configure Protection Rules**

**Required Reviewers (Approval Gates):**
- Click **Add required reviewers** under Environment protection rules
- Search and select up to 6 reviewers:
  - Individual users: `@username`
  - Teams: `@org/team-name` (requires organization)
  - Mix of users and teams allowed
- **Behavior:** Any ONE reviewer can approve (not all required)
- **Self-review prevention:** User who triggered workflow cannot approve their own deployment
- **Notification:** Reviewers receive email and GitHub notification when approval needed

**Wait Timer (Deployment Delays):**
- Enable **Wait timer** checkbox
- Set delay: 0-43,200 minutes (up to 30 days)
- **Use cases:**
  - Maintenance windows: Wait until off-peak hours
  - Rollback buffer: 15-minute delay allows cancellation if issues detected in staging
  - Business hours enforcement: Prevent deployments during weekends
- **Behavior:** Timer starts when workflow reaches environment job
- **Can override:** Reviewers can approve during wait period to proceed early

**Deployment Branches (Branch Protection):**
- Select **Selected branches** under deployment branches
- Add branch name patterns:
  - **Exact match:** `main`, `production`
  - **Wildcard patterns:** `release/*`, `hotfix/*`
  - **Multiple patterns:** Add several rules for flexibility
- **Default:** If not configured, any branch can deploy to environment
- **Protection:** Prevents accidental deployments from feature branches

**Environment Secrets (Scoped Credentials):**
- Scroll to **Environment secrets** section
- Click **Add secret**
- Enter secret name and value (e.g., `PROD_AZURE_CREDENTIALS`)
- **Scope:** Only available to jobs using this environment
- **Priority:** Environment secrets override repository secrets with same name
- **Security benefit:** Production credentials not accessible to staging deployments

**Additional Settings:**

**Prevent self-review:**
- Automatically enabled with required reviewers
- User who triggered the workflow cannot approve
- Ensures separation of deployment execution and approval

**Review timeout:**
- Default: No timeout (waits indefinitely)
- Workflow can timeout based on job timeout settings
- Reviewers can reject to explicitly fail the deployment

#### **Step 3: Approval Workflow Experience**

**For the Developer (Triggering Deployment):**
1. Push code or manually trigger workflow
2. Workflow runs until it reaches environment-protected job
3. Job shows **Waiting for approval** status with orange indicator
4. Notification sent to all required reviewers
5. Can view pending approval in Actions tab

**For the Reviewer (Approving Deployment):**
1. Receive email: "Deployment review requested for [environment]"
2. Click notification or navigate to Actions → Select workflow run
3. See **Review pending deployments** button at top
4. Click to open review dialog showing:
   - Environment name
   - Who requested deployment
   - Workflow details and changes
   - Recent commits included
5. Add optional comment explaining approval decision
6. Click **Approve and deploy** or **Reject**
7. Deployment proceeds immediately (or after wait timer)

**Rejection Behavior:**
- Job fails with status: "Deployment rejected"
- Workflow stops (subsequent jobs don't run)
- Clear audit log of who rejected and why

#### **Step 4: Viewing Deployment History**

**Deployment Timeline:**
- Navigate to **Environments** from repository home
- Click environment name (e.g., `production`)
- View complete deployment history:
  - When deployed
  - Who approved
  - Deployment status
  - Associated workflow run link
  - Environment URL (if configured)

**Audit Trail:**
- Each deployment shows:
  - **Triggered by:** Original workflow initiator
  - **Approved by:** Reviewer who approved
  - **Timestamp:** When approval granted
  - **Comments:** Review decision rationale
- **Compliance benefit:** Full audit log for security reviews

#### **Step 5: Advanced Configuration Patterns**

**Multiple Environments with Different Protection:**
```yaml
jobs:
  deploy-dev:
    environment: development  # No protection
    steps:
      - name: Deploy to dev
        run: echo "Auto-deploy to dev"

  deploy-staging:
    needs: deploy-dev
    environment: 
      name: staging
      url: https://staging.myapp.com
    # Wait timer: 5 minutes, no reviewers
    steps:
      - name: Deploy to staging
        run: echo "Deploy to staging after 5 min delay"

  deploy-production:
    needs: deploy-staging
    environment:
      name: production
      url: https://myapp.com
    # Required reviewers + 15 minute wait timer
    steps:
      - name: Deploy to production
        run: echo "Deploy to prod after approval + 15 min"
```

**Environment-Specific Configuration:**
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ github.event.inputs.target_env }}
    steps:
      - name: Deploy to dynamic environment
        env:
          # Environment secrets automatically loaded
          AZURE_CREDS: ${{ secrets.AZURE_CREDENTIALS }}
          DATABASE_URL: ${{ secrets.DATABASE_CONNECTION }}
        run: |
          echo "Deploying to ${{ github.event.inputs.target_env }}"
          # Different secrets loaded based on environment
```

**Why this matters:**
- **Zero infrastructure:** No external tools (ServiceNow, Jira) needed for approvals
- **Compliance:** Complete audit trail of who approved what and when
- **Safety gates:** Prevent accidental production deployments from feature branches
- **Team coordination:** Multiple reviewers can be required, prevents single point of failure
- **Time windows:** Combine wait timers with approvals for maintenance window enforcement
- **Scoped secrets:** Production credentials only accessible to production deployments
- **PR integration:** Deployment status appears in pull requests with direct links

**Hidden features:**
1. **Deployment status badges:** Environments appear in PR with status (waiting, approved, deployed)
2. **Cancel pending deployments:** Reviewers can cancel waiting deployments before approval
3. **Re-run with approvals:** Re-running a workflow re-requests approvals (security feature)
4. **API access:** GitHub API can query environment deployment history programmatically
5. **Organization environments:** Enterprise can create org-level environments shared across repos

**Common Patterns:**

**Pattern 1: Time-based deployments**
- Set wait timer to delay until business hours
- Configure: 480 minutes (8 hours) wait during overnight deployments
- Allows automatic rollback window if issues detected

**Pattern 2: Four-eyes principle**
- Add 2+ required reviewers
- Ensures at least one person reviews before production deployment
- Common in regulated industries (finance, healthcare)

**Pattern 3: Branch-restricted deployments**
- Production environment: Only `main` branch
- Staging environment: `main`, `release/*`, `hotfix/*` branches
- Development environment: Any branch allowed
- Prevents accidental production deployment from feature work

**Pattern 4: Progressive deployment with gates**
```
Dev (auto) → Staging (5 min wait) → Production (approval + 15 min wait)
```
- Each environment has increasing protection
- Natural progression with safety gates at each stage

---

### 8. GITHUB_OUTPUT vs Deprecated set-output Commands
**What most people miss:** The old `set-output` syntax has security vulnerabilities and is deprecated

```yaml
# ❌ OLD WAY (deprecated since October 2022, security risk)
- name: Set version (INSECURE)
  id: old-version
  run: echo "::set-output name=version::1.2.3"

# ✅ NEW WAY (secure, recommended)
- name: Set version (SECURE)
  id: new-version
  run: echo "version=1.2.3" >> $GITHUB_OUTPUT

# Using the output
- name: Use version
  run: echo "Version is ${{ steps.new-version.outputs.version }}"
```

**Why this matters:**
- **Security vulnerability:** Old syntax susceptible to injection attacks
- **Deprecation warnings:** GitHub will show warnings in workflow logs
- **Future-proof:** Old syntax may be removed entirely
- **Best practices:** New syntax is the official recommendation

**The security issue explained:**
```yaml
# Attacker-controlled input could inject commands with old syntax
- run: echo "::set-output name=value::$USER_INPUT"
# If USER_INPUT contains "::set-output name=token::secret123"
# it would set additional outputs maliciously

# New syntax prevents this injection
- run: echo "value=$USER_INPUT" >> $GITHUB_OUTPUT
# Injection attempts are written literally to file, not interpreted
```

**Migration tip:** Search your workflows for `::set-output` and replace with `>> $GITHUB_OUTPUT` pattern.

---

### 9. Cache Action for Massive Dependency Speed-Up
**What most people miss:** Dependency installation can be cached, reducing workflow time by 70-90%

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      # Cache Node.js dependencies
      - uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      
      - name: Install dependencies
        run: npm ci  # Will use cache if available
      
      # Cache Python dependencies
      - uses: actions/cache@v3
        with:
          path: ~/.cache/pip
          key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
          restore-keys: |
            ${{ runner.os }}-pip-
      
      - name: Install Python packages
        run: pip install -r requirements.txt
```

**Why this matters:**
- **Time savings:** Reduce npm install from 2-5 minutes to 10-30 seconds
- **Cost efficiency:** Less runner time = lower costs
- **Faster feedback:** Developers get results quicker
- **Cache hits:** 80-90% hit rate for stable dependencies

**Cache key strategy:**
- **Primary key:** `${{ hashFiles('**/package-lock.json') }}` - exact match required
- **Restore keys:** Fallback patterns if exact match not found
- **Cache scope:** Per branch by default, can be shared across branches

**Common caching patterns:**
```yaml
# Docker layer caching
- uses: actions/cache@v3
  with:
    path: /tmp/.buildx-cache
    key: ${{ runner.os }}-buildx-${{ github.sha }}

# Terraform provider caching
- uses: actions/cache@v3
  with:
    path: ~/.terraform.d/plugin-cache
    key: ${{ runner.os }}-terraform-${{ hashFiles('**/.terraform.lock.hcl') }}

# Maven dependencies
- uses: actions/cache@v3
  with:
    path: ~/.m2/repository
    key: ${{ runner.os }}-maven-${{ hashFiles('**/pom.xml') }}
```

**Pro tip:** Cache has 10GB limit per repository. Clean old caches via Settings → Actions → Caches.

---

### 10. Path Filters Optimize Monorepo Workflows
**What most people miss:** You can trigger workflows only when specific files or folders change

```yaml
name: Backend API Tests
on:
  push:
    paths:
      - 'api/**'           # Only run when API code changes
      - 'shared/**'        # Or shared libraries
      - 'package.json'     # Or root dependencies
      - '.github/workflows/api-test.yml'  # Or this workflow itself
    paths-ignore:
      - '**.md'            # Ignore documentation changes
      - 'docs/**'          # Ignore docs folder
      - 'frontend/**'      # Ignore frontend code

jobs:
  test-api:
    runs-on: ubuntu-latest
    steps:
      - name: Test backend only
        run: npm test -- --scope=api
```

**Why this matters:**
- **Monorepo efficiency:** Don't build frontend when backend changes
- **Cost optimization:** Run only necessary workflows
- **Faster pipelines:** Reduced queue times for critical workflows
- **Clear separation:** Different teams own different workflows

**Advanced pattern - OR logic:**
```yaml
# Run if EITHER backend OR infrastructure changes
on:
  push:
    paths:
      - 'src/api/**'
      - 'infrastructure/**'
```

**Advanced pattern - Combined with PR paths:**
```yaml
on:
  pull_request:
    paths:
      - 'src/**'        # Only run for source code changes
    branches:
      - main
      - develop
```

**Using with dorny/paths-filter action for complex logic:**
```yaml
jobs:
  detect-changes:
    runs-on: ubuntu-latest
    outputs:
      backend: ${{ steps.filter.outputs.backend }}
      frontend: ${{ steps.filter.outputs.frontend }}
    steps:
      - uses: actions/checkout@v4
      - uses: dorny/paths-filter@v2
        id: filter
        with:
          filters: |
            backend:
              - 'api/**'
              - 'database/**'
            frontend:
              - 'web/**'
              - 'mobile/**'
  
  build-backend:
    needs: detect-changes
    if: needs.detect-changes.outputs.backend == 'true'
    runs-on: ubuntu-latest
    steps:
      - name: Build backend
        run: echo "Backend changed, building..."
```

---

### 11. Workflow Artifacts Can Be Downloaded by Other Workflows
**What most people miss:** Workflows can share data across separate workflow runs

```yaml
# Workflow 1: Build Artifacts
name: Build Application
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build application
        run: npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build-output-${{ github.sha }}
          path: dist/
          retention-days: 7

# Workflow 2: Deploy (triggered after build completes)
name: Deploy Application
on:
  workflow_run:
    workflows: ["Build Application"]
    types: [completed]
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: build-output-${{ github.event.workflow_run.head_sha }}
          path: dist/
      
      - name: Deploy to Azure
        run: |
          az webapp deploy \
            --name myapp \
            --src-path dist/ \
            --resource-group production
```

**Why this matters:**
- **Separation of concerns:** Build once, deploy multiple times
- **Security:** Build and deploy can have different permissions
- **Efficiency:** Avoid rebuilding for each environment
- **Audit trail:** Clear separation between build and deployment steps

**Advanced pattern - Cross-workflow artifact sharing:**
```yaml
# Download artifacts from another workflow run by ID
- uses: dawidd6/action-download-artifact@v2
  with:
    workflow: build.yml
    workflow_conclusion: success
    name: build-output
```

---

### Key Takeaways for Advanced Users

**Original 5 Core Patterns:**
1. **Repository-level reusability:** Use `.github/actions/` for project-specific reusable components
2. **Organization-level reusability:** Use reusable workflows in a shared repository for enterprise patterns
3. **Data flow mastery:** Job outputs enable sophisticated conditional orchestration
4. **Rich reporting:** `$GITHUB_STEP_SUMMARY` transforms log output into stakeholder-ready reports
5. **Dynamic execution:** Matrix strategies can adapt to runtime data, not just static configurations

**Additional 6 Performance & Security Patterns:**
6. **Concurrency controls:** Automatically cancel obsolete workflow runs to save time and money
7. **Environment protection:** Built-in approval gates for production deployments
8. **Secure output handling:** Use `$GITHUB_OUTPUT` instead of deprecated `set-output`
9. **Aggressive caching:** Reduce dependency installation time by 70-90%
10. **Path filtering:** Only run workflows when relevant files change
11. **Artifact sharing:** Build once, deploy everywhere with cross-workflow artifacts

**Script:**
"Even if you're an experienced GitHub Actions developer, there are powerful features hiding in plain sight. Let me share eleven advanced patterns that will level up your workflows. First, reusable workflows - you can call workflows from other repositories, creating a centralized automation library for your entire organization. Second, the `.github/actions/` folder creates custom reusable components that work exactly like marketplace actions. Third, job outputs enable sophisticated workflow orchestration with intelligent conditional logic. Fourth, `$GITHUB_STEP_SUMMARY` creates beautiful Markdown reports that appear prominently in the Actions UI. Fifth, matrix strategies can dynamically adapt to runtime data from APIs or databases. Now for the performance and security patterns - concurrency controls automatically cancel obsolete runs, saving significant time and money. Environment protection rules provide built-in approval gates for production deployments. The new `$GITHUB_OUTPUT` syntax prevents security vulnerabilities present in the old set-output commands. Caching can reduce your workflow time by 70-90% by avoiding repeated dependency installations. Path filters ensure you only run workflows when relevant files change, critical for monorepos. And finally, workflow artifacts can be shared across separate workflow runs, enabling powerful build-once-deploy-many patterns. These eleven patterns transform GitHub Actions from a simple automation tool into a sophisticated, secure, and efficient orchestration platform."

**Time: 5 minutes**

---

## Slide 22: Q&A and Next Steps
**Visual:** Contact information and follow-up resources

### Questions to Consider
- What manual tasks consume most of your time?
- Which team processes could benefit from automation?
- How can we measure the impact of these changes?
- What governance do we need for team automation?

### Follow-up Actions
- Schedule team automation workshop
- Create shared repository for team workflows
- Establish regular automation review meetings
- Document success stories and lessons learned

**Script:**
"Let's open this up for questions. Think about the manual tasks that frustrate you most - those are often the best candidates for automation. Remember, the goal isn't to automate everything, but to automate the right things that provide real value to your team."

**Time: 5-10 minutes**

---

## Appendix: Demo Setup Instructions

### Prerequisites for Demos
1. **Docker Desktop** installed and running
2. **GitHub CLI** authenticated (`gh auth login`)
3. **GitHub Local Actions extension** installed in VS Code
4. **Sample repository** with issues and PRs for testing
5. **Teams webhook** configured (optional for Demo 3)

### Demo Repository Structure
```
demo-automation/
├── .github/
│   └── workflows/
│       ├── repository-activity-monitor.yml
│       ├── repo-health-dashboard.yml
│       └── hello-world.yml
├── scripts/
│   ├── repo-health.sh
│   └── activity-check.sh
├── README.md
└── .secrets (for local testing)
```

### Test Commands for Practice
```bash
# Test GitHub CLI authentication
gh auth status

# List available workflows (via extension)
# Use Command Palette: "GitHub Local Actions: List Workflows"

# Test basic GitHub CLI commands
gh issue list --state open --limit 5
gh pr list --state open --limit 5

# Generate sample repository report
bash scripts/repo-health.sh
```

---

**Total Estimated Time:** 40-45 minutes
- Introduction and foundation: 10 minutes (Slides 1-6)
- Architecture and first demo: 8 minutes (Slides 7-8)
- Advanced workflow: 10 minutes (Slide 9)
- Local development deep dive: 12 minutes (Slides 10-14)
- Team adoption and governance: 8 minutes (Slides 15-20)
- Wrap-up and Q&A: 7 minutes (Slides 21-22)
- **Appendix A (optional):** Advanced workflows vs actions concepts for those creating reusable components

**Key Takeaways:**
1. GitHub Actions transforms local scripts into team tools
2. Architecture understanding enables better workflow design
3. nektos/act enables rapid local development and testing
4. Proper governance and documentation ensure adoption
5. Start small, prove value, then scale across the organization

---

# APPENDIX

## Appendix A: Workflows vs Actions - Understanding the Architecture

*Note: This is advanced material for those who want to create reusable custom actions. For most use cases, workflows alone are sufficient.*

### The Fundamental Difference

#### **Workflows** (`.github/workflows/`)
- **What:** Complete automated processes that GitHub automatically discovers and runs
- **File format:** YAML files (`.yml` or `.yaml`)
- **Purpose:** Define when, where, and how automation runs
- **Trigger:** Events (push, PR, manual, schedule, etc.)
- **Visibility:** Automatically appear in GitHub Actions tab
- **Analogy:** The "main program" that executes automatically

#### **Actions** (`.github/actions/`)
- **What:** Reusable building blocks that workflows can call
- **File format:** `action.yml` in a subfolder
- **Purpose:** Encapsulate reusable logic that multiple workflows can share
- **Trigger:** Explicitly called by workflows using `uses:` keyword
- **Visibility:** Not discovered automatically - must be referenced
- **Analogy:** A "function" or "library" that workflows invoke

### When to Create Custom Actions

Most scenarios are best served by workflows alone. Consider custom actions only when:
- Logic is repeated across multiple workflows
- Complex operations obscure workflow intent
- Steps need versioning and testing independently
- Functionality should be shared across repositories

For the initial presentation and most automation needs, focus on workflows which are simpler and more straightforward.

---

## Appendix B: Complete Triggers, Inputs, and Outputs Reference

*This appendix provides comprehensive lists for Slide 9. Most workflows use the top 5 items shown in the main presentation.*

---

### Complete Triggers Reference

**Repository Events:**
- **`push`**: Code pushed to specific branches
- **`pull_request`**: PR opened, synchronized, reopened, or closed
- **`pull_request_target`**: PR from forks (with base repo permissions)
- **`release`**: Repository release created or published
- **`create`/`delete`**: Branch or tag creation/deletion
- **`fork`**: Repository forked
- **`watch`**: Repository starred
- **`issues`**: Issue opened, edited, closed, etc.
- **`issue_comment`**: Comment on issue or PR
- **`discussion`**: Discussion created or modified
- **`discussion_comment`**: Comment on discussion
- **`project`** and **`project_card`**: Project board changes
- **`milestone`**: Milestone created or modified

**Schedule Triggers:**
- **`schedule`**: Cron-based scheduled execution
  ```yaml
  on:
    schedule:
      - cron: '0 8 * * 1'  # Every Monday at 8 AM UTC
      - cron: '0 0 * * *'  # Daily at midnight UTC
  ```

**Manual Triggers:**
- **`workflow_dispatch`**: Manual trigger with input parameters
- **`repository_dispatch`**: Triggered via GitHub API from external systems

**Workflow Triggers:**
- **`workflow_call`**: Called by other workflows (reusable workflows)
- **`workflow_run`**: Triggered when another workflow completes

**Other Events:**
- **`check_run`** and **`check_suite`**: Check runs status changes
- **`status`**: Commit status updates
- **`deployment`** and **`deployment_status`**: Deployment events
- **`page_build`**: GitHub Pages build events
- **`registry_package`**: Package published or updated
- **`gollum`**: Wiki page created or updated

**Official Documentation**: [Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

---

### Complete Inputs Reference

**User-Provided Inputs:**
- **Workflow dispatch inputs**: Parameters from manual triggers
  - Types: `string` (default), `boolean`, `choice`, `environment`
  - Required vs optional fields with `required: true/false`
  - Default values with `default: 'value'`
  - Descriptions for UI display
  - Access via: `${{ github.event.inputs.input_name }}`

**Repository Secrets:**
- **Repository-level secrets**: Encrypted credentials stored in repo settings
- **Environment secrets**: Scoped to specific environments (staging, production)
- **Organization secrets**: Shared across multiple repositories
- **`GITHUB_TOKEN`**: Automatically provided authentication token
- **Access via**: `${{ secrets.SECRET_NAME }}`
- **Security**: Never exposed in logs, masked automatically

**Environment Variables:**
- **Job-level variables**: `env:` at job level - available to all steps
- **Step-level variables**: `env:` at step level - scoped to that step
- **Runner environment**: Built-in variables like `RUNNER_OS`, `RUNNER_ARCH`
- **Custom env files**: Load from `.env` files with third-party actions
- **Access via**: 
  - Shell: `$VARIABLE_NAME` or `${VARIABLE_NAME}`
  - YAML: `${{ env.VARIABLE_NAME }}`

**GitHub Context Variables:**
- **`github.repository`**: Current repository name (owner/repo)
- **`github.actor`**: User who triggered the workflow
- **`github.sha`**: Commit SHA that triggered the workflow
- **`github.ref`**: Branch or tag reference (refs/heads/main)
- **`github.ref_name`**: Short branch/tag name (main)
- **`github.event`**: Full event payload data
- **`github.event_name`**: Trigger event type (push, pull_request, etc.)
- **`github.run_id`**: Unique workflow run identifier
- **`github.run_number`**: Sequential run number
- **`github.job`**: Current job identifier
- **`runner.os`**: Runner operating system (Linux, Windows, macOS)
- **`runner.temp`**: Path to temporary directory
- **`runner.tool_cache`**: Path to tool cache directory

**External Inputs:**
- **API responses**: Data fetched from external services with `curl` or actions
- **Database queries**: Information retrieved from databases
- **File contents**: Configuration files, data files via checkout
- **Artifacts from previous runs**: Cross-workflow data sharing with `actions/download-artifact`
- **Matrix values**: Dynamic job configurations from matrices

**Official Documentation**: 
- [Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts)
- [Environment variables](https://docs.github.com/en/actions/learn-github-actions/variables)
- [Encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

---

### Complete Outputs Reference

**Workflow Artifacts:**
- **Build outputs**: Compiled binaries, packages, executables
- **Test reports**: Coverage reports, test results, performance metrics
- **Generated files**: Documentation, reports, images, videos
- **Logs and diagnostics**: Debug information, profiling data
- **Retention**: 90 days default, customizable from 1-400 days
- **Upload via**: `actions/upload-artifact@v4`
- **Download via**: `actions/download-artifact@v4` or GitHub UI
- **Size limit**: 10GB per artifact, 10GB total per workflow

**Step Summary:**
- **`$GITHUB_STEP_SUMMARY`**: Markdown-formatted output in Actions UI
- **Rich formatting**: Tables, lists, code blocks, images, links
- **Persistent display**: Visible without digging through logs
- **Multiple steps**: Each step can append to summary
- **Use cases**: Test results, deployment status, metrics dashboards
- **Example**: `echo "## Results" >> $GITHUB_STEP_SUMMARY`

**Console Logs:**
- **Standard output**: Real-time execution logs with `echo` and `run:`
- **Debug logging**: Verbose output with `ACTIONS_STEP_DEBUG` secret
- **Error messages**: Failure diagnostics with exit codes
- **Grouped output**: Collapsible log sections with `::group::` and `::endgroup::`
- **Annotations**: Error/warning markers with `::error::` and `::warning::`
- **Masking**: Hide sensitive values with `::add-mask::`
- **Retention**: Logs stored for 90 days (not customizable)

**Repository Changes:**
- **Commits**: Automated code changes with `git commit` and `git push`
- **Pull requests**: Created or updated PRs via GitHub CLI or API
- **Releases**: Published releases with assets via `actions/create-release`
- **Issue/PR comments**: Automated feedback with GitHub CLI or actions
- **Labels**: Add/remove issue and PR labels
- **Status checks**: Pass/fail status for commits and PRs

**External Integrations:**
- **Cloud storage**: 
  - Azure Blob Storage with Azure CLI
  - AWS S3 with AWS CLI
  - Google Cloud Storage with gcloud CLI
- **Databases**: 
  - SQL: MySQL, PostgreSQL, SQL Server connections
  - NoSQL: MongoDB, Redis, Cosmos DB
  - Cache updates and data synchronization
- **APIs**: 
  - POST to webhooks with `curl`
  - REST endpoints for external services
  - GraphQL queries to external systems
- **Notifications**: 
  - Microsoft Teams with webhook actions
  - Slack with Slack actions or webhooks
  - Email with third-party services
  - SMS with Twilio or similar services
- **Deployments**: 
  - Azure with Azure CLI and deployment actions
  - AWS with AWS CLI and deployment actions
  - GCP with gcloud CLI
  - Kubernetes with kubectl

**Job Outputs:**
- **Cross-job communication**: Pass data between jobs with `outputs:`
- **Conditional execution**: Control workflow based on results with `if:`
- **Dynamic matrices**: Generate job configurations at runtime with `fromJSON()`
- **Reusable workflow outputs**: Return data from called workflows
- **Example**:
  ```yaml
  jobs:
    job1:
      outputs:
        result: ${{ steps.step1.outputs.result }}
      steps:
        - id: step1
          run: echo "result=success" >> $GITHUB_OUTPUT
    job2:
      needs: job1
      if: needs.job1.outputs.result == 'success'
      steps:
        - run: echo "Job1 succeeded!"
  ```

**Official Documentation**: 
- [Artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)
- [Job outputs](https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs)
- [Workflow commands](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions)

---

---

