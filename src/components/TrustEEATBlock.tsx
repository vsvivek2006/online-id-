import { ShieldCheck, Lock, CheckCircle2, MessageCircle, Zap } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, SECURITY_FEATURES } from '@/data/platformData';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

export default function TrustEEATBlock() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ======================================================== */}
        {/* PART 1: 3-Step "How It Works" Visual                    */}
        {/* ======================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              Easy Setup
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get Your Cricket ID in <span className="text-emerald-700">3 Easy Steps</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
              Get your verified Cricket ID on WhatsApp in just 2 minutes with zero paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
            {HOW_IT_WORKS_STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:border-emerald-400 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                      {s.step}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/70 text-emerald-900 font-bold text-[10px] uppercase tracking-wide">
                      {s.timeEstimate}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {s.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span>Verified Process</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xs hover:shadow transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current mr-2" />
              <span>Start Instant Setup via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 2: Security & Player Protection                     */}
        {/* ======================================================== */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-2xs">
          <div className="max-w-3xl mb-8 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              100% Safe &amp; Protected
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Bank-Grade Security &amp; <span className="text-emerald-700">Fair Play Guarantee</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
              Your money and personal privacy are completely safe with us. We ensure fast withdrawals, genuine match odds, and 24/7 dedicated WhatsApp support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {SECURITY_FEATURES.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {item.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Institutional Trust Verification Row */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <div className="text-slate-900 font-extrabold text-base sm:text-lg">10,000+</div>
              <div className="text-slate-500 text-[11px] font-medium">Active Bettors</div>
            </div>
            <div>
              <div className="text-emerald-800 font-extrabold text-base sm:text-lg">₹100</div>
              <div className="text-slate-500 text-[11px] font-medium">Min Starting Deposit</div>
            </div>
            <div>
              <div className="text-amber-700 font-extrabold text-base sm:text-lg">4.2 Mins</div>
              <div className="text-slate-500 text-[11px] font-medium">Avg UPI Cashout Time</div>
            </div>
            <div>
              <div className="text-slate-900 font-extrabold text-base sm:text-lg">100%</div>
              <div className="text-slate-500 text-[11px] font-medium">Payout Honor Guarantee</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
