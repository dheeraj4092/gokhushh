"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
        Discover the Future of{' '}
        <span className="text-brand-green">Ride-Hailing</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const CommissionProblemContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"commission-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Traditional platforms take 20-30% commission from every ride.
              </span>{" "}
              This means drivers earn less while riders pay more. Our revolutionary 
              ad-supported model changes everything by eliminating commissions 
              and making rides affordable for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-red-50 rounded-2xl">
                <h4 className="font-bold text-red-700 text-lg mb-2">Driver Earnings</h4>
                <p className="text-red-600 text-2xl font-bold">₹70-80</p>
                <p className="text-sm text-gray-600">per ride</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-2xl">
                <h4 className="font-bold text-red-700 text-lg mb-2">Platform Commission</h4>
                <p className="text-red-600 text-2xl font-bold">₹20-30</p>
                <p className="text-sm text-gray-600">per ride</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <h4 className="font-bold text-green-700 text-lg mb-2">With RideHail</h4>
                <p className="text-green-600 text-2xl font-bold">₹100</p>
                <p className="text-sm text-gray-600">100% to driver</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const AdSupportedContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"ad-supported-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Instead of taking money from drivers, we show relevant ads during your ride.
              </span>{" "}
              This creates a win-win-win situation where riders save money, drivers 
              keep 100% of their earnings, and businesses reach customers at the perfect moment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <h4 className="font-bold text-blue-700 text-lg mb-2">For Riders</h4>
                <p className="text-blue-600 text-sm">Save up to 50% on rides by watching 30-second ads</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <h4 className="font-bold text-green-700 text-lg mb-2">For Drivers</h4>
                <p className="text-green-600 text-sm">Keep 100% of your earnings, no commission cuts</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <h4 className="font-bold text-purple-700 text-lg mb-2">For Businesses</h4>
                <p className="text-purple-600 text-sm">Reach customers at the perfect moment during their journey</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const InRideExperienceContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"in-ride-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                During your ride, you'll see carefully curated ads for local businesses.
              </span>{" "}
              These ads are relevant to your location and preferences, creating value 
              for everyone while making transportation more affordable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold text-gray-700 text-lg mb-2">Smart Targeting</h4>
                <p className="text-gray-600 text-sm">Ads are shown based on your location, time of day, and preferences</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold text-gray-700 text-lg mb-2">Earn Credits</h4>
                <p className="text-gray-600 text-sm">Watch ads to earn credits for future rides</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const TripleWinContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"triple-win-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Our platform creates value for all three stakeholders.
              </span>{" "}
              Riders save money, drivers earn more, and local businesses get 
              targeted advertising to potential customers at the perfect moment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                <h4 className="font-semibold text-lg mb-2">Riders Save Money</h4>
                <p className="text-sm text-gray-600">Up to 50% savings on every ride</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl">
                <h4 className="font-semibold text-lg mb-2">Drivers Earn More</h4>
                <p className="text-sm text-gray-600">Keep 100% of your earnings</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h4 className="font-semibold text-lg mb-2">Businesses Grow</h4>
                <p className="text-sm text-gray-600">Reach customers at the perfect moment</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const WhyNowContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"why-now-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Built by ad tech experts who understand what businesses need.
              </span>{" "}
              Our team combines deep expertise in ride-hailing, advertising technology, 
              and user experience to create a platform that works for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <h4 className="font-bold text-lg mb-4">Our Expertise:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">10+ years in transportation tech</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Deep ad tech and targeting experience</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
                <h4 className="font-bold text-lg mb-4">Proven Track Record:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Former Ola & Uber executives</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Understanding of driver and rider needs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "The Problem",
    title: "Why do rides cost so much... and drivers earn so little?",
    //src: "https://unsplash.com/photos/mature-businessman-with-bag-standing-on-the-street-in-city-of-prague-raising-his-hand-to-hail-a-taxi-cab-xx66QGzEJiA",
    content: <CommissionProblemContent />,
  },
  {
    category: "The Solution",
    title: "What if ads could make rides affordable for everyone?",
    //src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    content: <AdSupportedContent />,
  },
  {
    category: "The Experience",
    title: "The magic happens during your ride",
    //src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&h=300&fit=crop&crop=center",
    content: <InRideExperienceContent />,
  },
  {
    category: "The Result",
    title: "Everyone wins with our platform",
    //src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center",
    content: <TripleWinContent />,
  },
  {
    category: "Why Now",
    title: "Built by ad tech experts who understand what businesses need",
    //src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?w=500&h=300&fit=crop&crop=center",
    content: <WhyNowContent />,
  },
];
