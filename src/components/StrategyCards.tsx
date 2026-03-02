import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { Swords, Target, Shield, Castle } from 'lucide-react';

const strategies = [
  {
    num: '01',
    label: 'SALES',
    icon: Swords,
    body: 'We deliver data-driven, full-funnel sales strategies targeting the right audience, driving conversions, and building sustainable growth.',
    bullets: ['Full-funnel mapping', 'ICP & messaging', 'Go-to-market sequencing'],
  },
  {
    num: '02',
    label: 'PERFORMANCE MARKETING',
    icon: Target,
    body: 'Data-driven performance marketing across Meta, Google, and TikTok. Creative testing, audience modelling, and budget allocation.',
    bullets: ['Meta, Google, TikTok', 'Creative testing', 'Budget allocation'],
  },
  {
    num: '03',
    label: 'CONVERSION RATE OPTIMIZATION',
    icon: Shield,
    body: 'Research-led CRO to remove friction and lift CVR: analytics, UX audits, heatmaps, and A/B testing that improve checkout flow, increase AOV, grow LTV.',
    bullets: ['Analytics & UX audits', 'Heatmaps & A/B tests', 'AOV & LTV uplift'],
  },
  {
    num: '04',
    label: 'RETENTION STRATEGIES',
    icon: Castle,
    body: 'We increase existing customers loyalty through smart retention, upsell, and referral tactics that compound growth over time.',
    bullets: ['Upsell strategies', 'Churn analysis', 'Referral systems'],
  },
];

const StrategyCards = () => {
  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-24 px-4 md:px-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="gold-label text-center mb-4">GROWTH STRATEGIES</p>
          <p className="font-dm text-muted-foreground text-center max-w-[600px] mx-auto mb-16">
            Practical systems that connect strategy, performance, CRO and analytics into compounding growth.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.num} delay={i * 0.1} className="h-full">
                <div className="border border-primary/30 bg-card p-6 md:p-8 lg:p-10 group hover:border-primary transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col"
                  style={{ transition: 'transform 0.3s, border-color 0.3s, background-color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'hsla(348,72%,14%,0.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                >
                  {/* Faint background icon for premium effect */}
                  <Icon className="absolute -right-8 -top-8 w-40 h-40 text-primary opacity-5 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <p className="font-cinzel text-primary text-xl sm:text-2xl md:text-3xl font-bold tracking-widest mb-1 drop-shadow-sm">
                        <span className="opacity-60">{s.num}</span> — {s.label}
                      </p>
                    </div>
                    <div className="text-primary p-3 bg-primary/10 rounded border border-primary/20 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                      <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="font-dm text-foreground/90 text-base md:text-lg leading-relaxed mb-8 font-medium relative z-10">
                    {s.body}
                  </p>

                  <div className="space-y-3 mb-8 relative z-10">
                    {s.bullets.map((b) => (
                      <p key={b} className="diamond-bullet font-dm text-[15px] font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {b}
                      </p>
                    ))}
                  </div>

                  <div className="mt-auto relative z-10 pt-4">
                    <Link
                      to="/growth-strategies"
                      className="font-dm text-base text-primary inline-flex items-center gap-2 group/link font-bold uppercase tracking-wide"
                    >
                      Learn more
                      <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-2">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategyCards;
