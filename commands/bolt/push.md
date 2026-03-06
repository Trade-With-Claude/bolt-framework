# /bolt:push — Save Project

Stage, commit, and push the current project state.

## Usage

```
/bolt:push              # Auto-generates commit message
/bolt:push <message>    # Custom commit message
```

## Instructions

### Step 1: Check Git State

Run `git status` to see what's changed.

If nothing to commit:
> Nothing to save — working tree is clean.

### Step 2: Stage Changes

```bash
git add -A
```

### Step 3: Generate Commit Message

**If user provided a message:** Use it directly.

**If no message provided:** Generate one based on what changed:
- Read `git diff --staged --stat` to see changed files
- Read `.bolt/STATE.md` (or `.bolt/v1/STATE.md` etc.) for current phase context
- Write a concise message: `bolt: {{what changed}}` (e.g., `bolt: phase 2 complete — auth system`, `bolt: WIP phase 3 task 2`)

### Step 4: Commit and Push

```bash
git commit -m "{{message}}"
git push
```

If no remote is set up:
> No remote configured. Run `git remote add origin <url>` or let /bolt:init set it up.

If push fails (e.g., no upstream):
```bash
git push -u origin $(git branch --show-current)
```

### Step 5: Confirm

```
Saved: {{commit message}}
{{files changed}} files changed
Pushed to {{remote}}/{{branch}}
```

## Notes

- This is a convenience command — just a quick save.
- Always pushes to the current branch.
- Uses `git add -A` to capture everything — warn if `.gitignore` is missing.
