# Hero Video Component Integration Guide

## ✅ Installation Complete

All components have been installed and configured for your Gokhush website.

## 📁 Files Created

1. **`/src/components/ui/hero-video.tsx`** - Core hero video component with scroll animations
2. **`/src/components/ui/shadcn-button.tsx`** - Shadcn-style button component (for compatibility)
3. **`/src/components/sections/HeroVideoSection.tsx`** - Three customized implementations for Gokhush

## 🎯 Where to Use These Components

### Option 1: Replace Interactive Simulations
Add a video showcase before or after the phone simulator section:

```tsx
// In src/app/page.tsx
import { GokhushHeroVideo } from '@/components/sections/HeroVideoSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <HeroWithStory />
      <PhoneTransition />
      <GokhushHeroVideo />  {/* 👈 Add here */}
      <InteractiveSimulations />
      {/* ... rest of sections */}
    </main>
  )
}
```

### Option 2: Add Between Major Sections
Create visual breaks with engaging video content:

```tsx
<main className="min-h-screen bg-brand-black">
  <HeroWithStory />
  <PhoneTransition />
  <InteractiveSimulations />
  <GokhushDriverVideo />  {/* 👈 Driver-focused video */}
  <LiveDashboard />
  <GokhushRiderVideo />   {/* 👈 Rider-focused video */}
  <SafetySection />
  <AdvertiserSection />
  {/* ... rest of sections */}
</main>
```

### Option 3: Create a Dedicated "How It Works" Page
Use all three variants to tell the complete story:

```tsx
// In src/app/how-it-works/page.tsx
import { GokhushHeroVideo, GokhushDriverVideo, GokhushRiderVideo } from '@/components/sections/HeroVideoSection'

export default function HowItWorks() {
  return (
    <main>
      <GokhushHeroVideo />
      <GokhushRiderVideo />
      <GokhushDriverVideo />
    </main>
  )
}
```

## 🎨 Three Ready-to-Use Variants

### 1. `<GokhushHeroVideo />`
**Best for:** Main landing section
- Shows overall platform value
- Generic ride-sharing video
- Call-to-action buttons for app download

### 2. `<GokhushDriverVideo />`
**Best for:** Driver recruitment section
- Highlights zero commission
- Shows 40% more earnings
- Focuses on driver benefits
- Uses left/right animations

### 3. `<GokhushRiderVideo />`
**Best for:** Rider engagement section
- Emphasizes earning credits
- Shows 25% savings
- Explains ad-supported model
- Uses top/bottom animations

## 🎬 Video Placeholders

The components use high-quality stock videos from Pexels. You can replace these with:
- Your own app demo videos
- Recorded screen captures from PhoneSimulator
- Professional marketing videos
- Customer testimonial videos

## 🎭 Animation Types Available

Each `<ContainerAnimated>` supports these animation props:
- `animation="top"` - Slides in from top
- `animation="bottom"` - Slides in from bottom
- `animation="left"` - Slides in from left
- `animation="right"` - Slides in from right
- `animation="z"` - Scales up (zoom effect)
- `animation="blur"` - Fades in with blur effect
- No prop - Simple fade in (default)

## 🛠 Customization Examples

### Change Scroll Behavior
```tsx
<ContainerInset 
  translateYRange={["-50%", "100%"]}  // More dramatic movement
  insetXRange={[50, 0]}                // Start more inset
  roundednessRange={[2000, 24]}        // More rounded corners
>
  {/* video */}
</ContainerInset>
```

### Adjust Colors
```tsx
<ContainerScroll 
  className="bg-gradient-to-r from-gokhush-green to-brand-blue text-white"
>
  {/* content */}
</ContainerScroll>
```

### Add Custom Content
```tsx
<ContainerAnimated animation="blur" className="my-6">
  <div className="grid grid-cols-3 gap-4">
    <StatCard title="2.4K+" label="Rides" />
    <StatCard title="0%" label="Commission" />
    <StatCard title="94%" label="Engagement" />
  </div>
</ContainerAnimated>
```

## 📱 Responsive Design

All components are fully responsive:
- Mobile: Single column, smaller text
- Tablet: Adjusted spacing and sizing
- Desktop: Full animations and effects

## 🚀 Quick Start

**Recommended first integration:**

```tsx
// src/app/page.tsx - Add after InteractiveSimulations
import { GokhushHeroVideo } from '@/components/sections/HeroVideoSection'

// In your component:
<InteractiveSimulations />
<GokhushHeroVideo />
<LiveDashboard />
```

This creates a nice visual break and showcases your platform with an engaging scroll animation!

## 💡 Pro Tips

1. **Video Loading:** Videos are set to autoPlay and loop - ensure they're optimized for web
2. **Poster Images:** Each video has a poster image for faster perceived loading
3. **Performance:** The scroll animations use Framer Motion's optimized transforms
4. **Accessibility:** All animations respect user's motion preferences
5. **SEO:** Videos include fallback poster images for better indexing

## 🎯 Best Practice Integration

For maximum impact on your landing page:

```tsx
<main className="min-h-screen bg-brand-black">
  <HeroWithStory />           {/* Initial hook */}
  <PhoneTransition />         {/* Phone reveal */}
  <GokhushHeroVideo />        {/* Video showcase - NEW! */}
  <InteractiveSimulations />  {/* Interactive demo */}
  <GokhushRiderVideo />       {/* Rider benefits - NEW! */}
  <LiveDashboard />           {/* Stats */}
  <GokhushDriverVideo />      {/* Driver benefits - NEW! */}
  <SafetySection />           {/* Trust building */}
  <AdvertiserSection />       {/* Business value */}
  <AboutSection />            {/* Story */}
  <AppDownload />             {/* Conversion */}
  <ContactSection />          {/* Support */}
</main>
```

This creates a compelling narrative flow with engaging visual breaks!
