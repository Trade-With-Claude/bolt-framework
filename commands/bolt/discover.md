# /bolt:discover — Deep Project Discovery

Follow-the-thread questioning to deeply understand the project before planning.

## Instructions

### Prerequisites

Read `.bolt/PROJECT.md`. If it doesn't exist, tell user to run `/bolt:init` first.

### Approach: Follow-the-Thread

This is conversational, not a checklist. Start from what you know (PROJECT.md) and dig deeper. Adapt your questions based on answers.

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
5. **Update STATE.md** next action to `/bolt:roadmap`.

### Completion

After discovery, show:
```
Discovery complete.

Key decisions:
- {{decision 1}}
- {{decision 2}}
- {{decision 3}}

PROJECT.md updated.
NEXT: Run /bolt:roadmap to break the project into phases.
```
