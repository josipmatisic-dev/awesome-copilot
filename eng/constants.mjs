import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Template sections for the README
const TEMPLATES = {
  instructionsSection: `## 📋 Custom Instructions

Team and project-specific instructions to enhance GitHub Copilot's behavior for specific technologies and coding practices.`,

  instructionsUsage: `### How to Use Custom Instructions

**📖 For detailed instructions on adding instructions to your repository, see our [comprehensive guide](USING_IN_YOUR_REPOSITORY.md).**

**Quick Install:**
- Click the **VS Code**, **VS Code Insiders**, or **Visual Studio** install button for the instruction you want
- The instruction will be automatically installed to your workspace

**Manual Installation:**
- Download the \`*.instructions.md\` file from this repository
- Add it to the \`.github/instructions/\` directory in your repository
- Ensure the frontmatter includes an \`applyTo\` field specifying file patterns
- Commit and push the changes

**How Instructions Work:**
- Instructions automatically apply to files matching the \`applyTo\` patterns in their frontmatter
- Copilot uses these instructions when you work on matching files
- You can also add instructions to \`.github/copilot-instructions.md\` to apply globally`,

  promptsSection: `## 🎯 Reusable Prompts

Ready-to-use prompt templates for specific development scenarios and tasks, defining prompt text with a specific mode, model, and available set of tools.`,

  promptsUsage: `### How to Use Reusable Prompts

**📖 For detailed instructions on adding prompts to your repository, see our [comprehensive guide](USING_IN_YOUR_REPOSITORY.md).**

**Quick Install:**
- Click the **VS Code**, **VS Code Insiders**, or **Visual Studio** install button for the prompt you want
- The prompt will be automatically installed to your workspace

**Manual Installation:**
- Download the \`*.prompt.md\` file from this repository
- Add it to the \`.github/prompts/\` directory in your repository
- Commit and push the changes

**To Run/Execute:**
- Use \`/prompt-name\` in VS Code chat after installation
- Run the \`Chat: Run Prompt\` command from the Command Palette
- Hit the run button while you have a prompt file open in VS Code`,

  collectionsSection: `## 📦 Collections

Curated collections of related prompts, instructions, and agents organized around specific themes, workflows, or use cases.`,

  collectionsUsage: `### How to Use Collections

**Browse Collections:**
- ⭐ Featured collections are highlighted and appear at the top of the list
- Explore themed collections that group related customizations
- Each collection includes prompts, instructions, and agents for specific workflows
- Collections make it easy to adopt comprehensive toolkits for particular scenarios

**Install Items:**
- Click install buttons for individual items within collections
- Or browse to the individual files to copy content manually
- Collections help you discover related customizations you might have missed`,

  featuredCollectionsSection: `## 🌟 Featured Collections

Discover our curated collections of prompts, instructions, and agents organized around specific themes and workflows.`,

  agentsSection: `## 🤖 Custom Agents

Custom agents for GitHub Copilot, making it easy for users and organizations to "specialize" their Copilot coding agent (CCA) through simple file-based configuration.`,

  agentsUsage: `### How to Use Custom Agents

**📖 For detailed instructions on adding agents to your repository, see our [comprehensive guide](USING_IN_YOUR_REPOSITORY.md).**

**Quick Install:**
- Click the **VS Code**, **VS Code Insiders**, or **Visual Studio** install button for the agent you want
- The agent will be automatically installed to your workspace
- Start using it immediately in GitHub Copilot Chat or when assigning issues to Copilot

**Manual Installation:**
- Download the \`*.agent.md\` file from this repository
- Add it to the \`.github/agents/\` directory in your repository
- Commit and push the changes
- The agent will be available to everyone on your team

**MCP Server Setup:**
- Some agents require one or more MCP (Model Context Protocol) servers to function
- Click the MCP server install button to add it to your editor
- Follow the MCP-specific setup instructions
- The agent will have access to tools from configured MCP servers

**Using Agents:**
- **In VS Code/VS Code Insiders:** Type \`@\` in Copilot Chat and select the agent name
- **In Copilot Coding Agent (CCA):** When assigning an issue to \`@copilot\`, select the custom agent from the dropdown
- **In Copilot CLI:** Coming soon!`,

  skillsSection: `## 🎯 Agent Skills

Agent Skills are self-contained folders with instructions and bundled resources that enhance AI capabilities for specialized tasks. Based on the [Agent Skills specification](https://agentskills.io/specification), each skill contains a \`SKILL.md\` file with detailed instructions that agents load on-demand.

Skills differ from other primitives by supporting bundled assets (scripts, code samples, reference data) that agents can utilize when performing specialized tasks.`,

  skillsUsage: `### How to Use Agent Skills

**📖 For detailed instructions on adding skills to your repository, see our [comprehensive guide](USING_IN_YOUR_REPOSITORY.md).**

**What's Included:**
- Each skill is a folder containing a \`SKILL.md\` instruction file
- Skills may include helper scripts, code templates, or reference data
- Skills follow the Agent Skills specification for maximum compatibility

**When to Use:**
- Skills are ideal for complex, repeatable workflows that benefit from bundled resources
- Use skills when you need code templates, helper utilities, or reference data alongside instructions
- Skills provide progressive disclosure - loaded only when needed for specific tasks

**Installation:**
- Download the entire skill folder from the [\`skills/\`](../skills/) directory
- Add it to the \`.github/skills/\` directory in your repository
- Ensure all bundled assets are included
- Commit and push the changes

**Usage:**
- Copilot will automatically discover skills in your \`.github/skills/\` directory
- Skills are loaded on-demand when relevant to your task
- Reference skills explicitly in your prompts when needed`,
};

const vscodeInstallImage =
  "https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white";

const vscodeInsidersInstallImage =
  "https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white";

const repoBaseUrl =
  "https://raw.githubusercontent.com/github/awesome-copilot/main";

const AKA_INSTALL_URLS = {
  instructions: "https://aka.ms/awesome-copilot/install/instructions",
  prompt: "https://aka.ms/awesome-copilot/install/prompt",
  agent: "https://aka.ms/awesome-copilot/install/agent",
};

const ROOT_FOLDER = path.join(__dirname, "..");
const INSTRUCTIONS_DIR = path.join(ROOT_FOLDER, "instructions");
const PROMPTS_DIR = path.join(ROOT_FOLDER, "prompts");
const AGENTS_DIR = path.join(ROOT_FOLDER, "agents");
const SKILLS_DIR = path.join(ROOT_FOLDER, "skills");
const COLLECTIONS_DIR = path.join(ROOT_FOLDER, "collections");
const MAX_COLLECTION_ITEMS = 50;

// Agent Skills validation constants
const SKILL_NAME_MIN_LENGTH = 1;
const SKILL_NAME_MAX_LENGTH = 64;
const SKILL_DESCRIPTION_MIN_LENGTH = 10;
const SKILL_DESCRIPTION_MAX_LENGTH = 1024;

const DOCS_DIR = path.join(ROOT_FOLDER, "docs");

export {
  TEMPLATES,
  vscodeInstallImage,
  vscodeInsidersInstallImage,
  repoBaseUrl,
  AKA_INSTALL_URLS,
  ROOT_FOLDER,
  INSTRUCTIONS_DIR,
  PROMPTS_DIR,
  AGENTS_DIR,
  SKILLS_DIR,
  COLLECTIONS_DIR,
  MAX_COLLECTION_ITEMS,
  SKILL_NAME_MIN_LENGTH,
  SKILL_NAME_MAX_LENGTH,
  SKILL_DESCRIPTION_MIN_LENGTH,
  SKILL_DESCRIPTION_MAX_LENGTH,
  DOCS_DIR,
};

