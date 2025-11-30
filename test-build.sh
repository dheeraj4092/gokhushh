#!/bin/bash
# Quick build test script

set -e

echo "🔬 Testing Optimized Build Performance"
echo "======================================"
echo ""

# Check if .next exists
if [ -d ".next" ]; then
    echo "⚠️  Previous build exists. Cleaning..."
    rm -rf .next node_modules/.cache
    echo "✅ Cleaned"
else
    echo "✅ No previous build found"
fi

echo ""
echo "🚀 Starting build..."
echo ""

# Record start time
START=$(date +%s)

# Run build and capture output
if pnpm run build 2>&1 | tee build-output.log; then
    # Record end time
    END=$(date +%s)
    DURATION=$((END - START))
    
    echo ""
    echo "======================================"
    echo "✅ Build completed successfully!"
    echo "======================================"
    echo ""
    echo "⏱️  Build Time: ${DURATION} seconds"
    
    # Check bundle size
    if [ -d ".next" ]; then
        BUNDLE_SIZE=$(du -sh .next | cut -f1)
        echo "📦 Bundle Size: ${BUNDLE_SIZE}"
    fi
    
    echo ""
    
    # Performance analysis
    if [ $DURATION -lt 120 ]; then
        echo "🎉 EXCELLENT! Build is very fast (< 2 minutes)"
    elif [ $DURATION -lt 180 ]; then
        echo "✅ GOOD! Build time is within target (< 3 minutes)"
    elif [ $DURATION -lt 240 ]; then
        echo "⚠️  ACCEPTABLE. Build time is ~4 minutes"
    else
        echo "❌ SLOW. Build time exceeds 4 minutes"
        echo "💡 Try: pnpm run clean && pnpm install"
    fi
    
    echo ""
    echo "📝 Full build log saved to: build-output.log"
    
else
    END=$(date +%s)
    DURATION=$((END - START))
    echo ""
    echo "❌ Build failed after ${DURATION} seconds"
    echo "📝 Check build-output.log for errors"
    exit 1
fi
