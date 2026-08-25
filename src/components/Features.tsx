import { Layers, Wallet, CreditCard, RefreshCw, Lock, Video, Lightbulb } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  { icon: Layers, title: 'One ID, Multiple Sports', desc: 'Cricket, football, tennis, kabaddi, horse racing — all with a single ID.' },
  { icon: Wallet, title: 'Unified Wallet', desc: 'Manage all your funds in one place across every sport and market.' },
  { icon: CreditCard, title: 'Fast Deposits', desc: 'UPI, GPay, PhonePe, Paytm, and Crypto accepted for instant deposits.' },
  { icon: RefreshCw, title: 'Instant Withdrawals', desc: 'Get your money in minutes — no long waiting periods.' },
  { icon: Lock, title: 'Secure Transactions', desc: '100% encrypted payments with full data protection.' },
  { icon: Video, title: 'Live Streaming', desc: 'Watch and bet simultaneously with integrated live streaming.' },
  { icon: Lightbulb, title: 'Expert Tips', desc: 'Get match predictions and analysis from cricket experts.' },
];

export default function Features() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="py-20 section-gradient">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Section 6
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Top Features of Our <span className="text-emerald-400">Cricket Betting ID</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our Online Betting ID comes with premium features designed for the ultimate betting experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-5 hover:scale-[1.04] transition-all duration-300 group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-4 group-hover:bg-emerald-500/25 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
