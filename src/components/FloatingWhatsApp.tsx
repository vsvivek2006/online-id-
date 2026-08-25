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
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-full shadow-2xl shadow-green-500/40 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <div className="whatsapp-pulse">
        <MessageCircle className="w-6 h-6" />
      </div>
      <span className="hidden sm:inline">Get Cricket ID</span>
    </a>
  );
}
