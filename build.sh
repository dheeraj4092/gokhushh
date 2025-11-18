#!/bin/bash
# Build script
# This bypasses npm issues by using pnpm or node directly

echo "🔨 Building project..."

# Check if pnpm is available
if command -v pnpm &> /dev/null; then
    echo "Using pnpm..."
    pnpm run build
else
    echo "Using node directly..."
    node node_modules/next/dist/bin/next build
fi
