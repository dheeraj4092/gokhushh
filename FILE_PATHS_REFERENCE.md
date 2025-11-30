# 📁 File Path Reference Guide

## Exact Paths for Your Videos

### Where to Put Original Videos
```
📂 /Users/dheerajkumar29/Documents/gokhushh/original_videos/
   ├── 📹 rajesh-kumar.mp4          (10-15 MB - YOUR SOURCE FILE)
   ├── 📹 priya-sharma.mp4           (10-15 MB - YOUR SOURCE FILE)
   ├── 📹 mohammed-azhar.mp4         (10-15 MB - YOUR SOURCE FILE)
   ├── 📹 vikram-reddy.mp4           (10-15 MB - YOUR SOURCE FILE)
   └── 📹 community-impact.mp4       (10-15 MB - YOUR SOURCE FILE)
```

### Where Optimized Files Go (Automatic)
```
📂 /Users/dheerajkumar29/Documents/gokhushh/public/testimonials/
   ├── 📂 videos/
   │   ├── 📹 rajesh-kumar.mp4      (3-5 MB - OPTIMIZED)
   │   ├── 📹 priya-sharma.mp4       (3-5 MB - OPTIMIZED)
   │   ├── 📹 mohammed-azhar.mp4     (3-5 MB - OPTIMIZED)
   │   ├── 📹 vikram-reddy.mp4       (3-5 MB - OPTIMIZED)
   │   └── 📹 community-impact.mp4   (3-5 MB - OPTIMIZED)
   │
   ├── 📂 posters/
   │   ├── 🖼️  rajesh-kumar-poster.jpg     (AUTO-GENERATED)
   │   ├── 🖼️  priya-sharma-poster.jpg      (AUTO-GENERATED)
   │   ├── 🖼️  mohammed-azhar-poster.jpg    (AUTO-GENERATED)
   │   ├── 🖼️  vikram-reddy-poster.jpg      (AUTO-GENERATED)
   │   └── 🖼️  community-impact-poster.jpg  (AUTO-GENERATED)
   │
   └── 📂 images/
       ├── 🖼️  testimonial-photo-1.jpg     (IF USING STATIC IMAGES)
       └── 🖼️  testimonial-photo-2.jpg     (IF USING STATIC IMAGES)
```

---

## Usage in Component (TestimonialsSection.tsx)

### For Videos:
```typescript
{
  mediaType: 'video',
  
  // Path seen by browser (relative to public folder)
  src: '/testimonials/videos/rajesh-kumar.mp4',
  poster: '/testimonials/posters/rajesh-kumar-poster.jpg',
  background: '/testimonials/posters/rajesh-kumar-poster.jpg',
  
  // Actual file system location:
  // /Users/dheerajkumar29/Documents/gokhushh/public/testimonials/videos/rajesh-kumar.mp4
  // /Users/dheerajkumar29/Documents/gokhushh/public/testimonials/posters/rajesh-kumar-poster.jpg
}
```

### For Images:
```typescript
{
  mediaType: 'image',
  
  // Path seen by browser
  src: '/testimonials/images/testimonial-photo-1.jpg',
  background: '/testimonials/images/testimonial-photo-1.jpg',
  
  // Actual file system location:
  // /Users/dheerajkumar29/Documents/gokhushh/public/testimonials/images/testimonial-photo-1.jpg
}
```

---

## Path Rules (IMPORTANT!)

### ✅ Correct Paths (in Component):
```typescript
src: '/testimonials/videos/my-video.mp4'          // ✅ Starts with /
poster: '/testimonials/posters/my-poster.jpg'     // ✅ Starts with /
```

### ❌ Wrong Paths (will NOT work):
```typescript
src: 'testimonials/videos/my-video.mp4'           // ❌ Missing leading /
src: './testimonials/videos/my-video.mp4'         // ❌ Don't use ./
src: '../public/testimonials/videos/my-video.mp4' // ❌ Don't reference public
src: 'public/testimonials/videos/my-video.mp4'    // ❌ Don't include public in path
```

---

## File Naming Best Practices

### ✅ Good Names:
```
rajesh-kumar-driver.mp4
priya-sharma-rider.mp4
mohammed-azhar-success.mp4
community-impact-2024.mp4
```

### ❌ Bad Names:
```
Video 1.mp4                  // ❌ Spaces, not descriptive
RajeshKumar.mp4             // ❌ Use lowercase with hyphens
testimonial final FINAL.mp4  // ❌ Spaces, not professional
DSC_0001.mp4                // ❌ Not descriptive
```

---

## Complete Example

### 1. Your Source File:
```
/Users/dheerajkumar29/Documents/gokhushh/original_videos/rajesh-kumar.mp4
Size: 12 MB
```

### 2. After Running `./optimize-videos.sh`:
```
Optimized Video:
/Users/dheerajkumar29/Documents/gokhushh/public/testimonials/videos/rajesh-kumar.mp4
Size: 4 MB (67% reduction!)

Auto-Generated Poster:
/Users/dheerajkumar29/Documents/gokhushh/public/testimonials/posters/rajesh-kumar-poster.jpg
Size: 150 KB
```

### 3. In Your Component:
```typescript
const hyderabadTestimonials: TestimonialData[] = [
  {
    mediaType: 'video',
    src: '/testimonials/videos/rajesh-kumar.mp4',           // Browser path
    poster: '/testimonials/posters/rajesh-kumar-poster.jpg', // Browser path
    background: '/testimonials/posters/rajesh-kumar-poster.jpg',
    title: 'Driver Success Story',
    date: 'November 2024',
    scrollToExpand: 'Scroll to see more',
    testimonial: {
      quote: "This platform changed my life...",
      author: 'Rajesh Kumar',
      role: 'Driver Partner',
      location: 'Hyderabad',
      stats: [...]
    }
  }
]
```

### 4. Browser Requests:
```
http://localhost:3000/testimonials/videos/rajesh-kumar.mp4
↓
Served from: /public/testimonials/videos/rajesh-kumar.mp4
```

---

## Quick Verification

### Check if files exist:
```bash
# List your source videos
ls -lh original_videos/

# List optimized videos
ls -lh public/testimonials/videos/

# List poster thumbnails
ls -lh public/testimonials/posters/

# Check sizes
du -sh original_videos/
du -sh public/testimonials/videos/
```

---

## Remember:

1. **Source videos** → `original_videos/` (keep these as backup)
2. **Optimized videos** → `public/testimonials/videos/` (these are served)
3. **In component** → Use paths starting with `/testimonials/...`
4. **Never reference** `public/` in your component paths

The `public/` folder is special in Next.js - files inside it are served from the root URL.

So: `public/testimonials/videos/file.mp4` → `/testimonials/videos/file.mp4`
