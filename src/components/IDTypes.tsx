import { ArrowRight, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

const idTypes = [
  { type: 'Exchange ID', bestFor: 'Experienced bettors wanting competitive odds', minDeposit: '₹100', featured: false },
  { type: 'Master ID', bestFor: 'Beginners who want a guided start', minDeposit: '₹100', featured: false },
  { type: 'Multi-Exchange ID', bestFor: 'Users who want variety across exchanges', minDeposit: '₹100-500', featured: false },
  { type: 'Sportsbook ID', bestFor: 'Casual bettors who prefer simplicity', minDeposit: '₹100', featured: false },
  { type: 'IPL Cricket ID', bestFor: 'IPL specialists with live markets', minDeposit: '₹100', featured: true },
];

export default function IDTypes() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="id-types" className="py-20 section-gradient">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Section 3
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Types of <span className="text-emerald-400">Cricket IDs</span> We Offer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We provide All Cricket IDs to suit every type of bettor — from beginners to seasoned pros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {idTypes.map((id) => (
            <div
              key={id.type}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] ${
                id.featured
                  ? 'gradient-border border border-emerald-500/40 bg-emerald-500/5'
                  : 'glass-card'
              }`}
            >
              {id.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-3">{id.type}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{id.bestFor}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">Min Deposit</span>
                  <div className="text-emerald-400 font-bold text-lg">{id.minDeposit}</div>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-sm font-semibold group"
                >
                  Get Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-300 mb-4">
            Get your <strong className="text-emerald-400">IPL Cricket ID</strong> now and enjoy exclusive IPL 2026 betting markets with live odds and real-time updates.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Get Your IPL Cricket ID
          </a>
        </div>
      </div>
    </section>
  );
}
