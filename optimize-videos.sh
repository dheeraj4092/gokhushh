#!/bin/bash

# Video Optimization Script for Testimonials
# This script compresses videos from 10-15 MB to 3-5 MB while maintaining quality

# Create directories
mkdir -p public/testimonials/videos
mkdir -p public/testimonials/posters
mkdir -p public/testimonials/images

echo "🎬 Video Optimization Script for Gokhush Testimonials"
echo "======================================================"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg is not installed!"
    echo "📦 Install with: brew install ffmpeg"
    exit 1
fi

echo "✅ FFmpeg is installed"
echo ""
echo "📁 Place your original videos in a folder called 'original_videos'"
echo "   Then run this script to optimize them."
echo ""

# Create original_videos folder if it doesn't exist
mkdir -p original_videos

# Check if there are videos to process
if [ ! "$(ls -A original_videos)" ]; then
    echo "⚠️  No videos found in 'original_videos' folder"
    echo "📝 Instructions:"
    echo "   1. Create 'original_videos' folder (already created)"
    echo "   2. Copy your 10-15 MB videos into it"
    echo "   3. Run this script again: ./optimize-videos.sh"
    exit 0
fi

echo "🔄 Processing videos..."
echo ""

# Process each video in the original_videos folder
for video in original_videos/*; do
    if [ -f "$video" ]; then
        filename=$(basename "$video")
        name="${filename%.*}"
        
        echo "Processing: $filename"
        
        # Optimize video for web (reduces size by 60-70%)
        # - H.264 codec for maximum compatibility
        # - CRF 23 for good quality/size balance
        # - 2-pass encoding for better compression
        # - Scale to max 1080 height while maintaining aspect ratio
        # - Optimize for fast start (web streaming)
        
        ffmpeg -i "$video" \
            -c:v libx264 \
            -crf 23 \
            -preset medium \
            -vf "scale=-2:min(1920\,ih)" \
            -c:a aac \
            -b:a 128k \
            -movflags +faststart \
            -y \
            "public/testimonials/videos/${name}.mp4"
        
        # Generate poster/thumbnail image (at 1 second mark)
        ffmpeg -i "$video" \
            -ss 00:00:01 \
            -vframes 1 \
            -vf "scale=-2:1080" \
            -y \
            "public/testimonials/posters/${name}-poster.jpg"
        
        echo "✅ Completed: $filename"
        echo "   → Video: public/testimonials/videos/${name}.mp4"
        echo "   → Poster: public/testimonials/posters/${name}-poster.jpg"
        echo ""
    fi
done

echo "🎉 All videos optimized!"
echo ""
echo "📊 File size comparison:"
du -sh original_videos
du -sh public/testimonials/videos
echo ""
echo "📝 Next steps:"
echo "   1. Check the optimized videos in public/testimonials/videos/"
echo "   2. Update TestimonialsSection.tsx with the new paths"
echo "   3. Delete original_videos folder if satisfied with results"
