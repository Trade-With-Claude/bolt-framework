# /bolt:init — Initialize Project

Set up the BOLT project structure in the current directory.

## Instructions

### Step 1: Check for Existing .bolt/

If `.bolt/` already exists, tell the user:
> Project already initialized. Run `/bolt:status` to see current state.

Stop here if .bolt/ exists.

### Step 2: Detect Environment

- Check if git is initialized. If not, ask user if they want `git init`.
- Check if there's existing code (brownfield). Note what exists.

### Step 3: Quick Project Q&A

Ask the user these questions (all at once, not one-by-one):

1. **What** is this project? (one sentence)
2. **Why** are you building it? (problem it solves)
3. **Stack**: languages, frameworks, key tools?
4. **Anything else** I should know? (constraints, timeline, preferences)

### Step 4: Create .bolt/ Structure

Create the following structure:

```
.bolt/
├── PROJECT.md    # Fill with answers from Step 3
├── STATE.md      # Initialize from template
└── ROADMAP.md    # Empty, ready for /bolt:roadmap
```

Use the templates from the bolt-framework/templates/ directory as a base.

Fill in PROJECT.md with:
- **What**: User's answer to Q1
- **Why**: User's answer to Q2
- **Stack**: User's answer to Q3
- **Brownfield Notes**: What was detected in Step 2 (if any)
- Leave Architecture, Constraints, Decisions sections for /bolt:discover

### Step 5: Confirm

Show the user:
```
PROJECT: {{name}}
STACK:   {{stack}}
FILES:   .bolt/PROJECT.md, STATE.md, ROADMAP.md
NEXT:    Run /bolt:discover for deep project understanding
```

## Notes

- Keep it fast. This should take < 2 minutes.
- Don't over-ask. The deep questions come in /bolt:discover.
- If user provides a lot of info upfront, fill in more sections and skip redundant questions.
