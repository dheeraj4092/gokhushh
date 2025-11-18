'use client'

import React, { useRef, useState, useEffect, useId } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue, AnimatePresence } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useOutsideClick } from '@/hooks/use-outside-click'

// Card data with detailed content
interface CardData {
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  content: () => React.ReactNode;
}

const cardData: CardData[] = [
  {
    title: "Zero Commission for Drivers",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=600&fit=crop&crop=center",
    category: "The Problem",
    description: "Why do rides cost so much... and drivers earn so little?",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Traditional platforms take 20-30% commission from drivers. Our Hyderabad pilot proved we can eliminate this entirely through smart advertising.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-red-900/20 rounded-xl border border-red-500/20">
            <div className="text-2xl font-bold text-red-400">₹70-80</div>
            <div className="text-sm text-gray-400">Traditional Driver Earnings</div>
          </div>
          <div className="text-center p-4 bg-red-900/20 rounded-xl border border-red-500/20">
            <div className="text-2xl font-bold text-red-400">₹20-30</div>
            <div className="text-sm text-gray-400">Platform Commission</div>
          </div>
          <div className="text-center p-4 bg-green-900/20 rounded-xl border border-gokhush-green/20">
            <div className="text-2xl font-bold text-gokhush-green">₹100</div>
            <div className="text-sm text-gray-400">With Gokhush (100%)</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Affordable Rides for Everyone",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center",
    category: "The Solution",
    description: "What if ads could make rides affordable for everyone?",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          30 seconds of relevant ads per ride eliminated platform fees while giving riders discounts. Result: 94% ad engagement rate.
        </p>
        <div className="space-y-3">
          <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-500/20">
            <div className="font-semibold text-blue-400 mb-2">Riders Save Money</div>
            <div className="text-sm text-gray-400">Average 25% savings + earn ₹15-25 credits per ride</div>
          </div>
          <div className="p-4 bg-green-900/20 rounded-xl border border-gokhush-green/20">
            <div className="font-semibold text-gokhush-green mb-2">Drivers Earn 40% More</div>
            <div className="text-sm text-gray-400">Keep 100% of fares - pilot drivers earned significantly more</div>
          </div>
          <div className="p-4 bg-purple-900/20 rounded-xl border border-purple-500/20">
            <div className="font-semibold text-purple-400 mb-2">Businesses See 340% ROI</div>
            <div className="text-sm text-gray-400">Location-targeted ads with measurable foot traffic</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Ad-Supported Model",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center",
    category: "The Experience",
    description: "Location-triggered ads that actually make sense",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          As you travel, see ads for nearby businesses you&apos;re literally moving toward. 3-5 relevant ads per ride earn you ₹15-25 credits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="font-semibold text-gokhush-green mb-2">Hyper-Local Targeting</div>
            <div className="text-sm text-gray-400">Geofenced ads within 2km - restaurants when hungry, gyms nearby</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="font-semibold text-gokhush-green mb-2">Instant Credit Rewards</div>
            <div className="text-sm text-gray-400">Auto-apply credits to next trip - pilot users saved 25%</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Triple Win Platform",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop&crop=center",
    category: "The Result",
    description: "Everyone wins. Really. We have the data.",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Over 2,400 rides in Hyderabad showed riders saved money, drivers earned 40% more, and 45 local businesses saw 340% ROI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-xl border border-gokhush-green/20">
            <div className="text-xl font-bold text-gokhush-green mb-1">25% Savings</div>
            <div className="text-sm text-gray-400">₹5.8 lakhs total savings</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-900/20 to-purple-900/20 rounded-xl border border-gokhush-green/20">
            <div className="text-xl font-bold text-gokhush-green mb-1">40% More Earnings</div>
            <div className="text-sm text-gray-400">₹9.2 lakhs additional</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-gokhush-green/20">
            <div className="text-xl font-bold text-gokhush-green mb-1">28% Traffic Increase</div>
            <div className="text-sm text-gray-400">45 partner businesses</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2,400+ Pilot Rides",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop&crop=center",
    category: "The Proof",
    description: "Real data from our Hyderabad pilot program",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Our pilot program validated the entire business model with real riders, drivers, and businesses in Hyderabad.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20 text-center">
            <div className="text-3xl font-bold text-gokhush-green">2,400+</div>
            <div className="text-sm text-gray-400 mt-1">Total Rides</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20 text-center">
            <div className="text-3xl font-bold text-gokhush-green">45</div>
            <div className="text-sm text-gray-400 mt-1">Business Partners</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20 text-center">
            <div className="text-3xl font-bold text-gokhush-green">94%</div>
            <div className="text-sm text-gray-400 mt-1">Ad Engagement</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20 text-center">
            <div className="text-3xl font-bold text-gokhush-green">₹15L+</div>
            <div className="text-sm text-gray-400 mt-1">Total Savings</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "94% Ad Engagement",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&fit=crop&crop=center",
    category: "The Metrics",
    description: "Unprecedented engagement rates for in-ride advertising",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Unlike traditional digital ads with 0.1-0.5% engagement, our captive audience model achieves 94% engagement during rides.
        </p>
        <div className="space-y-3">
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Traditional Digital Ads</span>
              <span className="text-red-400 font-bold">0.1-0.5%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-red-400 h-2 rounded-full" style={{width: '0.5%'}}></div>
            </div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Gokhush In-Ride Ads</span>
              <span className="text-gokhush-green font-bold">94%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gokhush-green h-2 rounded-full" style={{width: '94%'}}></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "25% Average Savings",
    thumbnail: "https://images.unsplash.com/photo-1556742400-b5a93c607d6f?w=600&h=600&fit=crop&crop=center",
    category: "For Riders",
    description: "Real money saved on every ride",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Pilot riders saved an average of 25% per ride compared to traditional platforms, plus earned credits for watching ads.
        </p>
        <div className="p-6 bg-gradient-to-br from-gokhush-green/10 to-gokhush-green/5 rounded-xl border border-gokhush-green/20">
          <div className="text-center">
            <div className="text-5xl font-bold text-gokhush-green mb-2">₹5.8L</div>
            <div className="text-gray-400">Total savings across 2,400+ rides</div>
            <div className="text-gokhush-green mt-4">≈ ₹240 saved per rider per month</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Drivers Earn 40% More",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=center",
    category: "For Drivers",
    description: "Keep 100% of your earnings, no commission cuts",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          By eliminating the 20-30% commission, our pilot drivers earned an average of 40% more than on traditional platforms.
        </p>
        <div className="p-6 bg-gradient-to-br from-gokhush-green/10 to-gokhush-green/5 rounded-xl border border-gokhush-green/20">
          <div className="text-center">
            <div className="text-5xl font-bold text-gokhush-green mb-2">₹9.2L</div>
            <div className="text-gray-400">Additional earnings for pilot drivers</div>
            <div className="text-gokhush-green mt-4">≈ ₹15,000+ extra per driver per month</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Hyderabad Pilot Success",
    thumbnail: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=600&fit=crop&crop=center",
    category: "The Validation",
    description: "6-month pilot program proves the model works",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Our comprehensive pilot in Hyderabad validated every aspect of the business model with real-world data.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
            <div className="w-2 h-2 bg-gokhush-green rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Duration: 6 months</div>
              <div className="text-xs text-gray-400">Comprehensive testing period</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
            <div className="w-2 h-2 bg-gokhush-green rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Coverage: 50+ routes</div>
              <div className="text-xs text-gray-400">Across Hyderabad metro area</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
            <div className="w-2 h-2 bg-gokhush-green rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Partners: 45 businesses</div>
              <div className="text-xs text-gray-400">Local restaurants, shops, services</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Location-Based Ads",
    thumbnail: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&h=600&fit=crop&crop=center",
    category: "The Technology",
    description: "Geofenced advertising that drives real foot traffic",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Our proprietary geofencing technology shows ads for businesses within 2km of your current location or destination.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="text-gokhush-green font-semibold mb-2">🎯 Smart Targeting</div>
            <div className="text-sm text-gray-400">Real-time location analysis shows relevant businesses</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="text-gokhush-green font-semibold mb-2">📍 2km Radius</div>
            <div className="text-sm text-gray-400">Perfect distance for post-ride visits</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="text-gokhush-green font-semibold mb-2">⏰ Time-Aware</div>
            <div className="text-sm text-gray-400">Breakfast spots in AM, dinner in PM</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="text-gokhush-green font-semibold mb-2">📊 Measurable ROI</div>
            <div className="text-sm text-gray-400">Track visits with unique promo codes</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "₹15-25 Credits Per Ride",
    thumbnail: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=600&fit=crop&crop=center",
    category: "Rewards",
    description: "Earn credits that automatically reduce your next fare",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Watch 3-5 short ads during your ride and earn ₹15-25 in credits that automatically apply to your next trip.
        </p>
        <div className="p-6 bg-gradient-to-br from-gokhush-green/10 to-gokhush-green/5 rounded-xl border border-gokhush-green/20">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">💰</div>
            <div className="text-2xl font-bold text-gokhush-green">Auto-Applied Credits</div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-2 bg-gokhush-gray/50 rounded">
              <span className="text-gray-400">Base Fare</span>
              <span className="text-white">₹100</span>
            </div>
            <div className="flex justify-between p-2 bg-gokhush-gray/50 rounded">
              <span className="text-gray-400">Ad Credits</span>
              <span className="text-gokhush-green">-₹20</span>
            </div>
            <div className="flex justify-between p-3 bg-gokhush-green/20 rounded font-bold">
              <span className="text-white">You Pay</span>
              <span className="text-gokhush-green">₹80</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Built by Ad Tech Experts",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=center",
    category: "The Team",
    description: "Deep expertise in transportation and advertising technology",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Our team combines 10+ years of experience in ride-hailing, ad tech, and user experience to create a platform that works for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-gokhush-green/20">
            <div className="font-semibold text-gokhush-green mb-3">Our Expertise</div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="text-gokhush-green mr-2">✓</span>
                <span>10+ years in transportation tech</span>
              </li>
              <li className="flex items-start">
                <span className="text-gokhush-green mr-2">✓</span>
                <span>Deep ad tech and targeting experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-gokhush-green mr-2">✓</span>
                <span>User experience specialists</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-xl border border-gokhush-green/20">
            <div className="font-semibold text-gokhush-green mb-3">Track Record</div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="text-gokhush-green mr-2">✓</span>
                <span>Former Ola & Uber executives</span>
              </li>
              <li className="flex items-start">
                <span className="text-gokhush-green mr-2">✓</span>
                <span>Built large-scale ad platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-gokhush-green mr-2">✓</span>
                <span>Understanding of all stakeholders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "340% ROI for Businesses",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center",
    category: "For Businesses",
    description: "Unprecedented returns on advertising investment",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Our pilot businesses achieved an average 340% ROI with measurable foot traffic increases and customer acquisition.
        </p>
        <div className="space-y-3">
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white">Ad Spend</span>
              <span className="text-gray-400">₹10,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-white">Revenue Generated</span>
              <span className="text-gokhush-green text-xl">₹34,000</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
              <div className="text-2xl font-bold text-gokhush-green">28%</div>
              <div className="text-xs text-gray-400 mt-1">Traffic Increase</div>
            </div>
            <div className="text-center p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
              <div className="text-2xl font-bold text-gokhush-green">94%</div>
              <div className="text-xs text-gray-400 mt-1">View Rate</div>
            </div>
            <div className="text-center p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
              <div className="text-2xl font-bold text-gokhush-green">15%</div>
              <div className="text-xs text-gray-400 mt-1">Conversion</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Safe and Verified Drivers",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=600&fit=crop&crop=center",
    category: "Safety First",
    description: "Comprehensive background checks and real-time monitoring",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          Safety is our top priority. Every driver undergoes thorough verification and all rides are monitored in real-time.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
            <div className="text-2xl">🛡️</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Background Verification</div>
              <div className="text-xs text-gray-400">Police clearance & document checks</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
            <div className="text-2xl">📱</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Real-Time Tracking</div>
              <div className="text-xs text-gray-400">GPS monitoring throughout the ride</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gokhush-gray rounded-lg border border-gokhush-green/20">
            <div className="text-2xl">🆘</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Emergency Support</div>
              <div className="text-xs text-gray-400">24/7 support with SOS button</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "The Future of Mobility",
    thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=600&fit=crop&crop=center",
    category: "Vision",
    description: "Building sustainable, equitable transportation for India",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-300">
          We&apos;re not just building a ride-hailing app. We&apos;re creating a sustainable ecosystem that benefits everyone in the mobility value chain.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="text-2xl mb-2">🌱</div>
            <div className="font-semibold text-gokhush-green mb-2">Sustainable Model</div>
            <div className="text-sm text-gray-400">No unsustainable discounts or driver exploitation</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="text-2xl mb-2">🤝</div>
            <div className="font-semibold text-gokhush-green mb-2">Fair for All</div>
            <div className="text-sm text-gray-400">Riders, drivers, and businesses all benefit</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold text-gokhush-green mb-2">Rapid Expansion</div>
            <div className="text-sm text-gray-400">Launching in 10 more cities in 2025</div>
          </div>
          <div className="p-4 bg-gokhush-gray rounded-xl border border-gokhush-green/20">
            <div className="text-2xl mb-2">🇮🇳</div>
            <div className="font-semibold text-gokhush-green mb-2">Made for India</div>
            <div className="text-sm text-gray-400">Built specifically for Indian market needs</div>
          </div>
        </div>
      </div>
    ),
  },
]


const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const ProductCard = ({
  product,
  translate,
  onClick,
}: {
  product: CardData;
  translate: MotionValue<number>;
  onClick: () => void;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      onClick={onClick}
      key={product.title}
      className="group/product h-80 w-[20rem] relative shrink-0 cursor-pointer"
    >
      <div className="block group-hover/product:shadow-2xl group-hover/product:shadow-gokhush-green/20 transition-shadow duration-300">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl transition-opacity duration-300"></div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-100 flex items-end p-6 pointer-events-none transition-opacity duration-300">
        <div>
          <div className="text-gokhush-green text-sm font-medium mb-1">{product.category}</div>
          <h2 className="text-white text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-300 text-sm mt-2">{product.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const HeroWithStory = () => {
  const ref = useRef(null)
  const [active, setActive] = useState<CardData | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const id = useId()
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-200, 100]),
    springConfig
  )

  const firstRow = cardData.slice(0, 5)
  const secondRow = cardData.slice(5, 10)
  const thirdRow = cardData.slice(10, 15)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(modalRef, () => setActive(null));

  return (
    <>
      {/* Expandable Modal */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm h-full w-full z-[100]"
            />
            <div className="fixed inset-0 grid place-items-center z-[101] overflow-y-auto py-4 md:py-8 px-2 md:px-4">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 md:top-4 md:right-4 items-center justify-center bg-white rounded-full h-8 w-8 md:h-10 md:w-10 z-[102] shadow-lg"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={modalRef}
                className="w-full max-w-4xl h-fit flex flex-col bg-gokhush-dark rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-gokhush-green/20 my-auto"
              >
                {/* Header with Image */}
                <div className="relative h-48 sm:h-56 md:h-80">
                  <Image
                    src={active.thumbnail}
                    alt={active.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gokhush-dark via-gokhush-dark/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-8">
                    <motion.div
                      layoutId={`category-${active.title}-${id}`}
                      className="text-gokhush-green text-xs sm:text-sm font-medium mb-1 md:mb-2"
                    >
                      {active.category}
                    </motion.div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-300 text-sm sm:text-base md:text-lg"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 md:p-8 max-h-[50vh] md:max-h-[60vh] overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {active.content()}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Parallax Section */}
      <section 
        id="hero"
        ref={ref}
        className="md:h-[300vh] h-auto overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#030303]"
      >
        {/* Simplified Hero Header - Centered */}
        <div className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6 py-20 md:py-0">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-white mb-8 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              India&apos;s First <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gokhush-green via-white to-gokhush-green">
                Zero-Commission
              </span>
              <br />
              Ride Platform
            </motion.h1>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
              className="hidden md:flex flex-col items-center text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <span className="text-base sm:text-lg mb-3">Scroll to explore</span>
                <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
            </motion.div>

            {/* Mobile: Show card grid instead of parallax */}
            <motion.div
              className="md:hidden mt-8 grid grid-cols-1 gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {cardData.slice(0, 6).map((product, idx) => (
                <motion.div
                  key={product.title}
                  onClick={() => setActive(product)}
                  className="relative h-40 rounded-xl overflow-hidden cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src={product.thumbnail}
                    height="400"
                    width="400"
                    className="object-cover object-center absolute h-full w-full inset-0"
                    alt={product.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <div className="text-gokhush-green text-xs font-medium mb-1">{product.category}</div>
                    <h3 className="text-white text-base font-semibold">{product.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Parallax Product Cards - Desktop Only */}
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="relative hidden md:block"
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 mb-16">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                onClick={() => setActive(product)}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-16 space-x-12">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                onClick={() => setActive(product)}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 mb-16">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                onClick={() => setActive(product)}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Gradient overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-20" />
      </section>
    </>
  )
}

export default HeroWithStory
