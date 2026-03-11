---
name: antigravity-orchestrate
description: Use this skill when coordinating multiple specialist agents for complex, multi-domain tasks. Triggers with /orchestrate. Requires minimum 3 different agents. Provides 2-phase orchestration (Planning → Implementation), agent selection matrix by task type, mandatory user approval checkpoint between phases, context passing protocol between agents, and verification scripts. Use for full-stack builds, comprehensive reviews, security audits, or any task spanning multiple domains (frontend + backend + testing, etc.).
---

# /orchestrate — Multi-Agent Coordination

## Overview

Coordinates 3+ specialized agents to solve complex, multi-domain problems. Uses a strict 2-phase approach: plan first, implement after approval.

## Minimum Agent Requirement

> **ORCHESTRATION = MINIMUM 3 DIFFERENT AGENTS**
> If you use fewer than 3 agents, you are NOT orchestrating.

### Agent Selection Matrix

| Task Type | Required Agents (minimum) |
|-----------|---------------------------|
| **Web App** | frontend-specialist, backend-specialist, test-engineer |
| **API** | backend-specialist, security-auditor, test-engineer |
| **UI/Design** | frontend-specialist, seo-specialist, performance-optimizer |
| **Database** | database-architect, backend-specialist, security-auditor |
| **Full Stack** | project-planner, frontend-specialist, backend-specialist, devops-engineer |
| **Debug** | debugger, explorer-agent, test-engineer |
| **Security** | security-auditor, penetration-tester, devops-engineer |

## 2-Phase Orchestration

### PHASE 1: Planning (Sequential)

| Step | Agent | Action |
|------|-------|--------|
| 1 | `project-planner` | Create PLAN.md |
| 2 | (optional) `explorer-agent` | Codebase discovery if needed |

> No other agents during planning. Only project-planner and explorer-agent.

### CHECKPOINT: User Approval

```
"✅ Plan created: docs/PLAN.md
Do you approve? (Y/N)"
```

> DO NOT proceed to Phase 2 without explicit user approval.

### PHASE 2: Implementation (Parallel)

| Parallel Group | Agents |
|----------------|--------|
| Foundation | `database-architect`, `security-auditor` |
| Core | `backend-specialist`, `frontend-specialist` |
| Polish | `test-engineer`, `devops-engineer` |

## Context Passing (MANDATORY)

When invoking ANY agent, include:
1. **Original User Request** — full text
2. **Decisions Made** — all user answers to questions
3. **Previous Agent Work** — summary of what was done
4. **Current Plan State** — plan files in workspace

## Available Agents (17+)

| Agent | Domain |
|-------|--------|
| `project-planner` | Planning, task breakdown |
| `explorer-agent` | Codebase discovery |
| `frontend-specialist` | UI/UX, React, CSS |
| `backend-specialist` | API, Node.js, Python |
| `database-architect` | SQL, NoSQL, Schema |
| `security-auditor` | Vulnerabilities, Auth |
| `penetration-tester` | Active security testing |
| `test-engineer` | Unit, E2E, Coverage |
| `devops-engineer` | CI/CD, Docker, Deploy |
| `mobile-developer` | React Native, Flutter |
| `performance-optimizer` | Lighthouse, Profiling |
| `seo-specialist` | Meta, Schema, Rankings |
| `documentation-writer` | README, API docs |
| `debugger` | Error analysis |
| `game-developer` | Unity, Godot |

## Verification (MANDATORY)

The LAST agent must run verification scripts:
```bash
python .agent/skills/vulnerability-scanner/scripts/security_scan.py .
python .agent/skills/lint-and-validate/scripts/lint_runner.py .
```

## Output Format

```markdown
## 🎼 Orchestration Report

### Task
[Original task summary]

### Agents Invoked (MINIMUM 3)
| # | Agent | Focus Area | Status |
|---|-------|------------|--------|
| 1 | project-planner | Task breakdown | ✅ |
| 2 | frontend-specialist | UI implementation | ✅ |
| 3 | test-engineer | Verification | ✅ |

### Verification Scripts Executed
- [x] security_scan.py → Pass/Fail
- [x] lint_runner.py → Pass/Fail

### Summary
[One paragraph synthesis of all agent work]
```

## Exit Gate

Before completing, verify:
1. ✅ Agent Count: `invoked_agents >= 3`
2. ✅ Scripts Executed: At least `security_scan.py` ran
3. ✅ Report Generated: All agents listed
