import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import ctaVideo from '@/assets/CTA-Video.mp4';

const CTABanner = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-background border-y border-primary/30 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] md:min-h-[600px]">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        >
          <source src={ctaVideo} type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/50 z-10" />
        {/* Dark vignette gradient for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
      </div>

      <div className="max-w-[900px] mx-auto text-center relative z-20">
        <ScrollReveal>
          <h2 className="font-cinzel-decorative text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-[1] mb-6 drop-shadow-md">
            ELITE GROWTH OPERATORS<br />
            WHO MEASURE,<br />
            EXECUTE, AND WIN.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-dm italic text-primary/80 text-lg md:text-xl mb-12 drop-shadow">
            When it comes down to the Triarii, victory is inevitable.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            to="/book-demo"
            className="inline-block font-dm text-sm md:text-lg font-bold uppercase tracking-wide bg-primary text-primary-foreground px-8 md:px-12 py-4 md:py-5 hover:bg-secondary hover:text-secondary-foreground transition-all shadow-[0_0_30px_rgba(255,191,0,0.6)]"
          >
            Book a demo →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
