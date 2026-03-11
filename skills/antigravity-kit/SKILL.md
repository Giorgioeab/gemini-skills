---
name: antigravity-kit
description: Complete AI agent skill pack with 20 specialist agents, 37 domain skills, and 11 slash command workflows (/plan, /create, /debug, /deploy, /brainstorm, /test, /enhance, /orchestrate, /preview, /status, /ui-ux-pro-max). Provides intelligent agent routing, Socratic Gate protocol, and modular skill loading for frontend, backend, security, testing, DevOps, mobile, game dev, SEO, and more. Use when you need specialist-level coding assistance with automatic domain detection.
metadata:
  author: vudovn
  version: "2.1.0"
---

# Antigravity Kit — AI Agent Skills Pack

> 20 Specialist Agents · 37 Domain Skills · 11 Slash Command Workflows

---

## How It Works

This skill pack provides a complete AI agent system with automatic domain detection and specialist routing.

### Architecture

```
User Request → Request Classifier → Agent Routing → Skill Loading → Execution
                                         ↓
                              Slash Commands (/plan, /debug, etc.)
                                         ↓
                              Specialist Agents (auto-selected)
                                         ↓
                              Domain Skills (loaded on demand)
```

### Core Files

| Path | Purpose |
|------|---------|
| `.agent/rules/GEMINI.md` | Core rules: request classifier, agent routing, Socratic Gate, tier system |
| `.agent/ARCHITECTURE.md` | System map: all agents, skills, workflows, scripts |
| `.agent/agents/` | 20 specialist agent definitions |
| `.agent/skills/` | 37 domain skill modules (each with SKILL.md) |
| `.agent/workflows/` | 11 slash command definitions |
| `.agent/scripts/` | Validation scripts (checklist.py, verify_all.py) |

---

## Slash Commands

| Command | Description |
|---------|-------------|
| `/brainstorm` | Structured idea exploration — generates 3+ options with pros/cons |
| `/create` | Create new application — triggers app-builder + specialist agents |
| `/debug` | Systematic debugging — root cause analysis |
| `/deploy` | Deploy application — CI/CD pipeline |
| `/enhance` | Improve existing code — refactoring + optimization |
| `/orchestrate` | Multi-agent coordination — complex multi-domain tasks |
| `/plan` | Task breakdown — 4-phase planning methodology |
| `/preview` | Preview changes — local dev server |
| `/status` | Check project status — audit + health check |
| `/test` | Generate and run tests — TDD workflow |
| `/ui-ux-pro-max` | Advanced UI design — 50 styles, 21 palettes |

---

## Specialist Agents

Agents are auto-selected based on your request domain. No need to mention them explicitly.

| Agent | Domain | Key Skills |
|-------|--------|------------|
| `orchestrator` | Multi-agent coordination | parallel-agents, behavioral-modes |
| `project-planner` | Discovery, task planning | brainstorming, plan-writing, architecture |
| `frontend-specialist` | Web UI/UX | frontend-design, react-best-practices, tailwind-patterns |
| `backend-specialist` | API, business logic | api-patterns, nodejs-best-practices, database-design |
| `database-architect` | Schema, SQL | database-design, prisma-expert |
| `mobile-developer` | iOS, Android, React Native | mobile-design |
| `game-developer` | Game logic, mechanics | game-development |
| `devops-engineer` | CI/CD, Docker | deployment-procedures, docker-expert |
| `security-auditor` | Security compliance | vulnerability-scanner, red-team-tactics |
| `penetration-tester` | Offensive security | red-team-tactics |
| `test-engineer` | Testing strategies | testing-patterns, tdd-workflow, webapp-testing |
| `debugger` | Root cause analysis | systematic-debugging |
| `performance-optimizer` | Speed, Web Vitals | performance-profiling |
| `seo-specialist` | Ranking, visibility | seo-fundamentals, geo-fundamentals |
| `documentation-writer` | Manuals, docs | documentation-templates |
| `product-manager` | Requirements, user stories | plan-writing, brainstorming |
| `product-owner` | Strategy, backlog, MVP | plan-writing, brainstorming |
| `qa-automation-engineer` | E2E testing, CI pipelines | webapp-testing, testing-patterns |
| `code-archaeologist` | Legacy code, refactoring | clean-code, code-review-checklist |
| `explorer-agent` | Codebase analysis | — |

---

## Domain Skills (37)

Skills are loaded on demand when an agent is activated.

**Frontend & UI**: react-best-practices, web-design-guidelines, tailwind-patterns, frontend-design, ui-ux-pro-max
**Backend & API**: api-patterns, nestjs-expert, nodejs-best-practices, python-patterns
**Database**: database-design, prisma-expert
**TypeScript**: typescript-expert
**Cloud & Infra**: docker-expert, deployment-procedures, server-management
**Testing & Quality**: testing-patterns, webapp-testing, tdd-workflow, code-review-checklist, lint-and-validate
**Security**: vulnerability-scanner, red-team-tactics
**Architecture**: app-builder, architecture, plan-writing, brainstorming
**Mobile**: mobile-design
**Game Dev**: game-development
**SEO & Growth**: seo-fundamentals, geo-fundamentals
**Shell/CLI**: bash-linux, powershell-windows
**Other**: clean-code, behavioral-modes, parallel-agents, mcp-builder, documentation-templates, i18n-localization, performance-profiling, systematic-debugging

---

## Setup Instructions

After installation, the system works through these entry points:

1. **Gemini CLI / Antigravity**: Reads `GEMINI.md` (root) which imports `.agent/rules/GEMINI.md` and `.agent/ARCHITECTURE.md`
2. **VS Code / GitHub Copilot**: Reads this `SKILL.md` and follows paths to `.agent/`

### For the agent to function correctly:

1. Read `.agent/rules/GEMINI.md` — this is the **core protocol** (request classifier, agent routing, Socratic Gate, tier system)
2. Read `.agent/ARCHITECTURE.md` — this is the **system map** (all agents, skills, workflows)
3. When a slash command is detected (`/command`), read `.agent/workflows/{command}.md`
4. When an agent is selected, read `.agent/agents/{agent-name}.md`
5. When a skill is needed, read `.agent/skills/{skill-name}/SKILL.md`

### Modular Skill Loading Protocol

```
Agent activated → Check frontmatter "skills:" → Read SKILL.md (INDEX) → Read specific sections
```

- **Selective Reading:** Read `SKILL.md` first, then only sections matching the user's request.
- **Rule Priority:** P0 (GEMINI.md) > P1 (Agent .md) > P2 (SKILL.md).
