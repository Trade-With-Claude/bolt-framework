# /bolt:next — Start Next Version

Tag the current version in git and set up a new version folder.

## Usage

```
/bolt:next
```

## Instructions

### Step 1: Validate Current Version

Read `.bolt/SCHEMA` to get schema version. Read `.bolt/STATE.md` to find the current version.

If no version exists or project not initialized:
> No BOLT project found. Run `/bolt:init` to start.

Check that the current version has at least one completed phase. If not:
> Current version has no completed work. Finish building before starting a new version.

### Step 2: Determine Version Numbers

- Current version: read from STATE.md (e.g., `v1`)
- Next version: increment (e.g., `v2`)

### Step 3: Git Tag

Automatically tag the current commit:

```bash
git add -A
git commit -m "Complete {{current_version}}"
git tag {{current_version}}
```

Tell the user:
> Tagged current commit as `{{current_version}}`. You can always return with `git checkout {{current_version}}`.

### Step 4: Freeze Current Version STATE.md

Update `.bolt/{{current_version}}/STATE.md`:
- Set status to `complete`
- Add completion date

### Step 5: Create Next Version Folder

```
.bolt/{{next_version}}/
├── IDEA.md       # Template for new version vision
├── ROADMAP.md    # Empty, ready for /bolt:roadmap
└── STATE.md      # Fresh state for new version
```

Create `IDEA.md` with:

```markdown
# {{Project Name}} — {{next_version}}

## What's New
<!-- What are you adding/changing in this version? -->


## Why
<!-- Why is this version needed? What did v(N-1) lack? -->


## Key Changes
<!-- List the main features, improvements, or fixes. -->


## Lessons from {{current_version}}
<!-- What did you learn? What would you do differently? -->


## Notes
<!-- Anything else — constraints, breaking changes, etc. -->

```

### Step 6: Update Root STATE.md

Update `.bolt/STATE.md`:
- Set current version to `{{next_version}}`
- Add version history entry
- Set next action to: fill in `.bolt/{{next_version}}/IDEA.md`

### Step 7: Confirm

```
VERSION: {{current_version}} tagged and frozen
CREATED: .bolt/{{next_version}}/

ROLLBACK: If {{next_version}} ever goes wrong, run:
  git checkout {{current_version}}
This restores your entire project to the state it was in when {{current_version}} was complete.

NEXT: Fill in .bolt/{{next_version}}/IDEA.md, then run /bolt:discover
```

## Notes

- Git tag is automatic — no user action needed.
- Previous version folder is never modified after this point.
- PROJECT.md (root level) carries forward — it's the living document.
- The user can always `git checkout {{current_version}}` to get back to working code.
