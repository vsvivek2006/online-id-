const matches = [
  '🏏 IPL 2026: Mumbai Indians vs Chennai Super Kings - Live Now',
  '⚡ Get ₹100 Free Bonus on First Deposit - Limited Time!',
  '🏆 IPL Cricket ID with Exclusive Markets - Instant Activation',
  '💰 Fast Withdrawals in 2-15 Minutes via UPI',
  '📱 24/7 WhatsApp Support - Get Your ID in Minutes',
  '🎯 Best Online Cricket ID Provider in India - Trusted by Thousands',
];

export default function Ticker() {
  return (
    <div className="relative bg-emerald-500/10 border-y border-emerald-500/20 py-3 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...matches, ...matches].map((text, i) => (
          <span key={i} className="mx-8 text-sm text-emerald-300 font-medium">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
