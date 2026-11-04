#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
SKILL="$ROOT/.agents/skills/english-explain"
OUT="$ROOT/tmp/english-explain-skill"
cd "$ROOT"

npx tsc --noEmit
npx tsx scripts/validate-data.mjs
npx tsx scripts/check-simple-words.mjs
npx tsx scripts/check-simple-words.mjs --entry "$SKILL/examples/iron/main.js"

node --check "$SKILL/runtime.js"
node --check "$SKILL/scripts/build.mjs"
node --check "$SKILL/scripts/browser.mjs"
node --check "$SKILL/scripts/walkthrough.mjs"
node "$SKILL/scripts/build.mjs" "$SKILL/examples/iron/main.js" --out "$OUT/iron.html"
cmp "$SKILL/examples/iron.html" "$OUT/iron.html"
node "$SKILL/scripts/walkthrough.mjs" "$OUT/iron.html" --out "$OUT/review"

test -L .claude/skills/english-explain
test "$(readlink .claude/skills/english-explain)" = "../../.agents/skills/english-explain"
git diff --check
echo "PASS: english-explain gates, reproducible offline build, and browser walkthrough"
