# /bolt:discover — Deep Project Discovery

Follow-the-thread questioning to deeply understand the project before planning.

## Instructions

### Prerequisites

Determine the current version from `.bolt/STATE.md` (root). Default to `v1` if not found.

Read `.bolt/{{version}}/IDEA.md`. If it doesn't exist, tell user to run `/bolt:init` first.

If `.bolt/` doesn't exist at all, tell user to run `/bolt:init` first.

### Approach: Follow-the-Thread

Start from what the user wrote in IDEA.md and dig deeper. This is conversational, not a checklist. Adapt your questions based on answers and what's already written.

### Areas to Probe

Explore these areas, but don't ask them all as a list. Pick the most important gaps and ask 3-4 questions at a time, then follow up based on answers.

**Vision & Scope**
- What does "done" look like for this version?
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

### For v2+ Versions

If this is not v1, also:
- Read `.bolt/{{previous_version}}/STATE.md` for context on what was built
- Read previous IDEA.md to understand evolution
- Ask: what worked well in the previous version? What didn't?
- Focus questions on what's NEW in this version

### Rules

1. **Max 3 rounds of questions.** Don't interrogate — get enough to plan.
2. **Summarize after each round.** "Here's what I understand so far..."
3. **Fill gaps with reasonable defaults.** State your assumptions explicitly.
4. **Update PROJECT.md** after discovery with everything learned.
5. **Update version STATE.md** next action to `/bolt:research`.

### Completion

After discovery:

1. **Update `.bolt/PROJECT.md`** with everything learned (this is the living document across all versions).

2. **Update `.bolt/{{version}}/STATE.md`**:
   - Status: `discovery_complete`
   - Next action: `/bolt:research`

3. **Update root `.bolt/STATE.md`**:
   - Version status: `discovery_complete`

4. **Show summary:**
```
Discovery complete.

Key decisions:
- {{decision 1}}
- {{decision 2}}
- {{decision 3}}

PROJECT.md updated.
NEXT: Run /bolt:research for deep technical research.
```
