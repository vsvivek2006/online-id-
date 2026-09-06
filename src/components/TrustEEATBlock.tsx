import { ShieldCheck, Lock, CheckCircle2, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { SECURITY_FEATURES } from '@/data/platformData';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

interface TrustEEATBlockProps {
  onNavigate?: (path: string) => void;
}

export default function TrustEEATBlock({ onNavigate }: TrustEEATBlockProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

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
            {/* Step 1 */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:border-emerald-400 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    1
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/70 text-emerald-900 font-bold text-[10px] uppercase tracking-wide">
                    30 Seconds
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  Choose Your Exchange
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Select{' '}
                  <a
                    href="/laser247-cricket-id"
                    onClick={(e) => handleNav(e, '/laser247-cricket-id')}
                    className="font-bold text-emerald-800 underline decoration-emerald-300 hover:text-emerald-950"
                  >
                    Laser247
                  </a>
                  ,{' '}
                  <a
                    href="/lotus365-cricket-id"
                    onClick={(e) => handleNav(e, '/lotus365-cricket-id')}
                    className="font-bold text-emerald-800 underline decoration-emerald-300 hover:text-emerald-950"
                  >
                    Lotus365
                  </a>
                  , or browse our{' '}
                  <a
                    href="/all-cricket-id"
                    onClick={(e) => handleNav(e, '/all-cricket-id')}
                    className="font-bold text-emerald-800 underline decoration-emerald-300 hover:text-emerald-950"
                  >
                    20+ platforms
                  </a>{' '}
                  and connect on WhatsApp.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>Verified Partners</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:border-emerald-400 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    2
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/70 text-emerald-900 font-bold text-[10px] uppercase tracking-wide">
                    45 Seconds
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  Deposit Minimum ₹100
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Scan the verified merchant UPI QR code using PhonePe, GPay, or Paytm. Follow our{' '}
                  <a
                    href="/guides/cricket-betting-deposit-upi"
                    onClick={(e) => handleNav(e, '/guides/cricket-betting-deposit-upi')}
                    className="font-bold text-emerald-800 underline decoration-emerald-300 hover:text-emerald-950"
                  >
                    UPI deposit guide
                  </a>{' '}
                  for 100% instant credit.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>Direct UPI Clearance</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:border-emerald-400 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    3
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/70 text-emerald-900 font-bold text-[10px] uppercase tracking-wide">
                    Under 60 Seconds
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  Receive Official ID &amp; Play
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Receive your unique login ID, password, and URL on WhatsApp. Want to practice first? Try a{' '}
                  <a
                    href="/demo-cricket-id"
                    onClick={(e) => handleNav(e, '/demo-cricket-id')}
                    className="font-bold text-emerald-800 underline decoration-emerald-300 hover:text-emerald-950"
                  >
                    free demo ID
                  </a>{' '}
                  with dummy coins.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>Instant Access</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>
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
              <motion.div
                key={item.id}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2 hover:border-emerald-300 transition-colors"
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
              </motion.div>
            ))}
          </div>

          {/* Institutional Trust Verification Row */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <div className="text-slate-900 font-extrabold text-base sm:text-lg">10,000+</div>
              <div className="text-slate-500 text-[11px] font-medium">Active Bettors</div>
            </div>
            <div>
              <a
                href="/minimum-deposit-cricket-id"
                onClick={(e) => handleNav(e, '/minimum-deposit-cricket-id')}
                className="group block"
              >
                <div className="text-emerald-800 font-extrabold text-base sm:text-lg group-hover:underline">₹100</div>
                <div className="text-slate-500 text-[11px] font-medium group-hover:text-emerald-800 transition-colors">Min Starting Deposit &rarr;</div>
              </a>
            </div>
            <div>
              <a
                href="/instant-withdrawal-cricket-id"
                onClick={(e) => handleNav(e, '/instant-withdrawal-cricket-id')}
                className="group block"
              >
                <div className="text-amber-700 font-extrabold text-base sm:text-lg group-hover:underline">4.2 Mins</div>
                <div className="text-slate-500 text-[11px] font-medium group-hover:text-amber-800 transition-colors">Avg UPI Cashout Time &rarr;</div>
              </a>
            </div>
            <div>
              <a
                href="/all-cricket-id"
                onClick={(e) => handleNav(e, '/all-cricket-id')}
                className="group block"
              >
                <div className="text-slate-900 font-extrabold text-base sm:text-lg group-hover:underline">100%</div>
                <div className="text-slate-500 text-[11px] font-medium group-hover:text-emerald-800 transition-colors">Payout Honor Guarantee &rarr;</div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
