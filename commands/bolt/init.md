# /bolt:init — Initialize Project

Create a project folder with an IDEA.md for the user to describe their vision.

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
- Preserve the original name for display in IDEA.md

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

### Step 4: Create IDEA.md

Create an `IDEA.md` in the project root with this template:

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

### Step 5: Confirm

Show the user:
```
CREATED: {{project-folder}}/
FILES:   IDEA.md

Fill in IDEA.md with your vision, then run /bolt:discover
```

## Notes

- Keep it instant. No questions asked — just create the folder and IDEA.md.
- The user writes their idea at their own pace.
- All the deep questioning happens in `/bolt:discover`.
