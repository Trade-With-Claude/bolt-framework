# Verification Patterns

## Inline Verification (during /bolt:build)

Every task has a `verify` field. After completing a task:

1. **Run the verify step** exactly as written
2. **Record result**: PASS or FAIL
3. **On FAIL**: Stop immediately. Show error. Offer:
   - `retry` — fix and re-verify
   - `skip` — mark as SKIPPED, continue (user decides)
   - `stop` — halt build, save progress

### Verify Step Types

| Type | Example | How to Check |
|------|---------|--------------|
| `run` | `npm test` | Execute command, check exit code |
| `exists` | `src/auth.ts exists` | Check file exists |
| `contains` | `package.json contains "jest"` | Grep for content |
| `builds` | `npm run build` | Run build, check exit code |
| `manual` | `User confirms UI looks correct` | Ask user, wait for response |
| `request` | `curl localhost:3000/api/health` | Make request, check response |

## Acceptance Criteria Verification (during /bolt:close)

Each acceptance criterion uses Given/When/Then format:

```
Given: [precondition]
When: [action]
Then: [expected result]
Verify: [how to test]
```

During UNIFY (/bolt:close):
1. Walk through each criterion
2. Run the verify step
3. Record PASS / FAIL / PARTIAL
4. Log deviations for any non-PASS

## Severity Levels (for /bolt:verify UAT)

- **P0 — Blocker**: Core functionality broken, cannot proceed
- **P1 — Major**: Feature works but with significant issues
- **P2 — Minor**: Cosmetic or edge case issues
- **P3 — Nit**: Nice to fix but not required
