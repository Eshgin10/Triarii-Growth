import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import CheckerboardDivider from '@/components/CheckerboardDivider';
import LogoMarquee from '@/components/LogoMarquee';
import StatsSection from '@/components/StatsSection';
import PhilosophySection from '@/components/PhilosophySection';
import StrategyCards from '@/components/StrategyCards';
import CTABanner from '@/components/CTABanner';
import heroVideo from '@/assets/hero-video.mp4';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const containerDelayed = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1.0 } /* Delay for bottom-right text */
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-6 pt-28 md:pt-40 pb-24 md:pb-20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 pointer-events-none"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/40 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full min-h-[40vh] md:min-h-[50vh]">

        {/* Main Headline */}
        <div className="max-w-full md:max-w-[680px] text-center md:text-right pt-12 md:pt-0 md:absolute md:top-0 md:right-0">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-cinzel-decorative text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-4 md:mb-12 shadow-[#000000] drop-shadow-lg flex flex-wrap justify-center md:justify-end"
          >
            {"TRADITIONAL AGENCIES ARE DEAD.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={child}
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Second Headline */}
        <div className="relative mt-2 md:mt-0 md:absolute md:bottom-0 md:right-0 max-w-full md:max-w-[680px] text-center md:text-right">
          <motion.h2
            variants={containerDelayed}
            initial="hidden"
            animate="visible"
            className="font-cinzel-decorative text-[8vw] sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] shadow-[#000000] drop-shadow-[0_0_20px_rgba(255,191,0,0.5)] glow-text flex flex-wrap justify-center md:justify-end"
          >
            {"WE ARE WHAT COMES NEXT.".split(" ").map((word, i) => (
              <motion.span
                key={`second-${i}`}
                variants={child}
                className="ml-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

      </div>
    </section>
  );
};

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <CheckerboardDivider />
      <LogoMarquee />
      <StatsSection />
      <CheckerboardDivider />
      <PhilosophySection />
      <StrategyCards />
      <CheckerboardDivider />
      <CTABanner />
    </main>
  );
};

export default Index;
