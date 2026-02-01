# Using Awesome Copilot Resources in Your Repository

This guide explains how to add and use agents, prompts, instructions, and skills from the Awesome GitHub Copilot repository in your own projects.

## Table of Contents

- [Quick Start](#quick-start)
- [Installation Methods](#installation-methods)
  - [Method 1: Using Install Buttons (Recommended)](#method-1-using-install-buttons-recommended)
  - [Method 2: Manual Installation](#method-2-manual-installation)
  - [Method 3: Using the MCP Server](#method-3-using-the-mcp-server)
- [Directory Structure](#directory-structure)
- [Using Custom Agents](#using-custom-agents)
- [Using Prompts](#using-prompts)
- [Using Instructions](#using-instructions)
- [Using Skills](#using-skills)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Quick Start

The fastest way to add resources from Awesome Copilot to your repository:

1. Browse the [agents](README.agents.md), [prompts](README.prompts.md), [instructions](README.instructions.md), or [skills](README.skills.md) documentation
2. Click the **Install** button for the resource you want
3. The resource will be automatically installed to your workspace
4. Start using it immediately in GitHub Copilot Chat or Copilot Coding Agent (CCA)

## Installation Methods

### Method 1: Using Install Buttons (Recommended)

Each agent, prompt, instruction, and skill in our documentation includes install buttons for VS Code, VS Code Insiders, and Visual Studio.

**Steps:**

1. **Browse the documentation** to find a resource you want to use:
   - [Custom Agents](README.agents.md)
   - [Prompts](README.prompts.md)
   - [Instructions](README.instructions.md)
   - [Skills](README.skills.md)

2. **Click the appropriate install button** for your editor:
   - [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)]()
   - [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)]()
   - [![Install in Visual Studio](https://img.shields.io/badge/Visual_Studio-Install-C16FDE?style=flat-square&logo=visualstudio&logoColor=white)]()

3. **The resource will be automatically installed** to your current workspace

4. **Start using it** in GitHub Copilot Chat, Copilot Coding Agent, or Copilot CLI

**For agents that require MCP servers:**

If an agent requires one or more MCP (Model Context Protocol) servers, you'll see MCP install buttons alongside the agent install button. Click these to install the required MCP servers.

### Method 2: Manual Installation

You can manually add any resource by downloading the file and placing it in your repository.

**For Agents:**

1. Navigate to the [`agents/`](../agents/) directory in this repository
2. Find the agent you want (e.g., `debug.agent.md`)
3. Download the file or copy its contents
4. Create a `.github/agents/` directory in your repository (if it doesn't exist)
5. Add the agent file to `.github/agents/` (e.g., `.github/agents/debug.agent.md`)
6. Commit and push the changes

**For Prompts:**

1. Navigate to the [`prompts/`](../prompts/) directory
2. Find the prompt you want (e.g., `create-readme.prompt.md`)
3. Download the file or copy its contents
4. Create a `.github/prompts/` directory in your repository (if it doesn't exist)
5. Add the prompt file to `.github/prompts/`
6. Commit and push the changes

**For Instructions:**

1. Navigate to the [`instructions/`](../instructions/) directory
2. Find the instruction you want (e.g., `python-fastapi.instructions.md`)
3. Download the file or copy its contents
4. Create a `.github/instructions/` directory in your repository (if it doesn't exist)
5. Add the instruction file to `.github/instructions/`
6. Commit and push the changes

**For Skills:**

1. Navigate to the [`skills/`](../skills/) directory
2. Find the skill folder you want (e.g., `skills/github-actions-expert/`)
3. Download the entire skill folder with all its contents
4. Create a `.github/skills/` directory in your repository (if it doesn't exist)
5. Add the skill folder to `.github/skills/` (e.g., `.github/skills/github-actions-expert/`)
6. Ensure the `SKILL.md` file and all bundled assets are included
7. Commit and push the changes

### Method 3: Using the MCP Server

The Awesome Copilot MCP Server provides a prompt for searching and installing resources directly from your editor.

**Setup:**

1. Ensure you have Docker installed and running
2. Install the MCP Server using one of these buttons from the [README](../README.md):
   - [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/mcp/vscode)
   - [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/mcp/vscode-insiders)
   - [![Install in Visual Studio](https://img.shields.io/badge/Visual_Studio-Install-C16FDE?logo=visualstudio&logoColor=white)](https://aka.ms/awesome-copilot/mcp/vs)

**Usage:**

1. Open GitHub Copilot Chat in your editor
2. Type `/awesome-copilot` to see available commands
3. Search for and install resources directly from the chat interface

## Directory Structure

GitHub Copilot looks for custom resources in the `.github/` directory of your repository. Here's the recommended structure:

```
your-repository/
├── .github/
│   ├── agents/              # Custom agents (.agent.md files)
│   │   ├── debug.agent.md
│   │   ├── terraform.agent.md
│   │   └── ...
│   ├── prompts/             # Custom prompts (.prompt.md files)
│   │   ├── create-api.prompt.md
│   │   ├── write-tests.prompt.md
│   │   └── ...
│   ├── instructions/        # Custom instructions (.instructions.md files)
│   │   ├── python-django.instructions.md
│   │   ├── react.instructions.md
│   │   └── ...
│   └── skills/              # Agent skills (folders with SKILL.md)
│       ├── github-actions-expert/
│       │   ├── SKILL.md
│       │   └── templates/
│       └── ...
├── src/
├── tests/
└── README.md
```

**Key Points:**

- All custom resources should be in the `.github/` directory
- Agents go in `.github/agents/`
- Prompts go in `.github/prompts/`
- Instructions go in `.github/instructions/`
- Skills go in `.github/skills/`
- File naming should follow the lowercase-with-hyphens convention
- All files must include proper markdown frontmatter

## Using Custom Agents

Once agents are installed in your repository, you can use them in several ways:

### In VS Code / VS Code Insiders

1. Open GitHub Copilot Chat (Ctrl/Cmd + Shift + I)
2. Type `@` followed by the agent name
3. The agent will appear in the autocomplete list
4. Select it and start chatting

**Example:**
```
@debug help me find the bug in the authentication module
```

### In Copilot Coding Agent (CCA) on GitHub

When assigning an issue to Copilot on GitHub:

1. Navigate to an issue in your repository
2. Assign the issue to `@copilot` 
3. In the assignment dialog, you'll see a dropdown to select a custom agent
4. Choose from the agents available in your repository
5. Copilot will use that agent's expertise to work on the issue

### In Copilot CLI (Coming Soon)

Support for custom agents in the Copilot CLI is coming soon.

## Using Prompts

Prompts are invoked using the `/` command in GitHub Copilot Chat:

1. Open GitHub Copilot Chat
2. Type `/` to see available prompts
3. Select the prompt you want to use
4. Follow any additional instructions

**Example:**
```
/create-readme
```

## Using Instructions

Instructions automatically apply to files based on their patterns:

1. Add instruction files to `.github/instructions/`
2. Each instruction file should have an `applyTo` field in its frontmatter specifying which files it applies to
3. When you work on matching files, Copilot will automatically use these instructions

**Example frontmatter:**
```yaml
---
description: 'Python FastAPI best practices'
applyTo: '**/*.py'
---
```

This instruction will automatically apply when working on any Python file in your repository.

## Using Skills

Skills are self-contained folders with instructions and bundled resources:

1. Add skill folders to `.github/skills/`
2. Each skill folder must contain a `SKILL.md` file with proper frontmatter
3. Skills can include bundled assets (templates, scripts, data files)
4. Copilot will automatically discover and use these skills when relevant

**Example:**

If you add the `github-actions-expert` skill, Copilot will use it when you ask questions about GitHub Actions or need help with workflow files.

## Best Practices

### Organizing Your Resources

1. **Start small**: Don't install all agents at once. Start with 2-3 that are most relevant to your project
2. **Team-specific**: Create custom agents specific to your team's needs
3. **Project-specific**: Different projects can have different agents based on their tech stack
4. **Version control**: Commit your custom resources to version control so the whole team benefits

### Naming Conventions

1. Use lowercase with hyphens: `my-custom-agent.agent.md`
2. Be descriptive: `python-fastapi-expert.agent.md` instead of `python.agent.md`
3. Follow the extension conventions:
   - Agents: `.agent.md`
   - Prompts: `.prompt.md`
   - Instructions: `.instructions.md`
   - Skills: Folder with `SKILL.md`

### Frontmatter Requirements

All markdown files must include proper frontmatter:

**Agents:**
```yaml
---
description: 'Brief description of what this agent does'
model: 'gpt-5'  # Recommended: specify the model
tools: ['codebase', 'terminalCommand']  # Optional but recommended
name: 'My Custom Agent'  # Optional
---
```

**Prompts:**
```yaml
---
agent: 'agent'  # Required
description: 'Brief description of what this prompt does'
model: 'gpt-5'  # Strongly recommended
tools: ['codebase']  # Optional
---
```

**Instructions:**
```yaml
---
description: 'Brief description of coding standards'
applyTo: '**/*.py, **/*.ts'  # Required: file patterns
---
```

**Skills (SKILL.md):**
```yaml
---
name: 'my-skill-name'  # Must match folder name
description: 'Brief description (10-1024 characters)'
---
```

### Customization

Feel free to:

1. **Modify** agents to better fit your team's workflows
2. **Combine** multiple agents to create specialized ones
3. **Create new** agents based on the examples
4. **Share back** useful agents with the community via pull requests!

## Troubleshooting

### Agent not appearing in autocomplete

1. Verify the file is in `.github/agents/` directory
2. Check that the file has the `.agent.md` extension
3. Ensure the frontmatter is properly formatted
4. Restart VS Code / VS Code Insiders
5. Check the GitHub Copilot output panel for errors

### Prompt not showing in `/` menu

1. Verify the file is in `.github/prompts/` directory
2. Check that the file has the `.prompt.md` extension
3. Ensure `agent: 'agent'` is in the frontmatter
4. Restart your editor

### Instructions not applying

1. Verify the file is in `.github/instructions/` directory
2. Check that the `applyTo` field matches your file patterns
3. Ensure the frontmatter is properly formatted
4. Try opening a file that matches the pattern

### Skill not working

1. Verify the skill folder is in `.github/skills/`
2. Ensure the folder contains a `SKILL.md` file
3. Check that the `name` in frontmatter matches the folder name
4. Verify all bundled assets are present
5. Check file sizes (assets should be under 5MB each)

### MCP Server issues

1. Ensure Docker is running
2. Check the MCP server configuration in your editor settings
3. Review the MCP server logs for error messages
4. Try reinstalling the MCP server

## Need Help?

- Check our [Support Guide](../SUPPORT.md)
- Review [Contributing Guidelines](../CONTRIBUTING.md) to create your own resources
- See [Security Policy](../SECURITY.md) for security concerns

## Learn More

- [Custom Agents Documentation](README.agents.md)
- [Prompts Documentation](README.prompts.md)
- [Instructions Documentation](README.instructions.md)
- [Skills Documentation](README.skills.md)
- [Collections Documentation](README.collections.md)

---

**Ready to enhance your development workflow?** Start by installing a few agents that match your tech stack and see how they can help your team!
