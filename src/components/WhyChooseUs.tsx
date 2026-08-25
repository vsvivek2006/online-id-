import { Zap, Wallet, Headphones, ShieldCheck, Trophy, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

const features = [
  { icon: Zap, title: 'Instant Activation', desc: 'Get your Online Cricket ID within minutes of contacting us on WhatsApp.' },
  { icon: Wallet, title: 'Low Minimum Deposit', desc: 'Start with just ₹100 — no need to commit large amounts upfront.' },
  { icon: ShieldCheck, title: 'Fast Withdrawals', desc: 'Get your winnings in 2-15 minutes via UPI, GPay, PhonePe, or Paytm.' },
  { icon: Headphones, title: '24/7 WhatsApp Support', desc: 'Contact our team anytime via Online Cricket ID WhatsApp Number.' },
  { icon: ShieldCheck, title: 'Secure & Trusted', desc: '100% safe transactions with encrypted payments and full data protection.' },
  { icon: Trophy, title: 'IPL 2026 Ready', desc: 'Special markets and exclusive odds for IPL betting season 2026.' },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="why-us" className="py-20 section-gradient">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Section 2
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Our <span className="text-emerald-400">Cricket ID Provider</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            As a leading Cricket ID Provider, we offer unmatched service quality and instant access to all cricket betting markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-5 group-hover:bg-emerald-500/25 transition-colors duration-300">
                <f.icon className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Contact us on WhatsApp for instant <strong className="text-emerald-400">Online Cricket ID WhatsApp Number</strong> activation.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            wa.link/onlinecricketid
          </a>
        </div>
      </div>
    </section>
  );
}
