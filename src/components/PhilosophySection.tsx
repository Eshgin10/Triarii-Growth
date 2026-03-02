import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import colosseumImg from '@/assets/colesium3.png';

const PhilosophySection = () => {
  const paragraphText = "Our approach combines strategic growth, performance marketing, CRO and data analytics by connecting every stage of your funnel into a unified framework. We optimize your growth process by integrating strategy, performance, and analytics, while our refined attribution strategy ensures every channel's impact is measured and every decision is backed by accurate data.";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.04 * i },
    }),
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
      y: 10,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="pt-14 pb-8 md:pt-16 md:pb-12 px-4 md:px-6 bg-background relative overflow-hidden flex flex-col items-center">

      {/* Epic Background Text - Part of normal flow to dictate height properly, overlapping slightly */}
      <div className="w-full relative z-0 flex justify-center mb-16 md:mb-20 lg:mb-24 pointer-events-none text-center">
        <h2 className="font-cinzel-decorative text-[4vw] sm:text-[4.5vw] md:text-3xl lg:text-4xl font-bold text-primary leading-[1.1] tracking-widest uppercase px-2 md:px-4 min-w-[320px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] max-w-[1400px]">
          SO WHAT HAPPENS<br />
          WHEN IT ALL COMES<br />
          DOWN TO THE TRIARII?
        </h2>
      </div>

      <div className="max-w-[1300px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column: Epic Colosseum */}
          <div className="relative w-full flex justify-center items-center max-h-[400px] md:max-h-[450px]">
            {/* Cinematic background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

            {/* Colosseum image — z-10 */}
            <div className="relative z-10 w-full max-w-[600px] lg:max-w-[700px] flex justify-center">
              <img
                src={colosseumImg}
                alt="Roman Colosseum"
                className="w-full h-auto object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* Right Column: Content overlay */}
          <div className="relative z-30 flex flex-col items-start justify-center px-2 md:px-4">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 md:mb-6">
                <div className="h-px w-12 bg-primary/60 hidden sm:block"></div>
                <h2 className="font-cinzel text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[3px] md:tracking-[5px] uppercase font-bold drop-shadow-md">
                  Our Approach
                </h2>
              </div>
            </ScrollReveal>

            {/* Animates consistently on scroll - word by word */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap justify-start font-dm text-xs sm:text-sm md:text-base lg:text-[17px] text-foreground/90 mb-4 md:mb-6 leading-[1.7] md:leading-[1.8] font-medium"
            >
              {paragraphText.split(" ").map((word, index) => (
                <motion.span
                  variants={child}
                  key={index}
                  className="mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <ScrollReveal delay={0.2}>
              <Link
                to="/book-demo"
                className="inline-block font-dm text-sm font-bold uppercase tracking-widest border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Book a demo
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
