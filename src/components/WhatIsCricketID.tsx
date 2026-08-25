import { useReveal } from '@/hooks/useReveal';

export default function WhatIsCricketID() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 section-gradient">
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}
      >
        <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
          Section 1
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          What is an <span className="text-emerald-400">Online Cricket ID</span>?
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          An <strong className="text-emerald-400 font-semibold">Online Cricket ID</strong> is your personal account on a betting exchange platform that allows you to place real-money bets on cricket matches, IPL, and other sports. Without a Cricket ID, you cannot deposit funds, place bets, or withdraw winnings. Our platform provides <strong className="text-emerald-400 font-semibold">Online Betting ID</strong> with a unified wallet system for seamless betting across cricket, football, tennis, kabaddi, and more.
        </p>
      </div>
    </section>
  );
}
