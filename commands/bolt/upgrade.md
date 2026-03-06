# /bolt:upgrade — Upgrade BOLT Structure

Migrate an existing `.bolt/` directory to the latest schema version.

## Usage

```
/bolt:upgrade
```

## Instructions

### Step 1: Detect Current Schema

Read `.bolt/SCHEMA`. If it doesn't exist, determine the schema:

- **No `.bolt/` at all** → Not a BOLT project. Tell user to run `/bolt:init`.
- **`.bolt/` exists with flat structure** (ROADMAP.md, STATE.md, PROJECT.md at `.bolt/` root, no version folders) → Schema `0`
- **`.bolt/` exists with `SCHEMA` file** → Read the version number

Current latest schema: **`1`**

### Step 2: Apply Migrations

Run migrations sequentially from current schema to latest.

---

#### Migration: Schema 0 → Schema 1 (Flat → Versioned)

**What changed:** Version folders (`v1/`, `v2/`), root STATE.md, SCHEMA file, IDEA.md

**Steps:**

1. Create `.bolt/v1/` directory

2. Move version-specific files into `.bolt/v1/`:
   ```
   .bolt/ROADMAP.md    → .bolt/v1/ROADMAP.md
   .bolt/STATE.md      → .bolt/v1/STATE.md (copy, not move)
   .bolt/phases/       → .bolt/v1/phases/
   ```

3. If `IDEA.md` exists in project root, copy it to `.bolt/v1/IDEA.md`

4. Create root `.bolt/STATE.md` with version tracking:
   ```markdown
   # STATE

   ## Current Version
   v1

   ## Version History
   | Version | Status | Git Tag |
   |---------|--------|---------|
   | v1 | in_progress | — |

   ## Current Position
   <!-- Copied from original STATE.md -->
   {{copy current position from old STATE.md}}

   ## Next Action
   {{copy from old STATE.md}}
   ```

5. Write `.bolt/SCHEMA` with content: `1`

6. Remove moved files from `.bolt/` root (ROADMAP.md, old STATE.md, phases/)
   - Do NOT remove PROJECT.md — it stays at `.bolt/` root

**Verify:** Check that `.bolt/v1/ROADMAP.md` and `.bolt/v1/STATE.md` exist.

---

### Step 3: Confirm

```
Upgraded BOLT schema: {{old}} → {{new}}

Changes:
- {{list of what was moved/created}}

Your project data is preserved. Run /bolt:status to verify.
```

## Adding Future Migrations

To add a new migration (e.g., Schema 1 → 2):

1. Add a new migration section above with clear steps
2. Update "Current latest schema" to the new number
3. Each migration must be idempotent — safe to run twice
4. Always verify the result at the end of each migration

## Notes

- Migrations are sequential. Schema 0 → 2 runs: 0→1, then 1→2.
- Never delete data — always move or copy.
- PROJECT.md always stays at `.bolt/` root level.
- If something looks wrong, stop and ask the user before proceeding.
