#!/bin/bash
# BOLT Framework Installer
# Copies command files to ~/.claude/commands/bolt/

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET_DIR="$HOME/.claude/commands/bolt"

echo "BOLT Framework - Installing..."
echo ""

mkdir -p "$TARGET_DIR"

cp "$SCRIPT_DIR/commands/bolt/"*.md "$TARGET_DIR/"

COUNT=$(ls -1 "$TARGET_DIR"/*.md 2>/dev/null | wc -l | tr -d ' ')

echo "Installed $COUNT commands to $TARGET_DIR/"
echo ""
echo "Commands available:"
for f in "$TARGET_DIR"/*.md; do
    name=$(basename "$f" .md)
    echo "  /bolt:$name"
done
echo ""
echo "Get started: run /bolt:help in Claude Code"
