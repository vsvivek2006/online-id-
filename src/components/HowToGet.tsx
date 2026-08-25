import { MessageCircle, Gift } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

const steps = [
  { number: '01', title: 'Save Our WhatsApp Number', desc: 'Save our Online Cricket ID WhatsApp Number — wa.link/onlinecricketid' },
  { number: '02', title: 'Send a Message', desc: 'Send us a message with your name and preferred ID type' },
  { number: '03', title: 'Complete KYC Verification', desc: 'Provide basic details for KYC verification' },
  { number: '04', title: 'Make Your First Deposit', desc: 'Make your first deposit (minimum ₹100) via UPI, GPay, PhonePe, or Paytm' },
  { number: '05', title: 'Start Betting Instantly', desc: 'Start betting with your new Cricket ID Online instantly!' },
];

export default function HowToGet() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="how-to-get" className="py-20 section-gradient">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Section 4
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How to Get Your <span className="text-emerald-400">Online Cricket ID</span> via WhatsApp
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Getting your Online Cricket ID is simple and fast — just follow these 5 easy steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex gap-5 md:gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-white font-extrabold text-lg">{step.number}</span>
                </div>
                <div className="glass-card rounded-2xl p-5 flex-1 group-hover:border-emerald-500/30 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus banner */}
        <div className="mt-12 relative overflow-hidden rounded-3xl gradient-border border border-emerald-500/30 p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 rounded-full mb-4">
              <Gift className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-semibold">Limited Time Offer</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Get <span className="text-emerald-400">₹100 Free Bonus</span> on Your First Deposit!
            </h3>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Claim Your Bonus Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
