#!/bin/bash

# Video Integration Verification Script
# This script checks if everything is set up correctly

echo "🔍 Gokhush Testimonials - Setup Verification"
echo "=============================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check counter
checks_passed=0
checks_failed=0

# Function to print check result
check_result() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
        ((checks_passed++))
    else
        echo -e "${RED}❌ $2${NC}"
        if [ -n "$3" ]; then
            echo -e "${YELLOW}   → $3${NC}"
        fi
        ((checks_failed++))
    fi
}

# Check 1: FFmpeg installation
echo "1. Checking FFmpeg installation..."
if command -v ffmpeg &> /dev/null; then
    ffmpeg_version=$(ffmpeg -version | head -n1)
    check_result 0 "FFmpeg is installed: $ffmpeg_version"
else
    check_result 1 "FFmpeg is NOT installed" "Install with: brew install ffmpeg"
fi
echo ""

# Check 2: Folder structure
echo "2. Checking folder structure..."
if [ -d "public/testimonials" ]; then
    check_result 0 "public/testimonials/ exists"
    
    if [ -d "public/testimonials/videos" ]; then
        check_result 0 "public/testimonials/videos/ exists"
    else
        check_result 1 "public/testimonials/videos/ missing" "Run: mkdir -p public/testimonials/videos"
    fi
    
    if [ -d "public/testimonials/posters" ]; then
        check_result 0 "public/testimonials/posters/ exists"
    else
        check_result 1 "public/testimonials/posters/ missing" "Run: mkdir -p public/testimonials/posters"
    fi
    
    if [ -d "public/testimonials/images" ]; then
        check_result 0 "public/testimonials/images/ exists"
    else
        check_result 1 "public/testimonials/images/ missing" "Run: mkdir -p public/testimonials/images"
    fi
else
    check_result 1 "public/testimonials/ missing" "Run: mkdir -p public/testimonials/{videos,posters,images}"
fi
echo ""

# Check 3: Optimization script
echo "3. Checking optimization script..."
if [ -f "optimize-videos.sh" ]; then
    check_result 0 "optimize-videos.sh exists"
    
    if [ -x "optimize-videos.sh" ]; then
        check_result 0 "optimize-videos.sh is executable"
    else
        check_result 1 "optimize-videos.sh is not executable" "Run: chmod +x optimize-videos.sh"
    fi
else
    check_result 1 "optimize-videos.sh missing" "Script should have been created"
fi
echo ""

# Check 4: Original videos folder
echo "4. Checking source videos..."
if [ -d "original_videos" ]; then
    check_result 0 "original_videos/ folder exists"
    
    video_count=$(find original_videos -type f \( -name "*.mp4" -o -name "*.mov" -o -name "*.avi" \) 2>/dev/null | wc -l | xargs)
    if [ "$video_count" -gt 0 ]; then
        check_result 0 "Found $video_count video(s) in original_videos/"
    else
        check_result 1 "No videos found in original_videos/" "Add your 10-15 MB videos to this folder"
    fi
else
    check_result 1 "original_videos/ folder missing" "Run: mkdir original_videos"
fi
echo ""

# Check 5: Optimized videos
echo "5. Checking optimized videos..."
optimized_count=$(find public/testimonials/videos -type f -name "*.mp4" 2>/dev/null | wc -l | xargs)
if [ "$optimized_count" -gt 0 ]; then
    check_result 0 "Found $optimized_count optimized video(s)"
    
    echo ""
    echo "   📊 Video Details:"
    for video in public/testimonials/videos/*.mp4; do
        if [ -f "$video" ]; then
            size=$(du -h "$video" | cut -f1)
            name=$(basename "$video")
            echo "      • $name - $size"
        fi
    done
else
    check_result 1 "No optimized videos found" "Run: ./optimize-videos.sh after adding source videos"
fi
echo ""

# Check 6: Poster thumbnails
echo "6. Checking poster thumbnails..."
poster_count=$(find public/testimonials/posters -type f \( -name "*.jpg" -o -name "*.png" \) 2>/dev/null | wc -l | xargs)
if [ "$poster_count" -gt 0 ]; then
    check_result 0 "Found $poster_count poster thumbnail(s)"
else
    check_result 1 "No poster thumbnails found" "Run: ./optimize-videos.sh to auto-generate"
fi
echo ""

# Check 7: Next.js config
echo "7. Checking Next.js configuration..."
if [ -f "next.config.ts" ] || [ -f "next.config.js" ]; then
    check_result 0 "Next.js config file exists"
    
    # Check if config is empty
    if [ -f "next.config.js" ] && [ ! -s "next.config.js" ]; then
        check_result 1 "next.config.js is empty" "Remove it: rm next.config.js"
    fi
else
    check_result 1 "Next.js config missing" "next.config.ts should exist"
fi
echo ""

# Summary
echo "=============================================="
echo "📊 Summary"
echo "=============================================="
echo -e "${GREEN}Passed: $checks_passed${NC}"
echo -e "${RED}Failed: $checks_failed${NC}"
echo ""

if [ $checks_failed -eq 0 ]; then
    echo -e "${GREEN}🎉 All checks passed! You're ready to go!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. If you haven't optimized videos yet: ./optimize-videos.sh"
    echo "2. Update TestimonialsSection.tsx with your video paths"
    echo "3. Start dev server: pnpm run dev"
    echo "4. Visit: http://localhost:3000"
else
    echo -e "${YELLOW}⚠️  Please fix the issues above and run this script again.${NC}"
    echo ""
    echo "Quick fixes:"
    echo "• Install FFmpeg: brew install ffmpeg"
    echo "• Create folders: mkdir -p public/testimonials/{videos,posters,images} original_videos"
    echo "• Make script executable: chmod +x optimize-videos.sh"
fi

echo ""
echo "📚 Documentation:"
echo "   • Full Guide: VIDEO_INTEGRATION_GUIDE.md"
echo "   • Quick Start: VIDEO_QUICK_START.md"
echo "   • Template: src/data/testimonialsData.template.tsx"
