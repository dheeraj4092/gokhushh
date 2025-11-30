#!/bin/bash
# Build performance benchmark script
# Measures and compares build times

set -e

echo "🔬 Build Performance Benchmark"
echo "=============================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Clean build test
echo "📊 Test 1: Clean Build (no cache)"
echo "--------------------------------"
rm -rf .next node_modules/.cache 2>/dev/null || true

START_CLEAN=$(date +%s)
pnpm run build > /dev/null 2>&1
END_CLEAN=$(date +%s)
CLEAN_TIME=$((END_CLEAN - START_CLEAN))

echo -e "${GREEN}✅ Clean build completed in: ${CLEAN_TIME}s${NC}"
echo ""

# Incremental build test
echo "📊 Test 2: Incremental Build (with cache)"
echo "----------------------------------------"

# Make a small change to trigger rebuild
touch src/app/page.tsx

START_INCREMENTAL=$(date +%s)
pnpm run build > /dev/null 2>&1
END_INCREMENTAL=$(date +%s)
INCREMENTAL_TIME=$((END_INCREMENTAL - START_INCREMENTAL))

echo -e "${GREEN}✅ Incremental build completed in: ${INCREMENTAL_TIME}s${NC}"
echo ""

# Calculate improvement
if [ $INCREMENTAL_TIME -lt $CLEAN_TIME ]; then
    IMPROVEMENT=$(( (CLEAN_TIME - INCREMENTAL_TIME) * 100 / CLEAN_TIME ))
    echo -e "${BLUE}📈 Incremental build is ${IMPROVEMENT}% faster!${NC}"
else
    echo "⚠️  Cache might not be working properly"
fi

echo ""
echo "Summary:"
echo "--------"
echo "Clean Build:       ${CLEAN_TIME}s"
echo "Incremental Build: ${INCREMENTAL_TIME}s"
echo ""

# Check bundle size
if [ -d ".next" ]; then
    BUNDLE_SIZE=$(du -sh .next | cut -f1)
    echo "Bundle Size: ${BUNDLE_SIZE}"
fi

echo ""
echo "💡 Tips:"
echo "  - Clean builds should be ~2-3 minutes"
echo "  - Incremental builds should be ~45-90 seconds"
echo "  - If slower, run: pnpm run clean && pnpm install"
