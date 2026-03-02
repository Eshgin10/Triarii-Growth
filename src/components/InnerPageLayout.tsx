import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

interface InnerPageProps {
  label: string;
  title: string;
  subtitle: string;
}

const InnerPageLayout = ({ label, title, subtitle }: InnerPageProps) => (
  <main className="pt-32 pb-24 px-6">
    <div className="max-w-[900px] mx-auto text-center">
      <ScrollReveal>
        <p className="gold-label mb-6">{label}</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="font-cinzel-decorative text-4xl md:text-6xl text-foreground mb-6">{title}</h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="font-dm text-foreground/60 max-w-[560px] mx-auto mb-12 leading-relaxed">{subtitle}</p>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <Link
          to="/book-demo"
          className="inline-block font-dm text-sm bg-primary text-primary-foreground px-8 py-3 hover:bg-secondary hover:text-secondary-foreground transition-colors"
        >
          Book a demo →
        </Link>
      </ScrollReveal>
    </div>
  </main>
);

export default InnerPageLayout;
