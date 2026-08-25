import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
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
    a: 'Withdrawals process in 2-30 minutes via UPI depending on the provider and time of day.',
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
    <section id="faqs" className="py-20 section-gradient">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-3xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Section 8
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-emerald-400">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about getting your Online Cricket ID.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'border-emerald-500/30' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group"
              >
                <span className="text-white font-semibold text-base sm:text-lg group-hover:text-emerald-400 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-300 mb-4">Still have questions? Contact us on WhatsApp!</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
}
