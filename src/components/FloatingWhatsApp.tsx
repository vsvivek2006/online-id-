import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2.5 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-colors cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          <div className="whatsapp-pulse">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <span className="hidden sm:inline">Get Cricket ID</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
