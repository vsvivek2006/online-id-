import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

interface FAQsProps {
  onNavigate?: (path: string) => void;
}

export default function FAQs({ onNavigate }: FAQsProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const faqs = [
    {
      q: 'What is the minimum amount to get an Online Cricket ID?',
      a: (
        <>
          Most platforms require ₹100 to ₹500. We offer a{' '}
          <a
            href="/minimum-deposit-cricket-id"
            onClick={(e) => handleNav(e, '/minimum-deposit-cricket-id')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            ₹100 minimum deposit cricket ID
          </a>{' '}
          for most ID types. You can also test features first with a{' '}
          <a
            href="/demo-cricket-id"
            onClick={(e) => handleNav(e, '/demo-cricket-id')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            free demo cricket ID
          </a>{' '}
          before depositing real funds.
        </>
      ),
    },
    {
      q: 'How fast can I withdraw money?',
      a: (
        <>
          Withdrawals process in 2 to 15 minutes via UPI depending on the exchange and time of day. Check our{' '}
          <a
            href="/instant-withdrawal-cricket-id"
            onClick={(e) => handleNav(e, '/instant-withdrawal-cricket-id')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            instant withdrawal guide
          </a>{' '}
          for step-by-step cashout tips and verified payout rules.
        </>
      ),
    },
    {
      q: 'Which platform is best for IPL betting?',
      a: (
        <>
          We provide specialized{' '}
          <a
            href="/ipl-cricket-id"
            onClick={(e) => handleNav(e, '/ipl-cricket-id')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            IPL 2026 Cricket IDs
          </a>{' '}
          with ball-by-ball session rates, live in-play trading, and high liquidity across{' '}
          <a
            href="/laser247-cricket-id"
            onClick={(e) => handleNav(e, '/laser247-cricket-id')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            Laser247
          </a>{' '}
          and{' '}
          <a
            href="/lotus365-cricket-id"
            onClick={(e) => handleNav(e, '/lotus365-cricket-id')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            Lotus365
          </a>
          .
        </>
      ),
    },
    {
      q: 'Can I use one Cricket ID on mobile?',
      a: (
        <>
          Yes, all IDs work smoothly on mobile browsers as well as dedicated exchange apps. Compare features across all options in our{' '}
          <a
            href="/all-cricket-id"
            onClick={(e) => handleNav(e, '/all-cricket-id')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            20+ cricket ID comparison directory
          </a>
          .
        </>
      ),
    },
    {
      q: 'Can I get a Cricket ID without complex paperwork?',
      a: (
        <>
          Yes, you can register and activate an ID with just your name and WhatsApp number in under 2 minutes. Learn more in our{' '}
          <a
            href="/how-to-get-online-cricket-id"
            onClick={(e) => handleNav(e, '/how-to-get-online-cricket-id')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            step-by-step account setup guide
          </a>
          .
        </>
      ),
    },
    {
      q: 'Is online cricket betting legal in India?',
      a: (
        <>
          Real-money gaming is subject to state-level regulations under the Online Gaming Act, 2025. Please review our comprehensive{' '}
          <a
            href="/guides/cricket-betting-legal-india"
            onClick={(e) => handleNav(e, '/guides/cricket-betting-legal-india')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            legal status and compliance guide
          </a>{' '}
          or consult our{' '}
          <a
            href="/legal"
            onClick={(e) => handleNav(e, '/legal')}
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            terms and legal policy
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <section id="faqs" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-3xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Frequently Asked <span className="text-emerald-700">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Everything you need to know about getting your verified Online Cricket ID.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600 text-xs sm:text-sm mb-3">Still have questions? Our support team is available 24/7.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl shadow-xs hover:shadow transition-all text-xs sm:text-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
