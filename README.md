# Gemini Skills

> 20 Specialist Agents · 37 Domain Skills · 11 Slash Command Workflows

A library of AI agent skills for the Gemini CLI and compatible agent platforms. Provides intelligent agent routing, domain-specific expertise, and slash command workflows for coding assistance.

## Skills in this repo

| Skill | Command | Description |
|-------|---------|-------------|
| core | — | Agent routing, Socratic Gate, request classifier, clean code rules |
| brainstorm | `/brainstorm` | Explore ideas with 3+ options, pros/cons, and recommendations |
| create | `/create` | Create new applications with app-builder and specialist agents |
| debug | `/debug` | Systematic bug investigation with hypothesis-driven analysis |
| deploy | `/deploy` | Production deployment with pre-flight checklist and rollback |
| enhance | `/enhance` | Add features or improve existing code iteratively |
| orchestrate | `/orchestrate` | Multi-agent coordination (min. 3 agents) for complex tasks |
| plan | `/plan` | Project planning and task breakdown (no code) |
| preview | `/preview` | Local dev server management |
| status | `/status` | Project and agent progress report |
| test | `/test` | Generate and run tests (Jest, Vitest, Playwright) |
| ui-ux | `/ui-ux-pro-max` | Design with 50+ styles, 97 palettes, 57 font pairings |

## Installation

### Using npm (recommended)

```bash
npx @giorgioeab/gemini-skills install
```

Installs 12 skills to `~/.agents/skills/`. To update an existing installation:

```bash
npx @giorgioeab/gemini-skills install --force
```

Other commands:

```bash
npx @giorgioeab/gemini-skills status      # Check which skills are installed
npx @giorgioeab/gemini-skills list        # List available skills
npx @giorgioeab/gemini-skills uninstall   # Remove all skills
```

### Using [Gemini CLI](https://github.com/google-gemini/gemini-cli)

```bash
gemini extensions install https://github.com/Giorgioeab/gemini-skills
```

To update:

```bash
gemini extensions update gemini-skills
```

### Using [Vercel Skills CLI](https://skills.sh/)

```bash
# Browse and install interactively
npx skills add Giorgioeab/gemini-skills --list

# Install directly
npx skills add Giorgioeab/gemini-skills --skill antigravity-kit --global
```

### Using [Context7 Skills CLI](https://context7.com/)

```bash
# Browse and install interactively
npx ctx7 skills install /Giorgioeab/gemini-skills

# Install a specific skill
npx ctx7 skills install /Giorgioeab/gemini-skills antigravity-kit
```

### Manual (any agent)

Clone the repo and copy the `.agent/` folder into your project:

```bash
git clone https://github.com/Giorgioeab/gemini-skills.git
cp -r gemini-skills/.agent your-project/.agent
```

## What's Included

| Component | Count | Description |
|-----------|-------|-------------|
| **Agents** | 20 | Specialist AI personas (frontend, backend, security, PM, QA, etc.) |
| **Skills** | 37 | Domain-specific knowledge modules |
| **Workflows** | 11 | Slash command procedures |

### Slash Commands

| Command | Description |
|---------|-------------|
| `/brainstorm` | Explore options before implementation |
| `/create` | Create new features or apps |
| `/debug` | Systematic debugging |
| `/deploy` | Deploy application |
| `/enhance` | Improve existing code |
| `/orchestrate` | Multi-agent coordination |
| `/plan` | Create task breakdown |
| `/preview` | Preview changes locally |
| `/status` | Check project status |
| `/test` | Generate and run tests |
| `/ui-ux-pro-max` | Design with 50 styles |

### Usage Examples

```
/brainstorm authentication system
/create landing page with hero section
/plan e-commerce checkout flow
/debug why login returns 500
```

Agents are auto-selected based on your request. No need to mention them explicitly:

```
You: "Add JWT authentication"
AI: 🤖 Applying @security-auditor + @backend-specialist...

You: "Fix the dark mode button"
AI: 🤖 Using @frontend-specialist...
```

## Repo Structure

```
├── bin/
│   └── cli.js                    # npm CLI (install/uninstall/status/list)
├── GEMINI.md                     # Entry point for Gemini CLI
├── gemini-extension.json         # Extension metadata
├── skills/                       # 12 modular skills
│   ├── core/SKILL.md       # Agent routing, Socratic Gate
│   ├── brainstorm/SKILL.md # /brainstorm
│   ├── create/SKILL.md     # /create
│   ├── debug/SKILL.md      # /debug
│   ├── deploy/SKILL.md     # /deploy
│   ├── enhance/SKILL.md    # /enhance
│   ├── orchestrate/SKILL.md# /orchestrate
│   ├── plan/SKILL.md       # /plan
│   ├── preview/SKILL.md    # /preview
│   ├── status/SKILL.md     # /status
│   ├── test/SKILL.md       # /test
│   └── ui-ux/SKILL.md      # /ui-ux-pro-max
├── .agent/                       # Core system (unchanged)
│   ├── ARCHITECTURE.md           # System map
│   ├── rules/GEMINI.md           # Core rules
│   ├── agents/                   # 20 specialist agents
│   ├── skills/                   # 37 domain skills
│   ├── workflows/                # 11 slash commands
│   ├── scripts/                  # Validation scripts
│   ├── .shared/                  # Shared resources
│   └── mcp_config.json           # MCP server config
├── AGENT_FLOW.md
├── CHANGELOG.md
└── LICENSE
```

## Compatibility

| Platform | How it works |
|----------|-------------|
| **npm / npx** | Runs `npx @giorgioeab/gemini-skills install` → installs 12 skills to `~/.agents/skills/` |
| **Gemini CLI / Antigravity** | Reads `GEMINI.md` → imports `.agent/rules/GEMINI.md` + `.agent/ARCHITECTURE.md` |
| **VS Code / GitHub Copilot** | Discovers `skills/*/SKILL.md` via Skills CLI |
| **Cursor** | Same as VS Code — uses Skills CLI |
| **Claude Code** | Same as VS Code — uses Skills CLI |

## Credits

Based on [Antigravity Kit](https://github.com/vudovn/antigravity-kit) by [vudovn](https://github.com/vudovn).

## License

MIT © [vudovn](https://github.com/vudovn)
