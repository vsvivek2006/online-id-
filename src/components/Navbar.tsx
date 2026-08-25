import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'ID Types', href: '#id-types' },
  { label: 'How to Get', href: '#how-to-get' },
  { label: 'IPL 2026', href: '#ipl-2026' },
  { label: 'Features', href: '#features' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#02160e]/90 backdrop-blur-xl border-b border-emerald-500/15 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-extrabold text-lg">C</span>
          </div>
          <div className="leading-tight">
            <span className="block text-white font-bold text-base sm:text-lg tracking-tight">
              Online Cricket ID
            </span>
            <span className="block text-emerald-400 text-[10px] sm:text-xs font-medium tracking-wider uppercase">
              Trusted Provider
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-2 text-sm text-gray-300 hover:text-emerald-400 font-medium rounded-lg hover:bg-emerald-500/5 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Get Cricket ID
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-emerald-500/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#02160e]/95 backdrop-blur-xl border-b border-emerald-500/15 animate-fade-in">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-emerald-500 text-white font-semibold rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                Get Cricket ID on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
