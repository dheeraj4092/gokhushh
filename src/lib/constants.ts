export const content = {
  hero: {
    tagline: "India's First Zero-Commission Ride Platform",
    subtitle: "Powered by Revolutionary AdTech",
    description: "Riders save money. Drivers earn 100% of fares. Businesses reach customers at the perfect moment. Welcome to the future of mobility.",
    cta: "See How It Works",
    secondary_cta: "Join the Revolution",
    pilot_badge: "✅ Pilot Successfully Completed in Hyderabad"
  },
  
  storyCards: [
    {
      id: 1,
      headline: "Why do ride-hailing platforms take 20-30% commission?",
      subtext: "Drivers work hard but keep only 70% of earnings. There's a better way.",
      visual: "commission-split-comparison",
      data: "Traditional platforms: Driver gets ₹70, Platform takes ₹30"
    },
    {
      id: 2,
      headline: "What if ads could fund the entire platform?",
      subtext: "30 seconds of relevant ads = zero platform fees + ride discounts for users.",
      visual: "ad-funding-model",
      data: "Gokhush: Driver gets ₹100, Rider saves ₹20, Platform funded by ads"
    },
    {
      id: 3,
      headline: "The magic happens during your ride",
      subtext: "Location-triggered ads show nearby businesses as you travel, earning credits for your next ride.",
      visual: "location-based-ads",
      data: "Avg 3-5 relevant ads per ride = ₹15-25 credits earned"
    },
    {
      id: 4,
      headline: "Everyone wins. Really.",
      subtext: "Riders save money, drivers earn more, local businesses get customers. It's not theory - we proved it.",
      visual: "triple-win-diagram",
      data: "Pilot Results: Riders saved 25%, Drivers earned 40% more"
    },
    {
      id: 5,
      headline: "Why now? Why us?",
      subtext: "Built by adtech experts who understand both mobility and advertising. Our pilot proved the model works.",
      visual: "team-expertise",
      data: "✅ Functional platform ✅ Pilot completed ✅ Ready to scale"
    }
  ],
  
  metrics: {
    // Pilot Program Results from Hyderabad
    pilotRides: 2400,
    activDrivers: 180,
    businessPartners: 45,
    riderSavings: 580000, // ₹5.8 lakhs total saved by riders
    driverEarnings: 920000, // ₹9.2 lakhs additional vs traditional
    adEngagement: 94, // % ad engagement rate
    avgCreditsPerRide: 22, // ₹22 average credits earned per ride
    avgSavingsPercent: 25, // 25% average savings for riders
    driverEarningsIncrease: 40, // 40% more earnings vs traditional platforms
    
    // City Coverage (Hyderabad)
    hyderabadZones: 12,
    activeHours: "6 AM - 11 PM",
    avgWaitTime: 3.2, // minutes
    customerSatisfaction: 4.7,
    
    // Business Metrics
    businessROI: 340, // % average ROI for advertisers
    footTrafficIncrease: 28, // % average increase
    campaignCompletionRate: 96 // % ads successfully served
  },
  
  features: {
    riders: [
      "Save up to 50% on rides",
      "Earn credits for future trips",
      "Discover local businesses",
      "Safe and reliable service"
    ],
    drivers: [
      "Keep 100% of your earnings",
      "Higher demand from affordable rides",
      "Flexible schedule",
      "Better work-life balance"
    ],
    advertisers: [
      "Target by location and demographics",
      "High engagement during rides",
      "Measurable ROI",
      "Local business growth"
    ]
  },
  
  testimonials: [
    {
      name: "Priya Sharma",
      role: "Rider",
      quote: "I've saved over ₹15,000 this month just by watching short ads during my rides. It's amazing!",
      avatar: "/images/testimonials/priya.jpg"
    },
    {
      name: "Rajesh Kumar",
      role: "Driver",
      quote: "Finally, a platform that treats drivers fairly. I keep 100% of what I earn.",
      avatar: "/images/testimonials/rajesh.jpg"
    },
    {
      name: "Anita Patel",
      role: "Business Owner",
      quote: "Our local restaurant saw a 40% increase in customers after running ads on the platform.",
      avatar: "/images/testimonials/anita.jpg"
    }
  ]
};

export const navigation = [
  { name: "How It Works", href: "#how-it-works" },
  { 
    name: "Platform", 
    href: "#platform",
    submenu: [
      { name: "For Riders", href: "#riders" },
      { name: "For Drivers", href: "#drivers" },  
      { name: "For Businesses", href: "#businesses" }
    ]
  },
  { name: "Pilot Results", href: "#pilot-results" },
  { name: "Technology", href: "#technology" },
  { name: "About Team", href: "#about" },
  { name: "Join Us", href: "#contact" }
];

export const socialLinks = [
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Instagram", href: "#", icon: "instagram" }
];
