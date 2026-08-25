import { MessageCircle, ShieldAlert } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

export default function FinalCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Get Your <span className="text-shimmer">Online Cricket ID</span>?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users who trust us as their Cricket ID Provider. Instant activation, fast withdrawals, and 24/7 support — all via WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5" />
            Get Your Cricket ID Now
          </a>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span className="text-amber-300 text-sm font-medium">
            Play responsibly. Betting involves risk.
          </span>
        </div>
      </div>
    </section>
  );
}
