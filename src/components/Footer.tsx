import { Link } from 'react-router-dom';
import soldierImg from '@/assets/roman-soldier.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/30 bg-background">
      <div className="relative pt-20 pb-2">
        {/* Footer Content */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
            {/* Column 1: Intro (Spans 2 columns to give it enough room) */}
            <div className="flex flex-col items-start pr-4 sm:col-span-2 lg:col-span-2">
              <h3 className="font-cinzel-regular text-primary text-sm tracking-wider mb-3">TRIARII GROWTH</h3>
              <p className="font-dm text-muted-foreground text-sm leading-relaxed mb-6 max-w-[300px]">
                Elite growth operators who measure, execute, and win.
              </p>
              <p className="font-dm text-foreground text-[15px] mb-2">Ready to accelerate your growth?</p>
              <p className="font-dm text-muted-foreground text-sm max-w-[300px]">Book a demo and see how we can help you win.</p>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-4 pt-2">
              <p className="gold-label !text-[10px] !opacity-100 mb-4 tracking-widest">Company</p>
              <Link to="/about-us" className="block text-muted-foreground font-dm text-sm hover:text-primary transition-colors">About Us</Link>
              <Link to="/third-eye-audit" className="block text-muted-foreground font-dm text-sm hover:text-primary transition-colors">Audit</Link>
              <Link to="/growth-strategies" className="block text-muted-foreground font-dm text-sm hover:text-primary transition-colors">Growth Strategies</Link>
              <Link to="/success-stories" className="block text-muted-foreground font-dm text-sm hover:text-primary transition-colors">Success Stories</Link>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4 pt-2">
              <p className="gold-label !text-[10px] !opacity-100 mb-4 tracking-widest">Resources</p>
              <span className="block text-muted-foreground font-dm text-sm cursor-pointer hover:text-primary transition-colors">Resources</span>
              <span className="block text-muted-foreground font-dm text-sm cursor-pointer hover:text-primary transition-colors">Blog</span>
              <span className="block text-muted-foreground font-dm text-sm cursor-pointer hover:text-primary transition-colors">Case Studies</span>
              <span className="block text-muted-foreground font-dm text-sm cursor-pointer hover:text-primary transition-colors">FAQ</span>
            </div>

            {/* Column 4: Legal */}
            <div className="space-y-4 pt-2">
              <p className="gold-label !text-[10px] !opacity-100 mb-4 tracking-widest">Legal</p>
              <span className="block text-muted-foreground font-dm text-sm cursor-pointer hover:text-primary transition-colors">Privacy Policy</span>
              <span className="block text-muted-foreground font-dm text-sm cursor-pointer hover:text-primary transition-colors">Terms of Service</span>
              <span className="block text-muted-foreground font-dm text-sm cursor-pointer hover:text-primary transition-colors">Cookie Policy</span>
            </div>
          </div>
        </div>

        {/* Central visual: Text behind, soldier in front */}
        <div className="relative mx-auto pointer-events-none flex justify-center items-center h-[350px] sm:h-[500px] md:h-[700px] mb-4 mt-0">

          {/* Background Text (Behind Soldier, Above Grain) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none z-[10000]">
            <span className="font-cinzel-decorative text-[16vw] sm:text-[14vw] md:text-[18vw] text-primary opacity-20 drop-shadow-md leading-[0.8] text-center w-full">
              TRIARII<br />GROWTH
            </span>
          </div>

          {/* Soldier Image (In front of Text, Above Grain) */}
          <div className="relative z-[10001] h-full flex items-end">
            <img src={soldierImg} alt="Triarii Soldier" className="h-[350px] sm:h-[500px] md:h-[700px] object-contain opacity-80" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 flex justify-center mt-2 mb-4">
          <p className="font-dm text-xs text-muted-foreground italic">"Res ad triarios venit" — When it comes to the Triarii</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
