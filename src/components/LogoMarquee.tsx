import { useState } from 'react';
import rigaLogo from '@/assets/logo-riga.png';
import vilniusLogo from '@/assets/logo-vilnius.png';
import nordenLogo from '@/assets/logo-norden.png';
import openaiLogo from '@/assets/logo-openai.png';
import wanLogo from '@/assets/logo-wan.png';

const logos = [
  { name: 'Riga Technical University', url: rigaLogo },
  { name: 'Vilnius Tech', url: vilniusLogo },
  { name: 'OpenAI', url: openaiLogo },
  { name: 'Google', url: 'https://cdn.simpleicons.org/google' },
  { name: 'Meta', url: 'https://cdn.simpleicons.org/meta' },
  { name: 'TikTok', url: 'https://cdn.simpleicons.org/tiktok' },
  { name: 'Shopify', url: 'https://cdn.simpleicons.org/shopify' },
  { name: 'Hotjar', url: 'https://cdn.simpleicons.org/hotjar' },
  { name: 'Wan', url: wanLogo }
];

const LogoItem = ({ item }: { item: { name: string; url: string } }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className="mx-6 md:mx-12 shrink-0 font-cinzel-regular text-xl text-primary-foreground font-bold select-none flex items-center h-10">
        {item.name}
      </span>
    );
  }

  return (
    <div className="mx-6 md:mx-12 shrink-0 flex items-center justify-center select-none">
      <img
        src={item.url}
        alt={item.name}
        className="h-12 md:h-16 w-auto object-contain pointer-events-none brightness-0"
        onError={() => setImgError(true)}
      />
    </div>
  );
};

const LogoMarquee = () => {
  return (
    <section className="border-y border-primary/30 py-12 bg-primary overflow-hidden relative">
      <p className="font-cinzel text-[10px] tracking-[5px] uppercase text-primary-foreground/70 font-bold text-center mb-8">TRUSTED BY ELITE BRANDS</p>
      <div className="relative flex overflow-hidden">
        {/* Gradients to fade edges cleanly */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap items-center w-max">
          {[...logos, ...logos, ...logos, ...logos].map((item, i) => (
            <LogoItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
