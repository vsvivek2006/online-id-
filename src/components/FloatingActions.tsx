import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Floating quick actions"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none select-none"
    >
      {/* Scroll to Top button: appears just above 'Get Cricket ID' when scrolled down, and disappears at the top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-to-top"
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="pointer-events-auto flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md text-emerald-800 border-2 border-emerald-500/90 shadow-lg shadow-slate-900/10 hover:bg-emerald-50 hover:border-emerald-600 transition-colors font-extrabold text-xs cursor-pointer group"
            aria-label="Scroll to top of page"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-emerald-600 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            <span className="font-bold tracking-tight">Top</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Get Cricket ID (WhatsApp): ALWAYS VISIBLE in bottom-right */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-lg shadow-emerald-600/35 hover:shadow-xl hover:shadow-emerald-600/45 transition-all cursor-pointer group"
        aria-label="Get Cricket ID on WhatsApp 24/7"
        title="Get Cricket ID on WhatsApp"
      >
        <div className="whatsapp-pulse shrink-0">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
        </div>
        <span className="font-extrabold tracking-tight">Get Cricket ID</span>
      </motion.a>
    </aside>
  );
}
