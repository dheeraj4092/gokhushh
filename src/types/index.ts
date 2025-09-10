export interface StoryCard {
  id: number;
  headline: string;
  subtext: string;
  visual: string;
}

export interface Metric {
  rides: number;
  drivers: number;
  savings: number;
  businesses: number;
  engagement: number;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  type: 'investor' | 'advertiser' | 'partnership' | 'general';
}

export interface SimulationState {
  rider: {
    isBooking: boolean;
    adPlaying: boolean;
    priceDropped: boolean;
    creditsEarned: number;
  };
  driver: {
    hasRequest: boolean;
    tripInProgress: boolean;
    earnings: number;
  };
  advertiser: {
    campaignActive: boolean;
    impressions: number;
    budget: number;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}
