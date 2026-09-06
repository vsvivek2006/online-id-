import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 250px
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="hidden md:flex fixed top-20 right-5 lg:top-24 lg:right-8 z-50 items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md text-emerald-800 border-2 border-emerald-500 shadow-lg shadow-emerald-900/10 hover:bg-emerald-50 hover:border-emerald-600 transition-colors font-extrabold text-xs cursor-pointer group"
          aria-label="Scroll to top of page"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-emerald-600 group-hover:-translate-y-0.5 transition-transform" />
          <span className="font-bold tracking-tight">Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
