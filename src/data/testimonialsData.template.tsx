// Testimonials Data Template
// Copy this structure and replace with your actual data

import { Star, Users, TrendingUp } from 'lucide-react'

export interface TestimonialData {
  mediaType: 'video' | 'image'
  src: string
  poster?: string
  background: string
  title: string
  date: string
  scrollToExpand: string
  testimonial: {
    quote: string
    author: string
    role: string
    location: string
    stats?: {
      label: string
      value: string
      icon: React.ReactNode
    }[]
  }
}

// Example: Replace these paths with your actual video paths
export const testimonialsData: TestimonialData[] = [
  {
    mediaType: 'video',
    // Local path (recommended)
    src: '/testimonials/videos/rajesh-kumar-driver.mp4',
    poster: '/testimonials/posters/rajesh-kumar-driver-poster.jpg',
    background: '/testimonials/posters/rajesh-kumar-driver-poster.jpg',
    
    title: 'Hyderabad Pilot Launch',
    date: 'September 2024',
    scrollToExpand: 'Scroll to see the journey',
    testimonial: {
      quote: "In just 3 months, we completed over 2,400 rides with zero commission. The drivers are earning 40% more, and riders love the ad-supported model. It's been an incredible success!",
      author: 'Rajesh Kumar',
      role: 'Lead Driver Partner',
      location: 'Hyderabad, Telangana',
      stats: [
        { label: 'Total Rides', value: '2,400+', icon: <Users className="w-5 h-5" /> },
        { label: 'Driver Earnings Increase', value: '40%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'User Satisfaction', value: '94%', icon: <Star className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'image',
    src: '/testimonials/images/mohammed-azhar-earnings.jpg',
    background: '/testimonials/images/mohammed-azhar-earnings.jpg',
    
    title: 'Driver Success Stories',
    date: 'October 2024',
    scrollToExpand: 'Scroll to read more',
    testimonial: {
      quote: "I used to lose 25-30% of my earnings to platform fees. With Gokhush, I keep 100% of my fares. This has genuinely changed my life and my family's future.",
      author: 'Mohammed Azhar',
      role: 'Full-time Driver',
      location: 'Jubilee Hills, Hyderabad',
      stats: [
        { label: 'Monthly Earnings', value: '₹85,000', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Rides Completed', value: '450+', icon: <Users className="w-5 h-5" /> },
        { label: 'Rating', value: '4.9/5', icon: <Star className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: '/testimonials/videos/priya-sharma-rider.mp4',
    poster: '/testimonials/posters/priya-sharma-rider-poster.jpg',
    background: '/testimonials/posters/priya-sharma-rider-poster.jpg',
    
    title: 'Rider Experience Revolution',
    date: 'November 2024',
    scrollToExpand: 'Scroll to explore',
    testimonial: {
      quote: "Watching 3-5 short ads per ride and earning ₹15-25 credits? It's brilliant! I'm saving 25% on every ride, and the ads are actually relevant to my route. Win-win!",
      author: 'Priya Sharma',
      role: 'Regular Rider',
      location: 'Gachibowli, Hyderabad',
      stats: [
        { label: 'Monthly Savings', value: '₹800+', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Credits Earned', value: '₹2,100', icon: <Star className="w-5 h-5" /> },
        { label: 'Rides Taken', value: '45', icon: <Users className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: '/testimonials/videos/vikram-reddy-advertiser.mp4',
    poster: '/testimonials/posters/vikram-reddy-advertiser-poster.jpg',
    background: '/testimonials/posters/vikram-reddy-advertiser-poster.jpg',
    
    title: 'Business Growth Through Ads',
    date: 'November 2024',
    scrollToExpand: 'Scroll for insights',
    testimonial: {
      quote: "We saw a 340% ROI on our first campaign with Gokhush. The location-based targeting brought actual foot traffic to our restaurant. This is the future of local advertising!",
      author: 'Vikram Reddy',
      role: 'Restaurant Owner',
      location: 'Banjara Hills, Hyderabad',
      stats: [
        { label: 'Campaign ROI', value: '340%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'New Customers', value: '280+', icon: <Users className="w-5 h-5" /> },
        { label: 'Ad Engagement', value: '94%', icon: <Star className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: '/testimonials/videos/community-impact.mp4',
    poster: '/testimonials/posters/community-impact-poster.jpg',
    background: '/testimonials/posters/community-impact-poster.jpg',
    
    title: 'Community Impact',
    date: 'December 2024',
    scrollToExpand: 'Scroll to see the impact',
    testimonial: {
      quote: "Gokhush isn't just a platform—it's a movement. Zero commission means real financial freedom for drivers, affordable rides for everyone, and a sustainable business model. This is how ride-sharing should work.",
      author: 'Dr. Anand Rao',
      role: 'Economics Professor & Early Adopter',
      location: 'Hitech City, Hyderabad',
      stats: [
        { label: 'Platform Users', value: '5,000+', icon: <Users className="w-5 h-5" /> },
        { label: 'Total Savings', value: '₹12L+', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Community Rating', value: '4.8/5', icon: <Star className="w-5 h-5" /> },
      ]
    }
  }
]

/*
 * NAMING CONVENTIONS:
 * 
 * Videos: Use descriptive names with hyphens
 * - rajesh-kumar-driver.mp4
 * - priya-sharma-rider.mp4
 * - mohammed-azhar-earnings.mp4
 * 
 * Posters: Match video name with -poster suffix
 * - rajesh-kumar-driver-poster.jpg
 * - priya-sharma-rider-poster.jpg
 * 
 * Keep names:
 * - Lowercase
 * - No spaces (use hyphens)
 * - Descriptive but concise
 * - Consistent across video and poster
 */
