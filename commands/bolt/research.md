# /bolt:research — Deep Technical Research

Parallel agent-driven research to validate stack choices, explore the codebase, and surface risks before planning.

**Usage:** `/bolt:research` (run after `/bolt:discover`, before `/bolt:roadmap`)

## Instructions

### Prerequisites

Read `.bolt/PROJECT.md`. If Architecture/Stack/Decisions are mostly empty, tell user to run `/bolt:discover` first.

### Step 1: Identify Research Tracks

Based on PROJECT.md, identify **2-4 research tracks** from this list (skip what's not relevant):

| Track | When Needed | What It Covers |
|-------|-------------|----------------|
| **Codebase** | Existing code | Map structure, patterns, dependencies, tech debt |
| **Stack** | New libraries/frameworks | Docs, setup patterns, gotchas, version compatibility |
| **APIs** | External services | Auth flow, rate limits, data formats, error handling |
| **Architecture** | Complex system design | Patterns, data flow, scaling concerns, trade-offs |

Tell the user:
> I'll research {{N}} tracks in parallel:
> 1. **{{track}}** — {{one-line reason}}
> 2. **{{track}}** — {{one-line reason}}
>
> This will use subagents to keep it efficient. OK to proceed?

Wait for confirmation.

### Step 2: Launch Parallel Agents

Use the Agent tool to run research tracks **in parallel**. Each agent gets a focused brief:

**Agent brief template:**
```
Research: {{track name}}
Project: {{project name from PROJECT.md}}
Stack: {{relevant stack items}}

Investigate:
- {{specific question 1}}
- {{specific question 2}}
- {{specific question 3}}

Return a concise summary (under 800 tokens):
1. Key findings (bullet points)
2. Recommended approach
3. Risks or gotchas
4. Any decisions needed from the user
```

**Rules for agents:**
- **Max 3 agents** running in parallel
- Each agent brief should be **focused and specific** — no open-ended exploration
- Each agent should return **under 800 tokens** of findings
- Use `subagent_type: "Explore"` for codebase mapping, `"Research"` for external topics
- If a track is simple enough to answer from your own knowledge, skip the agent and answer directly

### Step 3: Synthesize Findings

After agents return, synthesize into a single research summary:

```
RESEARCH SUMMARY

## {{Track 1 Name}}
- {{key finding}}
- {{key finding}}
- Recommended: {{approach}}
- Risk: {{gotcha or concern}}

## {{Track 2 Name}}
...

## Decisions Needed
- {{decision 1}}: {{options and trade-off}}
- {{decision 2}}: {{options and trade-off}}

## Assumptions Made
- {{assumption}} — {{why it's reasonable}}
```

Present to user. Discuss any decisions that need their input.

### Step 4: Update Project

After user confirms:
1. **Update PROJECT.md** — add findings to Architecture, Constraints, and Decisions sections
2. **Update STATE.md**:
   - Status: research_complete
   - Next Action: `/bolt:roadmap`

### Guidelines

- **Don't boil the ocean.** Research what matters for planning, not everything.
- **Prefer your own knowledge** for well-known tools (React, Express, PostgreSQL, etc.). Only use agents for unfamiliar territory or codebase exploration.
- **Codebase track is critical** for brownfield projects — never skip it if there's existing code.
- **Flag unknowns honestly.** If something needs a spike during build, say so now.
- **Token budget:** aim for the whole command to stay under 40k tokens total (including agent usage).

### Completion

```
Research complete ({{N}} tracks).

Key findings:
- {{finding 1}}
- {{finding 2}}
- {{finding 3}}

PROJECT.md updated with technical research.
NEXT: Run /bolt:roadmap to break the project into phases.
```
