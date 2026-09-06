import { MessageCircle, ShieldCheck, ArrowRight, Lock, Clock, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { TRUST_BADGES } from '@/data/platformData';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'support':
        return <Headphones className="w-5 h-5 text-emerald-600 shrink-0" />;
      case 'withdrawal':
        return <Clock className="w-5 h-5 text-amber-500 shrink-0" />;
      case 'security':
        return <Lock className="w-5 h-5 text-emerald-600 shrink-0" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />;
    }
  };

  return (
    <section className="bg-white border-b border-slate-200 py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">

          {/* Top Trust Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold shadow-2xs"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Verified Exchange Partner 2026</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">₹100 Min Deposit</span>
          </motion.div>

          {/* Semantic H1: Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight"
          >
            India’s Official Verified <br className="hidden sm:inline" />
            <span className="text-emerald-700">Online Cricket ID Platform</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Get instant access to Laser247, Lotus365, Betbhai9, and Silver Exchange. Enjoy the best match odds, zero fees on withdrawals, and instant 2-minute activation on WhatsApp.
          </motion.p>

          {/* CTAs with 48px Minimum Touch Target */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Get Your ID on WhatsApp (2 Mins)</span>
            </motion.a>

            <motion.button
              type="button"
              onClick={onExploreClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border border-slate-200 hover:border-slate-300 transition-all shadow-2xs"
            >
              <span>Explore 8+ Verified Platforms</span>
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </motion.button>
          </motion.div>

          {/* Immediate Trust Badges (YMYL Requirement: 24/7 Support, 5-Min Withdrawals, Secure Gateways) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-left">
            {TRUST_BADGES.map((b) => (
              <div
                key={b.id}
                className="bg-slate-50/80 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 flex items-center gap-3 shadow-2xs hover:border-emerald-300 transition-all"
              >
                {getBadgeIcon(b.iconName)}
                <div>
                  <p className="text-slate-900 font-extrabold text-xs sm:text-sm leading-tight">
                    {b.title}
                  </p>
                  <p className="text-slate-500 text-[11px] font-medium leading-tight mt-0.5">
                    {b.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
