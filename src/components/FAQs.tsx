import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

const faqs = [
  {
    q: 'What is the minimum amount to get an Online Cricket ID?',
    a: 'Most platforms require ₹100 to ₹500. We offer ₹100 minimum deposit for most ID types.',
  },
  {
    q: 'Can I get a Cricket ID without KYC?',
    a: 'Yes, many platforms issue IDs with just a name and phone number. However, KYC verification is recommended for large withdrawals.',
  },
  {
    q: 'How fast can I withdraw money?',
    a: 'Withdrawals process in 2-15 minutes via UPI depending on the provider and time of day.',
  },
  {
    q: 'Can I use one Cricket ID on mobile?',
    a: 'Yes, most IDs work on mobile through apps or browsers. Your login works on any device.',
  },
  {
    q: 'Which platform is best for IPL betting?',
    a: 'We provide specialized IPL Cricket ID with exclusive markets, live odds, and real-time updates.',
  },
  {
    q: 'Is online cricket betting legal in India?',
    a: 'As of August 2026, real-money online games including cricket betting are banned under the Online Gaming Act, 2025. Consult a qualified lawyer for specific advice.',
  },
];

export default function FAQs() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {/* CSS-based visibility: always in DOM for bot indexing, visually toggled via max-h */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
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
