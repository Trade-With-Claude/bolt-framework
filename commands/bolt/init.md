# /bolt:init — Initialize Project

Create a project folder with a versioned BOLT structure and IDEA.md.

## Usage

```
/bolt:init <project-name>
```

The user provides the project name as an argument or in their message (e.g., `/bolt:init Dimension`).

## Instructions

### Step 1: Get Project Name

Extract the project name from the user's message. If no name was provided, ask for one.

Convert the name to a folder-friendly format:
- Use kebab-case for the folder name (e.g., "My Cool App" → `my-cool-app`)
- Preserve the original name for display in IDEA.md and PROJECT.md

### Step 2: Create Project Folder

Create the project folder in the **current working directory**:

```bash
mkdir <project-folder>
cd <project-folder>
```

If the folder already exists:
- Check if `.bolt/` exists inside it. If yes, tell the user:
  > Project already initialized. Run `/bolt:status` to see current state.
  Stop here.
- If the folder exists but has no `.bolt/`, continue — treat as brownfield.

### Step 3: Initialize Git

Run `git init` in the new project folder.

### Step 4: Ask Public or Private

Ask the user:
> Should this be a **public** or **private** GitHub repo?

If `gh` CLI is available, create the repo:
```bash
gh repo create <project-folder> --public/--private --source=. --push
```

If `gh` is not available, skip and tell the user they can set up the remote later.

### Step 5: Create .bolt/ Structure

Create the versioned structure:

```
<project-folder>/
├── .bolt/
│   ├── SCHEMA        # Contains: 1
│   ├── PROJECT.md    # From template, project name filled in
│   ├── STATE.md      # Root state pointing to v1
│   └── v1/
│       ├── IDEA.md   # Template for user to fill in
│       ├── ROADMAP.md # Empty, ready for /bolt:roadmap
│       └── STATE.md  # V1 state, initialized
```

**`.bolt/SCHEMA`** — just the number:
```
1
```

**`.bolt/STATE.md`** (root — version tracker):
```markdown
# STATE

## Current Version
v1

## Version History
| Version | Status | Git Tag |
|---------|--------|---------|
| v1 | initialized | — |

## Next Action
Fill in `.bolt/v1/IDEA.md`, then run `/bolt:discover`
```

**`.bolt/PROJECT.md`** — from template, with project name filled in.

**`.bolt/v1/STATE.md`** — from state template, initialized.

**`.bolt/v1/IDEA.md`** — template:
```markdown
# {{Project Name}}

## The Idea
<!-- What is this project? Describe your vision in your own words. -->


## The Problem
<!-- What problem does this solve? Why does it need to exist? -->


## Key Features
<!-- What should it do? List the main features or capabilities. -->


## Stack / Tech Preferences
<!-- Any languages, frameworks, or tools you want to use? -->


## Notes
<!-- Anything else — constraints, inspiration, references, etc. -->

```

**`.bolt/v1/ROADMAP.md`** — from roadmap template.

### Step 6: Confirm

```
CREATED: {{project-folder}}/
REPO:    {{public/private}} (or "no remote — set up later")
FILES:   .bolt/PROJECT.md, .bolt/v1/IDEA.md, STATE.md, ROADMAP.md

Fill in .bolt/v1/IDEA.md with your vision, then run /bolt:discover
```

## Notes

- Keep it fast. No deep questions — just create the structure.
- The user writes their idea at their own pace in IDEA.md.
- All the deep questioning happens in `/bolt:discover`.
- Schema version starts at 1. This enables future `/bolt:upgrade` migrations.
