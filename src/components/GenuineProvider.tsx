import { CheckCircle2, XCircle, ShieldAlert } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const comparison = [
  { factor: 'Withdrawals', genuine: 'Fast and reliable', fake: 'Delayed or blocked' },
  { factor: 'Support', genuine: 'Active and responsive', fake: 'Goes silent after deposit' },
  { factor: 'Claims', genuine: 'Realistic expectations', fake: 'Guaranteed profits promised' },
  { factor: 'Reviews', genuine: 'Verifiable user feedback', fake: 'No reviews or obvious fakes' },
  { factor: 'First Deposit', genuine: 'Small amounts accepted', fake: 'Pushes for large upfront deposits' },
];

const redFlags = [
  'Providers asking for OTP or UPI PIN',
  'Platforms with no KYC verification',
  'Agents who change UPI IDs frequently',
  'Guaranteed profit promises',
];

export default function GenuineProvider() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 section-gradient">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Section 7
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How to Spot a Genuine <span className="text-emerald-400">Cricket ID Provider</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            With many fake providers in the market, here's how to identify a genuine Cricket ID Provider and protect yourself.
          </p>
        </div>

        {/* Comparison table */}
        <div className="glass-card rounded-2xl overflow-hidden mb-10">
          <div className="grid grid-cols-3 gap-px bg-white/5">
            <div className="bg-[#032414] p-4 sm:p-5 text-center">
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Factor</span>
            </div>
            <div className="bg-emerald-500/10 p-4 sm:p-5 text-center">
              <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">Genuine Provider</span>
            </div>
            <div className="bg-red-500/10 p-4 sm:p-5 text-center">
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Fake Provider</span>
            </div>
          </div>
          {comparison.map((row, i) => (
            <div key={row.factor} className={`grid grid-cols-3 gap-px bg-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
              <div className="bg-[#032414] p-4 sm:p-5 flex items-center">
                <span className="text-white font-medium text-sm sm:text-base">{row.factor}</span>
              </div>
              <div className="bg-emerald-500/5 p-4 sm:p-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm sm:text-base">{row.genuine}</span>
              </div>
              <div className="bg-red-500/5 p-4 sm:p-5 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">{row.fake}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Red flags */}
        <div className="rounded-2xl p-6 sm:p-8 bg-red-500/5 border border-red-500/20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Red Flags to Avoid</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {redFlags.map((flag) => (
              <div key={flag} className="flex items-center gap-3 text-gray-300">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-gray-300 text-lg">
          Our <strong className="text-emerald-400">Cricket ID Online</strong> service is 100% transparent and trusted by thousands of users across India.
        </p>
      </div>
    </section>
  );
}
