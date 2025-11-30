# 🚀 Quick Start - Video Integration Cheat Sheet

## One-Command Setup

```bash
# 1. Run this single command to set everything up
cd ~/Documents/gokhushh && \
mkdir -p original_videos public/testimonials/{videos,posters,images} && \
echo "✅ Folders created! Now add your videos to 'original_videos/' and run './optimize-videos.sh'"
```

## Step-by-Step (5 Minutes)

### 1️⃣ Install FFmpeg (One Time Only)
```bash
brew install ffmpeg
```

### 2️⃣ Add Your Videos
```bash
# Copy your videos to original_videos/
# Rename them descriptively: rajesh-kumar.mp4, priya-sharma.mp4, etc.
```

### 3️⃣ Optimize Everything
```bash
./optimize-videos.sh
```

### 4️⃣ Update Component (replace URLs with local paths)
```typescript
// In TestimonialsSection.tsx, change:
src: 'https://videos.pexels.com/...'
// To:
src: '/testimonials/videos/your-video.mp4'
poster: '/testimonials/posters/your-video-poster.jpg'
```

### 5️⃣ Done! 🎉
```bash
pnpm run dev
# Visit http://localhost:3000
```

---

## Manual Optimization (Single Video)

```bash
# Optimize one video
ffmpeg -i original_videos/my-video.mp4 \
  -c:v libx264 -crf 23 -preset medium \
  -vf "scale=-2:1920" \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  public/testimonials/videos/my-video.mp4

# Generate poster
ffmpeg -i original_videos/my-video.mp4 \
  -ss 00:00:01 -vframes 1 \
  public/testimonials/posters/my-video-poster.jpg
```

---

## File Size Targets

| Item | Original | Optimized | Savings |
|------|----------|-----------|---------|
| Video | 10-15 MB | 3-5 MB | 60-70% |
| Poster | N/A | 100-200 KB | N/A |

---

## Video Settings Quick Reference

```bash
# High Quality (larger file)
-crf 20 -preset slow

# Balanced (recommended)
-crf 23 -preset medium

# Smaller File (lower quality)
-crf 27 -preset fast

# Resolution Options
-vf "scale=-2:1920"  # 1080p (recommended)
-vf "scale=-2:1280"  # 720p (smaller)
```

---

## Troubleshooting

### Video too large?
```bash
# Use higher CRF (lower quality, smaller size)
-crf 25
```

### Video quality poor?
```bash
# Use lower CRF (higher quality, larger size)
-crf 21
```

### Video won't play in browser?
```bash
# Ensure H.264 codec
-c:v libx264
```

---

## Project Structure

```
gokhushh/
├── optimize-videos.sh              # Run this to optimize
├── original_videos/                # Put your videos here
│   ├── video1.mp4
│   └── video2.mp4
└── public/
    └── testimonials/
        ├── videos/                 # Optimized videos
        ├── posters/                # Auto-generated thumbnails
        └── images/                 # Static images
```

---

## Component Update Template

```typescript
{
  mediaType: 'video',
  src: '/testimonials/videos/YOUR-VIDEO-NAME.mp4',
  poster: '/testimonials/posters/YOUR-VIDEO-NAME-poster.jpg',
  background: '/testimonials/posters/YOUR-VIDEO-NAME-poster.jpg',
  title: 'Your Title',
  date: 'Month Year',
  testimonial: {
    quote: "Your testimonial quote here...",
    author: 'Author Name',
    role: 'Their Role',
    location: 'Location',
    stats: [...]
  }
}
```

---

## Commands Reference

```bash
# Check FFmpeg installation
ffmpeg -version

# Check file sizes
ls -lh public/testimonials/videos/

# Check optimization results
du -sh original_videos/
du -sh public/testimonials/videos/

# Test video playback
open public/testimonials/videos/your-video.mp4

# Start dev server
pnpm run dev
```

---

## Expected Results After Optimization

✅ Videos: 3-5 MB each (down from 10-15 MB)  
✅ Posters: Auto-generated thumbnails  
✅ Fast loading on all devices  
✅ Mobile-optimized vertical format  
✅ Smooth playback in phone mockup  

---

## Need Help?

📖 Full guide: `VIDEO_INTEGRATION_GUIDE.md`  
🎬 Script: `optimize-videos.sh`  
📝 Template: `src/data/testimonialsData.template.tsx`
