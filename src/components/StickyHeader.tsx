import React, { useState, useEffect } from 'react';
import { MessageCircle, Headphones, ArrowUp } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

interface StickyHeaderProps {
  onNavigate: (path: string) => void;
  currentPath?: string;
}

const TOP_NAV_LINKS = [
  { label: 'All Platforms', path: '/all-cricket-id' },
  { label: 'IPL 2026', path: '/ipl-cricket-id', badge: 'HOT' },
  { label: 'Laser247', path: '/laser247-cricket-id' },
  { label: 'Lotus365', path: '/lotus365-cricket-id' },
  { label: 'Betbhai9', path: '/betbhai9-cricket-id' },
  { label: 'Guides & Tips', path: '/guides' },
  { label: '24/7 Support', path: '/contact' },
];

const MOBILE_PILLS = [
  { label: 'All Platforms', path: '/all-cricket-id', icon: '⭐' },
  { label: 'IPL 2026', path: '/ipl-cricket-id', icon: '🔥', highlight: true },
  { label: 'Laser247', path: '/laser247-cricket-id' },
  { label: 'Lotus365', path: '/lotus365-cricket-id' },
  { label: 'Betbhai9', path: '/betbhai9-cricket-id' },
  { label: 'Guides', path: '/guides', icon: '📚' },
  { label: 'Support', path: '/contact', icon: '🎧' },
  { label: 'Free Demo', path: '/demo-cricket-id', icon: '⚡' },
];

export default function StickyHeader({
  onNavigate,
  currentPath = '/',
}: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleNav(e, '/')}
            className="flex items-center gap-2.5 text-left py-1 group min-h-[48px] focus:outline-none shrink-0"
            aria-label="Online Cricket ID Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 aspect-square rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
              C
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-900 font-extrabold text-sm sm:text-base tracking-tight group-hover:text-emerald-700 transition-colors">
                  Online Cricket ID
                </span>
              </div>
              <span className="text-emerald-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block">
                Official Provider Network
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on lg+) */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
            {TOP_NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNav(e, link.path)}
                  className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 font-extrabold'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-100/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-500 text-white leading-none">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Desktop Scroll-to-Top, Support & WhatsApp */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop Scroll To Top Button in Top Right */}
            {isScrolled && (
              <button
                type="button"
                onClick={scrollToTop}
                className="hidden lg:inline-flex items-center gap-1.5 min-h-[40px] px-3 py-2 rounded-xl text-xs font-extrabold text-slate-700 hover:text-emerald-700 bg-slate-100/90 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all active:scale-95 shadow-2xs group animate-fade-in"
                aria-label="Scroll to top of page"
                title="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5 text-emerald-600 group-hover:-translate-y-0.5 transition-transform" />
                <span>Top</span>
              </button>
            )}

            <a
              href="/contact"
              onClick={(e) => handleNav(e, '/contact')}
              className="hidden md:inline-flex lg:hidden items-center gap-1 min-h-[40px] px-3 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
            >
              <Headphones className="w-4 h-4 text-emerald-600" />
              <span>Support</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all active:scale-95 shrink-0"
              aria-label="Connect on WhatsApp 24/7"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span className="tracking-tight">WhatsApp</span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] bg-emerald-700 text-emerald-100 font-bold ml-0.5">
                24/7 Active
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Horizontal Navigation Strip (Always visible at top, NO side drawer) */}
      <div className="lg:hidden border-t border-slate-100 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <nav
            aria-label="Quick Navigation"
            className="flex items-center gap-1.5 py-2 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {MOBILE_PILLS.map((pill) => {
              const isActive = currentPath === pill.path;
              return (
                <a
                  key={pill.path}
                  href={pill.path}
                  onClick={(e) => handleNav(e, pill.path)}
                  className={`shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[36px] active:scale-95 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-2xs font-bold'
                      : pill.highlight
                      ? 'bg-amber-50 text-amber-900 border border-amber-200/90 font-bold'
                      : 'bg-white text-slate-700 hover:text-emerald-700 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  {pill.icon && <span>{pill.icon}</span>}
                  <span>{pill.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
