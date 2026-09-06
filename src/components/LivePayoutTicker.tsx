import { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle, ArrowUpRight } from 'lucide-react';

const RECENT_PAYOUTS = [
  { name: 'Vikram S.', city: 'Mumbai', amount: '₹14,500', method: 'Google Pay', time: '1 min ago' },
  { name: 'Rahul K.', city: 'Delhi', amount: '₹8,200', method: 'PhonePe', time: '3 mins ago' },
  { name: 'Aman P.', city: 'Lucknow', amount: '₹22,000', method: 'Paytm UPI', time: '4 mins ago' },
  { name: 'Suresh M.', city: 'Bangalore', amount: '₹5,750', method: 'IMPS Bank', time: '6 mins ago' },
  { name: 'Kunal R.', city: 'Ahmedabad', amount: '₹31,400', method: 'PhonePe', time: '8 mins ago' },
  { name: 'Deepak V.', city: 'Jaipur', amount: '₹12,000', method: 'Google Pay', time: '11 mins ago' },
  { name: 'Mohit B.', city: 'Chandigarh', amount: '₹9,800', method: 'UPI Instant', time: '14 mins ago' },
];

export default function LivePayoutTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RECENT_PAYOUTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = RECENT_PAYOUTS[currentIndex];

  return (
    <aside
      aria-label="Live Payout Feed"
      className="bg-white border-y border-slate-200/90 h-10 min-h-[40px] px-3 sm:px-4 overflow-hidden relative flex items-center shadow-2xs"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3 text-xs">
        
        {/* Left: Live Status Tag */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="text-emerald-800 font-bold uppercase tracking-wide text-[10px] sm:text-[11px] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Payouts
          </span>
        </div>

        {/* Center: Dynamic Animated Payout Item with fixed height to prevent CLS */}
        <div className="flex items-center gap-2 overflow-hidden text-slate-600 text-xs sm:text-sm">
          <div key={currentIndex} className="flex items-center gap-1.5 sm:gap-2 animate-fade-in truncate">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="text-slate-900 font-bold">{current.name}</span>
            <span className="text-slate-500 hidden xs:inline">({current.city})</span>
            <span className="text-slate-500">withdrew</span>
            <span className="text-emerald-800 font-extrabold bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-200">
              {current.amount}
            </span>
            <span className="hidden sm:inline text-slate-500">via {current.method}</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">• {current.time}</span>
          </div>
        </div>

        {/* Right: Guarantee Badge */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] text-slate-500 shrink-0">
          <span>Avg. Cashout: <strong className="text-emerald-800 font-bold">4.2 Mins</strong></span>
          <span className="text-slate-300">|</span>
          <a
            href="https://wa.link/onlinecricketid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-600 font-bold inline-flex items-center gap-0.5"
          >
            Instant UPI Withdrawal <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </aside>
  );
}
