import { useState } from 'react';
import { Trophy, X, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

export default function TopAnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-emerald-50 text-emerald-950 text-xs py-1.5 px-3 border-b border-emerald-200/90">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Left / Center Message */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden text-center sm:text-left">
          <span className="hidden sm:inline-flex p-1 rounded-md bg-amber-100 text-amber-800">
            <Trophy className="w-3.5 h-3.5" />
          </span>
          <span className="font-medium text-slate-800 text-[11px] sm:text-xs">
            <strong className="text-emerald-900 font-bold">IPL 2026 Promo:</strong> 100% Welcome Bonus on ₹100+ deposits!
          </span>
          <span className="hidden md:inline text-emerald-300">•</span>
          <span className="hidden md:inline text-emerald-800 text-[11px] font-semibold">
            ⚡ 2-Min WhatsApp Activation
          </span>
        </div>

        {/* Right CTA & Close */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[11px] transition-all shadow-xs"
          >
            <span>Claim Offer</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button
            type="button"
            onClick={() => setVisible(false)}
            className="min-w-[32px] min-h-[32px] inline-flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-emerald-100/60 rounded-lg transition-colors"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}
