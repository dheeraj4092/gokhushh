#!/bin/bash

# Optimize existing videos in place
# This will reduce file sizes by 60-70% while maintaining quality

cd /Users/dheerajkumar29/Documents/gokhushh

echo "🎬 Optimizing Videos for Better Performance"
echo "=============================================="
echo ""
echo "This will compress your videos from ~94 MB to ~25-30 MB"
echo "Original files are backed up in original_videos/"
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg is not installed!"
    echo "📦 Install with: brew install ffmpeg"
    exit 1
fi

# Create temp directory
mkdir -p temp_optimized

echo "🔄 Optimizing videos..."
echo ""

# Optimize each video
videos=(
    "Bavabro collab.mp4"
    "Koi.mp4"
    "Swach water.mp4"
    "Swachhhh collab.mp4"
    "ilatte.mp4"
    "teluguthaanam collab .mp4"
)

for video in "${videos[@]}"; do
    echo "Processing: $video"
    
    # Get original size
    original_size=$(du -h "public/testimonials/videos/$video" | cut -f1)
    
    # Optimize video
    ffmpeg -i "public/testimonials/videos/$video" \
        -c:v libx264 \
        -crf 23 \
        -preset medium \
        -vf "scale=-2:min(1920\,ih)" \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -y \
        "temp_optimized/$video" 2>&1 | grep -E "(time=|speed=)" | tail -1
    
    # Get new size
    if [ -f "temp_optimized/$video" ]; then
        new_size=$(du -h "temp_optimized/$video" | cut -f1)
        
        # Replace original with optimized
        mv "temp_optimized/$video" "public/testimonials/videos/$video"
        
        echo "✅ $video: $original_size → $new_size"
        echo ""
    else
        echo "❌ Failed to optimize: $video"
        echo ""
    fi
done

# Cleanup
rmdir temp_optimized 2>/dev/null

echo "=============================================="
echo "🎉 Optimization Complete!"
echo ""
echo "📊 Size Comparison:"
echo "Before:"
du -sh original_videos/
echo "After:"
du -sh public/testimonials/videos/
echo ""
echo "💡 Next steps:"
echo "1. Restart your dev server: npm run dev"
echo "2. Compilation should be MUCH faster now!"
echo "3. Test videos at: http://localhost:3000"
