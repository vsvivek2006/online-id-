import { MessageCircle, ShieldCheck, Zap, TrendingUp, Star } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/5 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-emerald-500/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-emerald-500/10 border border-emerald-500/30 rounded-full animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-300 text-sm font-medium">IPL 2026 Ready - Instant Activation</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-up">
          Get Your <span className="text-shimmer">Online Cricket ID</span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-emerald-400">Fast, Secure &amp; Trusted</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Looking for the <strong className="text-emerald-400 font-semibold">Best Online Cricket ID</strong> in India? We are a trusted{' '}
          <strong className="text-emerald-400 font-semibold">Cricket ID Provider</strong> offering instant activation for Online Cricket ID, IPL Cricket ID, and All Cricket IDs with 24/7 support. Secure and reliable Cricket ID Online with fast withdrawals and competitive odds.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Get Instant Cricket ID
          </a>
          <a
            href="#id-types"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card text-white font-semibold text-lg rounded-full hover:scale-105 transition-all duration-300"
          >
            View ID Types
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          {[
            { icon: Zap, value: '2 Min', label: 'Instant Activation' },
            { icon: ShieldCheck, value: '100%', label: 'Secure & Trusted' },
            { icon: Star, value: '24/7', label: 'WhatsApp Support' },
            { icon: TrendingUp, value: '₹100', label: 'Min Deposit' },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-4 text-center">
              <item.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-white font-bold text-xl">{item.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-emerald-500/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-emerald-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
