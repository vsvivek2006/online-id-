import { TrendingUp, Smartphone, Activity, Gift, Headphones, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

const highlights = [
  { icon: TrendingUp, title: 'Live IPL Betting Markets', desc: 'Match winner, top batsman, session betting & more — all in real time.' },
  { icon: Smartphone, title: 'Mobile-Friendly Platform', desc: 'Bet anytime, anywhere with our fully responsive mobile platform.' },
  { icon: Activity, title: 'Real-Time Odds', desc: 'Get the best odds for every IPL match, updated live as the game unfolds.' },
  { icon: Gift, title: 'Special IPL Bonuses', desc: 'Extra rewards and exclusive bonuses available throughout the IPL season.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Get help during live matches — our team is always just a WhatsApp away.' },
];

export default function IPL2026() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="ipl-2026" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-[#032414] to-emerald-950" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Section 5
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Best Online Cricket ID for <span className="text-shimmer">IPL 2026</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Looking for the Best Online Cricket ID for IPL 2026? We've got you covered with exclusive markets, live odds, and special bonuses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-5 group-hover:bg-emerald-500/25 transition-colors duration-300">
                <h.icon className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{h.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{h.desc}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-700/10 border border-emerald-500/30 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold text-white mb-3">Join Thousands of Satisfied Users</h3>
            <p className="text-gray-300 text-sm mb-4">Get your IPL Cricket ID with exclusive markets today!</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Get IPL Cricket ID
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
