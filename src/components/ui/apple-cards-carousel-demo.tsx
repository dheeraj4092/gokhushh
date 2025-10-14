"use client";

import React from "react";
import { Carousel, CarouselContext } from "@/components/ui/apple-cards-carousel";
import { GlowCard } from "@/components/ui/spotlight-card";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";

// Define card interface
interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

// GlowCard version of the Card component
const GlowCardComponent = ({ card, index }: { card: CardData; index: number }) => {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { onCardClose } = React.useContext(CarouselContext);

  const handleClose = React.useCallback(() => {
    setOpen(false);
    // Auto-scroll to next card after closing
    onCardClose(index);
  }, [onCardClose, index]);

  const handleOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <p className="text-base font-medium text-black dark:text-white">
                {card.category}
              </p>
              <p className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">
                {card.title}
              </p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div onClick={handleOpen} className="cursor-pointer">
        <GlowCard 
          glowColor="green" 
          customSize={true}
          width="22rem"
          height="28rem"
        >
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          <div className="relative z-40 p-6 h-full flex flex-col justify-end">
            <p className="text-left font-sans text-sm font-medium text-white">
              {card.category}
            </p>
            <p className="mt-2 text-left font-sans text-lg font-semibold text-white">
              {card.title}
            </p>
          </div>
          <Image
            src={card.src}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        </GlowCard>
      </motion.div>
    </>
  );
};

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <GlowCardComponent key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
        Discover How{' '}
        <span className="text-gokhush-green">Gokhush</span> Works
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
                Why do ride-hailing platforms take 20-30% commission from drivers?
              </span>{" "}
              Drivers work hard but keep only 70% of earnings while riders pay premium prices. 
              Gokhush proved there&apos;s a better way - our Hyderabad pilot eliminated commissions 
              entirely while reducing ride costs by 25% on average.
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
                <h4 className="font-bold text-green-700 text-lg mb-2">With Gokhush</h4>
                <p className="text-green-600 text-2xl font-bold">₹100</p>
                <p className="text-sm text-gray-600">100% to driver + rider saves ₹20</p>
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
                What if ads could fund the entire platform instead of driver commissions?
              </span>{" "}
              Our Hyderabad pilot proved this works: 30 seconds of relevant ads per ride 
              eliminated platform fees while giving riders discounts. Result: 94% ad engagement 
              rate and everyone wins.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <h4 className="font-bold text-blue-700 text-lg mb-2">Riders Save Money</h4>
                <p className="text-blue-600 text-sm">Average 25% savings proven in pilot + earn ₹15-25 credits per ride</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <h4 className="font-bold text-green-700 text-lg mb-2">Drivers Earn 40% More</h4>
                <p className="text-green-600 text-sm">Keep 100% of fares - pilot drivers earned 40% more vs traditional platforms</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <h4 className="font-bold text-purple-700 text-lg mb-2">Businesses See 340% ROI</h4>
                <p className="text-purple-600 text-sm">Location-targeted ads with 94% engagement rate and measurable foot traffic</p>
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
                The magic happens during your ride - location-triggered ads that actually make sense.
              </span>{" "}
              As you travel, you see ads for nearby businesses you&apos;re literally moving toward. 
              3-5 relevant ads per ride earn you ₹15-25 credits while supporting local economy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold text-gray-700 text-lg mb-2">Hyper-Local Targeting</h4>
                <p className="text-gray-600 text-sm">Geofenced ads trigger when you&apos;re within 2km of businesses - see restaurants when you&apos;re hungry, gyms when you&apos;re exercising</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold text-gray-700 text-lg mb-2">Instant Credit Rewards</h4>
                <p className="text-gray-600 text-sm">Earn ₹15-25 credits per ride that auto-apply to your next trip - pilot users saved 25% on average</p>
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
                Everyone wins. Really. And we have the pilot data to prove it.
              </span>{" "}
              Over 2,400 rides in Hyderabad showed riders saved money, drivers earned 40% more, 
              and 45 local businesses saw 340% ROI. It&apos;s not theory - it works.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                <h4 className="font-semibold text-lg mb-2">Riders Saved 25%</h4>
                <p className="text-sm text-gray-600">₹5.8 lakhs total savings across pilot program</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl">
                <h4 className="font-semibold text-lg mb-2">Drivers Earned 40% More</h4>
                <p className="text-sm text-gray-600">₹9.2 lakhs additional earnings vs traditional platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h4 className="font-semibold text-lg mb-2">Businesses Saw 28% Traffic Increase</h4>
                <p className="text-sm text-gray-600">45 partners experienced measurable foot traffic growth</p>
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
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop&crop=center",
    content: <CommissionProblemContent />,
  },
  {
    category: "The Solution",
    title: "What if ads could make rides affordable for everyone?",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    content: <AdSupportedContent />,
  },
  {
    category: "The Experience",
    title: "The magic happens during your ride",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&crop=center",
    content: <InRideExperienceContent />,
  },
  {
    category: "The Result",
    title: "Everyone wins with our platform",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center",
    content: <TripleWinContent />,
  },
  {
    category: "Why Now",
    title: "Built by ad tech experts who understand what businesses need",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center",
    content: <WhyNowContent />,
  },
];
