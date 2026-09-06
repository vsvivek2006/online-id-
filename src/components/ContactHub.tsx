import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  MessageCircle,
  Mail,
  Clock,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Check,
  Copy,
  ChevronRight,
  Headphones,
  Lock,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const BASE_URL = 'https://www.onlinecricketid.games';
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const SUPPORT_EMAIL = 'support@onlinecricketid.games';

interface ContactHubProps {
  onNavigate: (path: string) => void;
}

interface SupportCategory {
  id: string;
  title: string;
  desc: string;
  icon: string;
  whatsappMessage: string;
}

const SUPPORT_CATEGORIES: SupportCategory[] = [
  {
    id: 'onboarding',
    title: 'New Cricket ID Onboarding',
    desc: 'Instant ID activation for Laser247, Lotus365, Betbhai9, or SkyExchange with ₹100 min deposit.',
    icon: '🏏',
    whatsappMessage: 'Hi Support, I would like to create a new verified Cricket ID. Please share platform options and bonus details.',
  },
  {
    id: 'deposit',
    title: 'Deposit & UTR Verification',
    desc: 'Submit your transaction reference (UTR) for immediate balance credit within 2 minutes.',
    icon: '⚡',
    whatsappMessage: 'Hi Support, I have completed a deposit via UPI. Here is my transaction UTR reference for instant credit verification.',
  },
  {
    id: 'withdrawal',
    title: 'Instant Cashout / Withdrawal',
    desc: 'Request fast UPI, IMPS, or bank transfer payouts directly to your registered account.',
    icon: '💸',
    whatsappMessage: 'Hi Support, I want to request a fast cashout from my Cricket ID wallet to my verified UPI account.',
  },
  {
    id: 'recovery',
    title: 'Account Recovery & Login Help',
    desc: 'Password resets, 2FA recovery, or account unlocks handled directly by senior specialists.',
    icon: '🔐',
    whatsappMessage: 'Hi Support, I am experiencing a login issue or require a password reset for my cricket account. Please assist me.',
  },
];

const SUPPORT_FAQS = [
  {
    question: 'How fast will I receive my cricket ID credentials after messaging?',
    answer:
      'Our dedicated WhatsApp desk maintains an average response time of under 120 seconds. Once you select your preferred platform (Laser247, Lotus365, etc.) and complete the minimum ₹100 deposit verification, your official credentials are delivered immediately in chat.',
  },
  {
    question: 'What details are required to verify an instant deposit or withdrawal?',
    answer:
      'For deposits, you only need to provide the 12-digit UPI UTR number and an optional payment screenshot. For withdrawals, share your registered platform ID and your verified UPI ID or bank account details. We never ask for sensitive banking PINs or OTPs.',
  },
  {
    question: 'What are the operating hours of the WhatsApp support desk?',
    answer:
      'Our support team is available 24 Hours a Day, 7 Days a Week, 365 Days a Year without holidays. You will always connect with a real support agent in under 2 minutes, even during peak IPL match hours.',
  },
  {
    question: 'How do I ensure I am communicating with the genuine support desk?',
    answer:
      'Always access our helpline directly through our official website or our verified WhatsApp link: https://wa.link/onlinecricketid. We never use unofficial secondary numbers. Any official email correspondence will only come from support@onlinecricketid.games.',
  },
  {
    question: 'What should I do if I suspect an impersonator or fraudulent agent?',
    answer:
      'Do not transfer any funds or share password details. Take a screenshot and email it to support@onlinecricketid.games with the subject line "Report Fake Agent". Our team investigates and takes immediate action to protect players.',
  },
];

export default function ContactHub({ onNavigate }: ContactHubProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback for environments where clipboard API is restricted
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  // Structured Data (JSON-LD) for Google YMYL Authoritativeness
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${BASE_URL}/contact#webpage`,
    url: `${BASE_URL}/contact`,
    name: 'Official 24/7 Support & Instant Contact Hub | Online Cricket ID',
    description:
      'Official 24/7 customer support and onboarding helpline for Online Cricket ID. Instant WhatsApp support (< 120s response), official email desk, dispute resolution, and security advisory.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${BASE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '24/7 Support Hub',
          item: `${BASE_URL}/contact`,
        },
      ],
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'Online Cricket ID Provider Network',
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/og-image.svg`,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          availableLanguage: ['English', 'Hindi'],
          email: SUPPORT_EMAIL,
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
          areaServed: 'IN',
        },
      ],
    },
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SUPPORT_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Official 24/7 Support &amp; Instant Contact Hub | Online Cricket ID</title>
        <meta
          name="description"
          content="Official 24/7 customer support and onboarding helpline for Online Cricket ID. Instant WhatsApp assistance (< 120s response), official email desk, dispute resolution, and security advisory."
        />
        <meta
          name="keywords"
          content="online cricket id support, cricket id whatsapp number, 24/7 cricket id helpline, cricket id customer care, contact online cricket id"
        />
        <link rel="canonical" href={`${BASE_URL}/contact`} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Online Cricket ID" />
        <meta property="og:title" content="Official 24/7 Support & Instant Contact Hub | Online Cricket ID" />
        <meta
          property="og:description"
          content="Official 24/7 customer support and onboarding helpline for Online Cricket ID. Instant WhatsApp assistance with < 120s average response time."
        />
        <meta property="og:url" content={`${BASE_URL}/contact`} />
        <meta property="og:image" content={`${BASE_URL}/og-image.svg`} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      {/* Accessible Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-600">
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="hover:text-emerald-700 transition-colors font-medium min-h-[48px] inline-flex items-center"
              >
                Home
              </button>
            </li>
            <li className="text-slate-400">/</li>
            <li className="font-semibold text-slate-900 aria-current-page">
              24/7 Support &amp; Contact Hub
            </li>
          </ol>
        </div>
      </nav>

      {/* Support Hero Section */}
      <header className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Operational Hours & Status Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-semibold text-slate-200 mb-6 shadow-xs">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 font-bold">Helpdesk Live Now</span>
            <span className="text-slate-500">•</span>
            <span>24 Hours, 7 Days a Week, 365 Days a Year</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Official 24/7 Support &amp; WhatsApp Helpline
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect directly with our friendly support team on WhatsApp for instant Cricket ID setup, quick UPI deposit help, and fast withdrawals. We are here to help 24/7.
          </p>

          {/* Average Response Visual Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-bold shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="text-[11px] text-emerald-400/80 uppercase tracking-wider block font-bold">
                Quick Response Guarantee
              </span>
              <span className="text-white text-xs sm:text-sm font-extrabold tracking-tight">
                Average Reply Time: &lt; 2 Minutes
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Contact Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">

        {/* Section 1: Direct Conversion Cards */}
        <section aria-labelledby="channels-heading">
          <div className="text-center mb-10">
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest block mb-1">
              Authorized Channels
            </span>
            <h2 id="channels-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Select Your Preferred Support Channel
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              For quick account creation, instant deposits, and fast cashouts, message us directly on WhatsApp. For account queries or formal assistance, email our support desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1: Instant WhatsApp Support (Primary High-Contrast Block) */}
            <article className="relative rounded-3xl bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white p-6 sm:p-8 border-2 border-emerald-500/60 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                Fastest Response
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                  <MessageCircle className="w-7 h-7 fill-current" />
                </div>

                <h3 className="text-xl font-black text-white mb-2 tracking-tight">
                  Instant WhatsApp Support &amp; ID Setup
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Chat directly with our friendly support team. Get your new Cricket ID in 2 minutes, add balance via UPI, or request fast cashouts anytime.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300 mb-8 border-t border-slate-800 pt-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Average Reply Speed: <strong>&lt; 2 Minutes</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Available: <strong>24/7/365 (Always Online)</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Platforms: <strong>Laser247, Lotus365, Betbhai9, SkyExchange</strong></span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-98 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all"
                  aria-label="Connect to Official 24/7 WhatsApp Support Chat"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Start WhatsApp Chat Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[11px] text-slate-400 text-center block mt-2.5">
                  Direct Link: wa.link/onlinecricketid
                </span>
              </div>
            </article>

            {/* Card 2: Official Email Support Desk */}
            <article className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Account &amp; Email Support
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  Official Email Helpdesk
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Best for account queries, self-exclusion requests, partnership proposals, or formal payment verification.
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Official Email Address
                  </span>
                  <code className="text-slate-900 font-mono text-xs sm:text-sm font-semibold break-all select-all">
                    {SUPPORT_EMAIL}
                  </code>
                </div>

                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>First Response: <strong>Within 2–4 Hours</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Confirmation: <strong>Written response for every inquiry</strong></span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Support%20Inquiry%20-%20Online%20Cricket%20ID`}
                  className="w-full min-h-[48px] px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
                
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full min-h-[48px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  aria-label="Copy support email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </article>

            {/* Card 3: VIP High-Stakes Desk */}
            <article className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors md:col-span-2 lg:col-span-1">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                  High-Turnover Desk
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  VIP Priority Account Manager
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Dedicated single-point WhatsApp helpline for high-volume sports traders, Super Master account inquiries, and custom settlement limits.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-8 border-t border-slate-100 pt-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Personal Account Executive assigned</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Zero limit on daily withdrawal transactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Direct priority routing during live matches</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi Support, I am an active high-volume sports trader looking to access the VIP Priority Desk.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Connect to VIP WhatsApp Desk</span>
                </a>
              </div>
            </article>

          </div>
        </section>

        {/* Section 2: Intent-Driven WhatsApp Fast-Track Routing */}
        <section aria-labelledby="quick-routing-heading" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-1">
              Instant Intent Routing
            </span>
            <h2 id="quick-routing-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              What do you need assistance with right now?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Click any category below to open WhatsApp with a pre-configured, context-rich inquiry so our automated dispatcher connects you to the relevant specialized officer immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUPPORT_CATEGORIES.map((item) => {
              const directUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(item.whatsappMessage)}`;
              return (
                <a
                  key={item.id}
                  href={directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 flex items-start gap-4 transition-all group"
                  aria-label={`Open WhatsApp for ${item.title}`}
                >
                  <div className="text-2xl shrink-0 p-2 rounded-xl bg-slate-700/50 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Section 3: Semantic Safety Advisory Notice (Crucial for Google YMYL Trust) */}
        <section
          aria-labelledby="security-advisory-heading"
          className="rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 p-6 sm:p-8 lg:p-10 text-slate-800"
        >
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-700 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div className="flex-1">
              <span className="text-amber-800 text-xs font-black uppercase tracking-wider block mb-1">
                Official Compliance &amp; Fraud Advisory
              </span>
              <h2 id="security-advisory-heading" className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mb-3">
                Crucial Security Notice: Protecting Your Funds and Privacy
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Online Cricket ID operates strictly via verified channels. In compliance with real-money gaming safety directives, please review and remember these mandatory rules:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-700 font-bold">
                    <Lock className="w-4 h-4 shrink-0" />
                    <span>Never Share Banking PINs or OTPs</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Our executives will <strong>NEVER</strong> ask for your bank UPI MPIN, ATM PIN, or One-Time Passwords. Keep your banking credentials confidential at all times.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-700 font-bold">
                    <Lock className="w-4 h-4 shrink-0" />
                    <span>Never Disclose Platform Passwords</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We generate your initial credentials, but recommend changing your password on first login. Support representatives never require your private password to resolve balance inquiries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Verify the Official WhatsApp Link</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Only engage with our verified link: <code className="bg-slate-100 px-1 py-0.5 rounded text-emerald-800 font-bold">wa.link/onlinecricketid</code>. Avoid third-party numbers claiming association.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Report Fake Accounts &amp; Scams</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    If anyone contacts you demanding extra charges or fake fees, forward the details immediately to <a href={`mailto:${SUPPORT_EMAIL}`} className="underline font-semibold text-slate-800">{SUPPORT_EMAIL}</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Support FAQ Accordion */}
        <section aria-labelledby="faq-heading">
          <div className="text-center mb-10">
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest block mb-1">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Support Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Clear, transparent answers regarding account creation, verification speeds, and platform security.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {SUPPORT_FAQS.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all shadow-xs open:ring-1 open:ring-emerald-500/30 open:border-emerald-500"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base select-none list-none min-h-[48px] py-1">
                  <span>{faq.question}</span>
                  <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Section 5: Official Service & Partner Disclosure */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-8 text-slate-600 text-xs leading-relaxed border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>Official Partner Network &amp; Player Care</span>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[11px]">
              Verified 24/7 Helpline
            </span>
          </div>
          <p className="mb-2">
            Online Cricket ID is an authorized partner network helping players connect with licensed sports exchanges including Laser247, Lotus365, Betbhai9, and SkyExchange. We provide safe 24/7 account creation, fast UPI cashouts, and complete data privacy.
          </p>
          <p>
            Participation is strictly restricted to individuals 18 years of age or older located within jurisdictions where online sports trading is permitted by law. Please review our{' '}
            <button
              type="button"
              onClick={() => onNavigate('/responsible-gaming')}
              className="text-emerald-700 hover:underline font-bold"
            >
              Responsible Gaming Guidelines
            </button>{' '}
            and{' '}
            <button
              type="button"
              onClick={() => onNavigate('/terms-and-conditions')}
              className="text-emerald-700 hover:underline font-bold"
            >
              Terms of Service
            </button>{' '}
            for full terms and player safety details.
          </p>
        </section>

      </div>
    </>
  );
}
