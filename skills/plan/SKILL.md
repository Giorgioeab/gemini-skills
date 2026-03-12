---
name: plan
description: Use esta skill para montar plano de projeto, tarefas e arquitetura sem codar.
---

# /plan — Project Planning Mode

## Overview

Creates a project plan file using the `project-planner` agent. No code writing — only plan file generation. Use this before starting implementation.

## Critical Rules

1. **NO CODE WRITING** — This command creates plan file only
2. **Use project-planner agent** — Specialized for task breakdown
3. **Socratic Gate** — Ask clarifying questions before planning
4. **Dynamic Naming** — Plan file named based on task

## Behavior

When `/plan` is triggered:

1. Follow project-planner Phase -1 (Context Check)
2. Follow project-planner Phase 0 (Socratic Gate)
3. Create `docs/PLAN-{slug}.md` with task breakdown
4. DO NOT write any code files
5. Report the exact file name created

### Naming Rules

1. Extract 2-3 key words from request
2. Lowercase, hyphen-separated
3. Max 30 characters

## Expected Output

| Deliverable | Location |
|-------------|----------|
| Project Plan | `docs/PLAN-{task-slug}.md` |
| Task Breakdown | Inside plan file |
| Agent Assignments | Inside plan file |
| Verification Checklist | Phase X in plan file |

## After Planning

```
✅ Plan created: docs/PLAN-{slug}.md

Next steps:
- Review the plan
- Run /create to start implementation
- Or modify plan manually
```

## Naming Examples

| Request | Plan File |
|---------|-----------|
| `/plan e-commerce site with cart` | `docs/PLAN-ecommerce-cart.md` |
| `/plan mobile app for fitness` | `docs/PLAN-fitness-app.md` |
| `/plan add dark mode feature` | `docs/PLAN-dark-mode.md` |
| `/plan SaaS dashboard` | `docs/PLAN-saas-dashboard.md` |

## Examples

```
/plan e-commerce site with cart
/plan mobile app for fitness tracking
/plan SaaS dashboard with analytics
```
