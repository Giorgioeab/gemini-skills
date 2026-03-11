---
name: antigravity-status
description: Use this skill when checking project status, viewing progress, or getting an overview of the current state of development. Triggers with /status. Shows project info (name, path, tech stack, features), agent status board (running, completed, pending), file statistics, and preview server health. Use when the user asks "what's the status", "where are we", or wants a progress report.
---

# /status — Show Status

## Overview

Displays current project and agent status with progress tracking.

## What It Shows

1. **Project Info** — Name, path, tech stack, current features
2. **Agent Status Board** — Running, completed, pending tasks
3. **File Statistics** — Files created, modified
4. **Preview Status** — Server running, URL, health

## Output Format

```
=== Project Status ===

📁 Project: my-ecommerce
📂 Path: C:/projects/my-ecommerce
🏷️ Type: nextjs-ecommerce
📊 Status: active

🔧 Tech Stack:
   Framework: next.js
   Database: postgresql
   Auth: clerk
   Payment: stripe

✅ Features (5):
   • product-listing
   • cart
   • checkout
   • user-auth
   • order-history

⏳ Pending (2):
   • admin-panel
   • email-notifications

📄 Files: 73 created, 12 modified

=== Agent Status ===

✅ database-architect → Completed
✅ backend-specialist → Completed
🔄 frontend-specialist → Dashboard components (60%)
⏳ test-engineer → Waiting

=== Preview ===

🌐 URL: http://localhost:3000
💚 Health: OK
```

## Technical

Status uses these scripts:
- `python .agent/scripts/session_manager.py status`
- `python .agent/scripts/auto_preview.py status`
