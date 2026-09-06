import { Star, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PlatformCardItem } from '@/types/platform';
import { PLATFORM_CARDS } from '@/data/platformData';

interface PlatformGridProps {
  onSelectPlatform: (slug: string) => void;
}

export default function PlatformGrid({ onSelectPlatform }: PlatformGridProps) {
  const getWhatsAppLink = (platform: PlatformCardItem) => {
    const text = encodeURIComponent(
      `Hello, I want to create a verified Cricket ID for ${platform.name} with starting deposit of ${platform.minDeposit}. Please share login link.`
    );
    return `https://wa.link/onlinecricketid?text=${text}`;
  };

  return (
    <section id="platforms" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Partners
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Top Cricket Betting Exchanges <span className="text-emerald-700">for 2026</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Read verified reviews and get your official cricket ID with instant UPI deposits and fast withdrawals.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectPlatform('/all-cricket-id')}
            className="hidden sm:inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 text-xs sm:text-sm font-bold self-start sm:self-auto shrink-0 transition-colors"
          >
            <span>View All 88+ Platforms</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {PLATFORM_CARDS.map((platform) => (
            <div
              key={platform.id}
              className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between relative group ${
                platform.featured
                  ? 'border-emerald-500/80 ring-1 ring-emerald-500/20'
                  : 'border-slate-200/90 hover:border-slate-300'
              }`}
            >
              {/* Card Header: Logo & Badge */}
              <div>
                <div className="flex items-start justify-between gap-1.5 mb-2.5">
                  {/* Platform Logo Badge with Explicit Aspect Ratio for Zero CLS */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 aspect-square rounded-xl ${platform.logoBg} text-white font-black text-xs sm:text-sm flex items-center justify-center border ${platform.logoAccent} shadow-2xs shrink-0`}
                  >
                    {platform.logoText}
                  </div>

                  {/* Rating Tag */}
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded-lg text-amber-800 text-[10px] sm:text-xs font-bold shrink-0">
                    <Star className="w-3 h-3 fill-current text-amber-500" />
                    <span>{platform.rating}</span>
                  </div>
                </div>

                {/* Platform Name */}
                <div className="mb-1">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide block truncate">
                    {platform.badge}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight truncate">
                    {platform.name}
                  </h3>
                </div>

                {/* Best For description */}
                <p className="text-[11px] text-slate-500 line-clamp-1 mb-3">
                  {platform.bestFor}
                </p>

                {/* Specs Box: Minimum Deposit & Cashout Time */}
                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200/80 mb-3 space-y-1 text-left">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">Min Deposit:</span>
                    <span className="text-emerald-800 font-extrabold">{platform.minDeposit}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">Cashout:</span>
                    <span className="text-slate-700 font-bold">{platform.payoutSpeed}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                {/* Primary CTA: Review Silo Navigation */}
                <button
                  type="button"
                  onClick={() => onSelectPlatform(`/${platform.slug}`)}
                  className="w-full min-h-[44px] sm:min-h-[48px] px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95"
                  aria-label={`Read full review of ${platform.name}`}
                >
                  <span>Read Full Review</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                {/* Secondary CTA: Direct WhatsApp outbound */}
                <a
                  href={getWhatsAppLink(platform)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] sm:min-h-[48px] px-2 rounded-xl text-emerald-700 hover:text-emerald-800 text-xs font-bold bg-white hover:bg-emerald-50 border border-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs"
                  aria-label={`Get ${platform.name} ID on WhatsApp`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>Get ID on WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
