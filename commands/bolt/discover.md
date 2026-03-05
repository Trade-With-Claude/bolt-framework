# /bolt:discover — Deep Project Discovery

Follow-the-thread questioning to deeply understand the project before planning.

## Instructions

### Prerequisites

Read `IDEA.md` in the project root. If it doesn't exist, tell user to run `/bolt:init` first.

If `.bolt/` doesn't exist yet, that's expected — it gets created at the end of discovery.

### Approach: Follow-the-Thread

Start from what the user wrote in IDEA.md and dig deeper. This is conversational, not a checklist. Adapt your questions based on answers and what's already written.

### Areas to Probe

Explore these areas, but don't ask them all as a list. Pick the most important gaps and ask 3-4 questions at a time, then follow up based on answers.

**Vision & Scope**
- What does "done" look like for V1?
- Who are the users? How will they use it?
- What's the one thing this MUST do well?

**Technical**
- Any existing code to integrate with?
- External APIs or services needed?
- Data model — what are the core entities?
- Auth requirements?
- Deployment target?

**Constraints**
- Performance requirements?
- Security/compliance needs?
- Budget constraints (hosting, APIs)?
- Timeline pressure?

**Preferences**
- Testing approach? (TDD, post-hoc, manual)
- Code style preferences?
- Any libraries/patterns you want to use or avoid?

### Rules

1. **Max 3 rounds of questions.** Don't interrogate — get enough to plan.
2. **Summarize after each round.** "Here's what I understand so far..."
3. **Fill gaps with reasonable defaults.** State your assumptions explicitly.
4. **Update PROJECT.md** after discovery with everything learned.
5. **Update STATE.md** next action to `/bolt:research`.

### Completion

After discovery:

1. **Create `.bolt/` structure:**

```
.bolt/
├── PROJECT.md    # Fill with everything learned from IDEA.md + discovery
├── STATE.md      # Initialize from template
└── ROADMAP.md    # Empty, ready for /bolt:roadmap
```

Use the templates from the bolt-framework/templates/ directory as a base.

Fill in PROJECT.md with:
- **What**: From IDEA.md + discovery answers
- **Why**: From IDEA.md + discovery answers
- **Stack**: From IDEA.md + discovery answers
- **Brownfield Notes**: Any existing code detected
- **Decisions**: Key decisions made during discovery

2. **Update STATE.md** next action to `/bolt:research`.

3. **Show summary:**
```
Discovery complete.

Key decisions:
- {{decision 1}}
- {{decision 2}}
- {{decision 3}}

.bolt/ created with PROJECT.md, STATE.md, ROADMAP.md
NEXT: Run /bolt:research for deep technical research.
```
