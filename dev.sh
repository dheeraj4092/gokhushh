#!/bin/bash
# Optimized development server startup script

set -e

echo "🚀 Starting development server with optimizations..."
echo "📍 Working directory: $(pwd)"

# Set development environment
export NODE_ENV=development
export NEXT_TELEMETRY_DISABLED=1

# Optional: Increase memory for dev server (uncomment if needed)
# export NODE_OPTIONS="--max-old-space-size=2048"

# Only clear caches if --clean flag is passed
if [[ "$1" == "--clean" ]]; then
    echo "🗑️  Clearing caches..."
    rm -rf .next node_modules/.cache 2>/dev/null || true
else
    echo "💡 Tip: Use './dev.sh --clean' to clear caches"
fi

# Kill any existing processes on ports 3000-3002
echo "🔌 Checking ports..."
lsof -ti:3000 2>/dev/null | xargs kill -9 2>/dev/null || true
lsof -ti:3001 2>/dev/null | xargs kill -9 2>/dev/null || true
lsof -ti:3002 2>/dev/null | xargs kill -9 2>/dev/null || true

# Start server
echo "▶️  Starting Next.js dev server..."
if [ -f "node_modules/.bin/next" ]; then
    # Use pnpm if available for better module resolution
    if command -v pnpm &> /dev/null; then
        echo "✅ Using pnpm..."
        pnpm dev
    else
        node node_modules/.bin/next dev
    fi
else
    echo "❌ Error: Next.js not found. Run: pnpm install"
    exit 1
fi
