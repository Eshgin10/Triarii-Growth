import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Growth Strategies', path: '/growth-strategies' },
  { label: 'Triarii Funnel', path: '/triarii-funnel' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Third Eye / Audit', path: '/third-eye-audit' },
  { label: 'About Us', path: '/about-us' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-[#030100] shadow-md">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-cinzel-decorative text-primary text-lg tracking-wider">TRIARII</span>
            <span className="font-cinzel-regular text-primary text-[8px] tracking-[5px] uppercase opacity-70">GROWTH</span>
          </Link>

          {/* Center nav - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-dm text-sm transition-colors duration-200 ${location.pathname === link.path ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA - desktop */}
          <Link
            to="/book-demo"
            className="hidden lg:block font-dm text-sm text-primary border border-primary/50 px-5 py-2 transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            Book a demo →
          </Link>

          {/* Hamburger - mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 border border-primary/50 flex flex-col items-center justify-center relative"
          >
            <span className={`block w-5 h-px bg-primary absolute transition-transform duration-200 ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`block w-5 h-px bg-primary absolute transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-primary absolute transition-transform duration-200 ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 pt-16"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="font-bebas text-3xl text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book-demo"
              onClick={() => setMobileOpen(false)}
              className="font-dm text-primary border border-primary/50 px-8 py-3 mt-4 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Book a demo →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
