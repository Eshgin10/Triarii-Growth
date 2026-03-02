import ScrollReveal from './ScrollReveal';
import useCountUp from '@/hooks/useCountUp';
import brokenColumnImg from '@/assets/cracked-column.png';

const StatCard = ({ label, value, valueEnd, prefix, suffix, detail, extra }: {
  label: string;
  value: string;
  valueEnd: number;
  prefix?: string;
  suffix?: string;
  detail: string;
  extra?: string;
}) => {
  const { ref, display } = useCountUp(valueEnd, 2000, prefix, suffix);

  return (
    <div ref={ref} className="border border-primary/30 bg-card p-6 relative">
      <p className="gold-label mb-4">{label}</p>
      <p className="font-bebas text-5xl text-primary mb-2">{display}</p>
      <p className="font-dm text-sm text-muted-foreground">{detail}</p>
      {extra && <p className="font-dm text-xs text-muted-foreground mt-1">{extra}</p>}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background relative">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="gold-label text-center mb-4">COMMAND CENTER</p>
          <h2 className="font-bebas text-5xl md:text-6xl text-center text-foreground mb-16">
            THE NUMBERS SPEAK
          </h2>
        </ScrollReveal>

        {/* Stats grid with center column illustration */}
        <div className="relative">
          {/* Center column illumination / image */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10 w-[280px] xl:w-[350px]">
            <img
              src={brokenColumnImg}
              alt="Cracked Roman Column"
              className="w-full h-auto drop-shadow-[0_0_35px_rgba(255,191,0,0.4)]"
            />
            <div className="w-[180px] h-3 gold-glow mt-4 opacity-40 blur-md" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-[300px] xl:gap-x-[360px]">
            <ScrollReveal delay={0}>
              <StatCard
                label="REVENUE GROWTH"
                value="€2.4M"
                valueEnd={2400000}
                prefix="€"
                detail="+127% monthly net revenue increase"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <StatCard
                label="PERFORMANCE"
                value="4.8x"
                valueEnd={48}
                suffix="x"
                detail="+0.9x ROAS increase"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <StatCard
                label="CUSTOMER ACQUISITION"
                value="+1,200"
                valueEnd={1200}
                prefix="+"
                detail="High-quality leads via LinkedIn this month"
                extra="LinkedIn · Meta · Google · TikTok · Reddit"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <StatCard
                label="LIFETIME VALUE"
                value="+30%"
                valueEnd={30}
                prefix="+"
                suffix="%"
                detail="94% more response on second message"
                extra="AOV +28%"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
