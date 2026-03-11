---
name: antigravity-create
description: Use this skill when creating a new application, project, or feature from scratch. Triggers with /create. Starts an interactive dialogue to understand requirements, plans the tech stack and file structure using the project-planner agent, builds using app-builder with specialist agents (database-architect, backend-specialist, frontend-specialist), and auto-starts a preview server. Handles blog sites, e-commerce apps, dashboards, landing pages, and any new project scaffolding.
---

# /create — Create Application

## Overview

Starts a new application creation process. Combines planning, specialist agent coordination, and auto-preview into a single workflow.

## Behavior

When `/create` is triggered:

### 1. Request Analysis
- Understand what the user wants
- If information is missing, ask clarifying questions

### 2. Project Planning
- Use `project-planner` agent for task breakdown
- Determine tech stack
- Plan file structure
- Create plan file and proceed to building

### 3. Application Building (After Approval)
- Orchestrate with `app-builder` skill
- Coordinate expert agents:
  - `database-architect` → Schema
  - `backend-specialist` → API
  - `frontend-specialist` → UI

### 4. Preview
- Start with `auto_preview.py` when complete
- Present URL to user

## Before Starting

If request is unclear, ask these questions:
- What type of application?
- What are the basic features?
- Who will use it?

Use defaults, add details later.

## Examples

```
/create blog site
/create e-commerce app with product listing and cart
/create todo app
/create Instagram clone
/create CRM system with customer management
```
