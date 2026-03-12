---
name: enhance
description: Use this skill when adding features to or improving an existing application. Triggers with /enhance. Handles iterative development — adding dark mode, building admin panels, integrating payment systems, making pages responsive, adding search features, and any modification to existing code. Loads project state, plans changes, presents impact summary, applies changes with relevant specialist agents, and updates the preview.
---

# /enhance — Update Application

## Overview

Adds features or makes updates to an existing application. Used for iterative development on projects that already exist.

## Behavior

When `/enhance` is triggered:

### 1. Understand Current State
- Load project state
- Understand existing features, tech stack

### 2. Plan Changes
- Determine what will be added/changed
- Detect affected files
- Check dependencies

### 3. Present Plan to User (for major changes)
```
"To add admin panel:
- I'll create 15 new files
- Update 8 files

Should I start?"
```

### 4. Apply
- Call relevant specialist agents
- Make changes
- Test

### 5. Update Preview
- Hot reload or restart

## Examples

```
/enhance add dark mode
/enhance build admin panel
/enhance integrate payment system
/enhance add search feature
/enhance edit profile page
/enhance make responsive
```

## Caution

- Get approval for major changes
- Warn on conflicting requests (e.g., "use Firebase" when project uses PostgreSQL)
- Commit each change with git
