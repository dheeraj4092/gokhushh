#!/bin/bash

# Generate poster thumbnails for existing videos

cd /Users/dheerajkumar29/Documents/gokhushh

echo "🎬 Generating poster thumbnails..."
echo ""

ffmpeg -i "public/testimonials/videos/Bavabro collab.mp4" -ss 00:00:01 -vframes 1 -y "public/testimonials/posters/bavabro-collab-poster.jpg" 2>&1 | tail -1
echo "✅ Created: bavabro-collab-poster.jpg"

ffmpeg -i "public/testimonials/videos/Koi.mp4" -ss 00:00:01 -vframes 1 -y "public/testimonials/posters/koi-poster.jpg" 2>&1 | tail -1
echo "✅ Created: koi-poster.jpg"

ffmpeg -i "public/testimonials/videos/Swach water.mp4" -ss 00:00:01 -vframes 1 -y "public/testimonials/posters/swach-water-poster.jpg" 2>&1 | tail -1
echo "✅ Created: swach-water-poster.jpg"

ffmpeg -i "public/testimonials/videos/Swachhhh collab.mp4" -ss 00:00:01 -vframes 1 -y "public/testimonials/posters/swachhhh-collab-poster.jpg" 2>&1 | tail -1
echo "✅ Created: swachhhh-collab-poster.jpg"

ffmpeg -i "public/testimonials/videos/ilatte.mp4" -ss 00:00:01 -vframes 1 -y "public/testimonials/posters/ilatte-poster.jpg" 2>&1 | tail -1
echo "✅ Created: ilatte-poster.jpg"

ffmpeg -i "public/testimonials/videos/teluguthaanam collab .mp4" -ss 00:00:01 -vframes 1 -y "public/testimonials/posters/teluguthaanam-collab-poster.jpg" 2>&1 | tail -1
echo "✅ Created: teluguthaanam-collab-poster.jpg"

echo ""
echo "🎉 All poster thumbnails created!"
echo ""
echo "📊 Results:"
ls -lh public/testimonials/posters/
