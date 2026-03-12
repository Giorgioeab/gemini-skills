---
name: brainstorm
description: Use this skill when exploring ideas, comparing approaches, or evaluating options before implementation. Provides structured brainstorming with 3+ options, pros/cons analysis, effort estimation, and a final recommendation. Triggers with /brainstorm or when the user needs to decide between multiple approaches for architecture, tech stack, design patterns, or implementation strategies.
---

# /brainstorm — Structured Idea Exploration

## Overview

Activates BRAINSTORM mode for structured idea exploration. Use when you need to explore options before committing to an implementation. No code — this is about ideas.

## Behavior

When `/brainstorm` is triggered:

1. **Understand the goal**
   - What problem are we solving?
   - Who is the user?
   - What constraints exist?

2. **Generate options**
   - Provide at least 3 different approaches
   - Each with pros and cons
   - Consider unconventional solutions

3. **Compare and recommend**
   - Summarize tradeoffs
   - Give a recommendation with reasoning

## Output Format

```markdown
## 🧠 Brainstorm: [Topic]

### Context
[Brief problem statement]

---

### Option A: [Name]
[Description]

✅ **Pros:**
- [benefit 1]
- [benefit 2]

❌ **Cons:**
- [drawback 1]

📊 **Effort:** Low | Medium | High

---

### Option B: [Name]
[Description]

✅ **Pros:**
- [benefit 1]

❌ **Cons:**
- [drawback 1]
- [drawback 2]

📊 **Effort:** Low | Medium | High

---

### Option C: [Name]
[Description]

✅ **Pros:**
- [benefit 1]

❌ **Cons:**
- [drawback 1]

📊 **Effort:** Low | Medium | High

---

## 💡 Recommendation

**Option [X]** because [reasoning].

What direction would you like to explore?
```

## Examples

```
/brainstorm authentication system
/brainstorm state management for complex form
/brainstorm database schema for social app
/brainstorm caching strategy
```

## Key Principles

- **No code** — this is about ideas, not implementation
- **Visual when helpful** — use diagrams for architecture
- **Honest tradeoffs** — don't hide complexity
- **Defer to user** — present options, let them decide
