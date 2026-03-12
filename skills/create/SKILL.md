---
name: create
description: Use esta skill para criar apps e projetos novos com planejamento e execucao guiada.
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
