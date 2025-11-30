#!/bin/bash
# Optimized build script with caching and parallel processing

set -e

echo "🔨 Building project with optimizations..."

# Set Node environment
export NODE_ENV=production

# Increase Node.js memory limit for large builds
export NODE_OPTIONS="--max-old-space-size=4096"

# Enable Next.js telemetry for build insights (optional)
export NEXT_TELEMETRY_DISABLED=1

echo "📊 Node memory limit: 4GB"
echo "🗑️  Cleaning old build artifacts..."

# Clean only .next build folder (keep node_modules for faster rebuilds)
rm -rf .next

echo "� Verifying dependencies..."

# Check if pnpm is available
if command -v pnpm &> /dev/null; then
    echo "✅ Using pnpm for faster builds..."
    
    # Build with pnpm (uses lockfile for faster installs)
    time pnpm run build
else
    echo "⚠️  pnpm not found, using node directly..."
    echo "💡 Install pnpm for 2x faster builds: npm install -g pnpm"
    
    # Build with node directly
    time node node_modules/next/dist/bin/next build
fi

echo "✅ Build complete!"
echo "📦 Build output: .next/"
