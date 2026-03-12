---
name: preview
description: Use this skill when starting, stopping, or checking the status of a local development preview server. Triggers with /preview. Manages local dev servers with auto-detection of project type (Next.js, React, Vue, etc.), port conflict resolution, and health checking. Use when the user wants to see their changes running locally.
---

# /preview — Preview Management

## Overview

Manages the local preview server: start, stop, status check, and health monitoring.

## Sub-commands

```
/preview           — Show current status
/preview start     — Start server
/preview stop      — Stop server
/preview restart   — Restart
/preview check     — Health check
```

## Examples

### Start Server
```
/preview start

🚀 Starting preview...
   Port: 3000
   Type: Next.js

✅ Preview ready!
   URL: http://localhost:3000
```

### Status Check
```
/preview

=== Preview Status ===
🌐 URL: http://localhost:3000
📁 Project: C:/projects/my-app
🏷️ Type: nextjs
💚 Health: OK
```

### Port Conflict
```
/preview start

⚠️ Port 3000 is in use.

Options:
1. Start on port 3001
2. Close app on 3000
3. Specify different port

Which one? (default: 1)
```

## Technical

Auto preview uses `auto_preview.py` script:

```bash
python .agent/scripts/auto_preview.py start [port]
python .agent/scripts/auto_preview.py stop
python .agent/scripts/auto_preview.py status
```
