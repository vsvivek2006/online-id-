import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2.5 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all duration-300 active:scale-95 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <div className="whatsapp-pulse">
        <MessageCircle className="w-5 h-5 fill-current" />
      </div>
      <span className="hidden sm:inline">Get Cricket ID</span>
    </a>
  );
}
