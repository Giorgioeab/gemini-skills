---
name: deploy
description: Use esta skill para preparar, validar e publicar deploys em producao.
---

# /deploy — Production Deployment

## Overview

Handles production deployment with pre-flight checks, deployment execution, and verification.

## Sub-commands

```
/deploy            — Interactive deployment wizard
/deploy check      — Run pre-deployment checks only
/deploy preview    — Deploy to preview/staging
/deploy production — Deploy to production
/deploy rollback   — Rollback to previous version
```

## Pre-Deployment Checklist

Before any deployment:

### Code Quality
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] ESLint passing (`npx eslint .`)
- [ ] All tests passing (`npm test`)

### Security
- [ ] No hardcoded secrets
- [ ] Environment variables documented
- [ ] Dependencies audited (`npm audit`)

### Performance
- [ ] Bundle size acceptable
- [ ] No console.log statements
- [ ] Images optimized

### Documentation
- [ ] README updated
- [ ] CHANGELOG updated
- [ ] API docs current

## Deployment Flow

```
/deploy → Pre-flight checks → Pass? → Build → Deploy → Health check → ✅ Complete
                                  ↓ No
                              Fix issues
```

## Output Format

### Successful Deploy

```markdown
## 🚀 Deployment Complete

### Summary
- **Version:** v1.2.3
- **Environment:** production
- **Duration:** 47 seconds
- **Platform:** Vercel

### URLs
- 🌐 Production: https://app.example.com
- 📊 Dashboard: https://vercel.com/project

### Health Check
✅ API responding (200 OK)
✅ Database connected
✅ All services healthy
```

### Failed Deploy

```markdown
## ❌ Deployment Failed

### Error
[error details]

### Resolution
1. Fix the issue
2. Run `npm run build` locally to verify
3. Try `/deploy` again

### Rollback Available
Run `/deploy rollback` if needed.
```

## Platform Support

| Platform | Command | Notes |
|----------|---------|-------|
| Vercel | `vercel --prod` | Auto-detected for Next.js |
| Railway | `railway up` | Needs Railway CLI |
| Fly.io | `fly deploy` | Needs flyctl |
| Docker | `docker compose up -d` | For self-hosted |

## Examples

```
/deploy
/deploy check
/deploy preview
/deploy production --skip-tests
/deploy rollback
```
