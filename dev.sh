#!/bin/bash
# Development server startup script
# This bypasses npm issues

set -e

echo "🚀 Starting development server..."
echo "📍 Working directory: $(pwd)"
echo "🗑️  Clearing caches..."

# Clear caches
rm -rf .next node_modules/.cache 2>/dev/null || true

# Kill any existing processes on ports 3000-3002
echo "🔌 Checking ports..."
lsof -ti:3000 2>/dev/null | xargs kill -9 2>/dev/null || true
lsof -ti:3001 2>/dev/null | xargs kill -9 2>/dev/null || true
lsof -ti:3002 2>/dev/null | xargs kill -9 2>/dev/null || true

# Start server
echo "▶️  Starting Next.js..."
if [ -f "node_modules/.bin/next" ]; then
    node node_modules/.bin/next dev
else
    echo "❌ Error: Next.js not found. Run: pnpm install"
    exit 1
fi
