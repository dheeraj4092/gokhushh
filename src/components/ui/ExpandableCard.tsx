"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CardData {
  id: string;
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
  gradient: string;
}

interface ExpandableCardProps {
  readonly cards: CardData[];
}

export default function ExpandableCard({ cards }: ExpandableCardProps) {
  const [active, setActive] = useState<CardData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

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

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-2xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-brand-dark rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-800 mx-4 md:mx-0"
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-br ${active.gradient} p-6 md:p-8`}>
                <motion.div 
                  layoutId={`image-${active.title}-${id}`}
                  className="flex items-center space-x-3 md:space-x-4"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center">
                    <div className="text-white text-2xl md:text-3xl">🚗</div>
                  </div>
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white/80 text-base md:text-lg"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="prose prose-lg max-w-none prose-invert"
                >
                  {active.content()}
                </motion.div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-800 p-4 md:p-6 bg-brand-gray">
                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="inline-flex items-center justify-center w-full px-4 md:px-6 py-3 bg-gradient-to-r from-brand-green to-brand-green-dark text-brand-black font-semibold rounded-lg md:rounded-xl hover:from-brand-green-light hover:to-brand-green transition-all duration-300 transform hover:scale-105"
                >
                  {active.ctaText}
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="group relative bg-brand-dark rounded-xl md:rounded-2xl cursor-pointer overflow-hidden border border-gray-800 hover:border-brand-green transition-all duration-500 hover:shadow-xl hover:shadow-brand-green/20 hover:-translate-y-1 md:hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                {/* Icon */}
                <motion.div 
                  layoutId={`image-${card.title}-${id}`}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white text-xl md:text-2xl">🚗</div>
                </motion.div>

                {/* Text Content */}
                <div className="flex-1">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-white text-lg md:text-xl mb-2 md:mb-3 leading-tight group-hover:text-brand-green transition-colors duration-300"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6"
                  >
                    {card.description}
                  </motion.p>
                </div>

                {/* CTA Button */}
                <motion.div
                  layoutId={`button-${card.title}-${id}`}
                  className="mt-auto"
                >
                  <div className="inline-flex items-center text-xs md:text-sm font-semibold text-brand-green group-hover:text-brand-green-light transition-colors duration-300">
                    {card.ctaText}
                    <svg 
                      className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-green to-brand-green-light group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
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
