import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ShieldCheck,
  ShieldAlert,
  Lock,
  Scale,
  FileText,
  AlertTriangle,
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

const BASE_URL = 'https://www.onlinecricketid.games';
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const SUPPORT_EMAIL = 'support@onlinecricketid.games';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

interface SectionNavItem {
  id: string;
  label: string;
  icon: typeof FileText;
}

const SECTIONS: SectionNavItem[] = [
  { id: 'terms', label: 'Terms of Service', icon: FileText },
  { id: 'privacy', label: 'Privacy & Data Security', icon: Lock },
  { id: 'responsible-gaming', label: 'Responsible Gaming (18+)', icon: ShieldCheck },
  { id: 'jurisdiction', label: 'Restricted Jurisdictions', icon: AlertTriangle },
  { id: 'support-hook', label: 'Compliance Helpdesk', icon: MessageCircle },
];

export default function LegalPage({ onNavigate }: LegalPageProps) {
  const [activeSection, setActiveSection] = useState('terms');

  // Handle hash changes or manual scrolling
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && SECTIONS.some((s) => s.id === hash)) {
        setActiveSection(hash);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    window.history.pushState(null, '', `#${id}`);
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Structured Data (JSON-LD) for Google YMYL Compliance
  const legalPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE_URL}/legal#webpage`,
    url: `${BASE_URL}/legal`,
    name: 'Legal, Privacy & Responsible Gaming Compliance Hub | Online Cricket ID',
    description:
      'Official statutory policies, terms of service, 256-bit SSL data privacy protocols, restricted state notices, and responsible gaming guidelines under the Online Gaming Act, 2025.',
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
          name: 'Legal & Compliance Hub',
          item: `${BASE_URL}/legal`,
        },
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Online Cricket ID Provider Network',
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/og-image.svg`,
    },
  };

  return (
    <>
      <Helmet>
        <title>Legal, Privacy &amp; Responsible Gaming Compliance | Online Cricket ID</title>
        <meta
          name="description"
          content="Review the official terms of service, 256-bit SSL privacy policies, restricted state notices (AP, TS, AS, OD), and responsible gaming protocols under the Online Gaming Act, 2025."
        />
        <meta
          name="keywords"
          content="online cricket id legal, terms of service cricket id, privacy policy cricket id, responsible gaming cricket betting, online gaming act 2025, restricted states cricket betting"
        />
        <link rel="canonical" href={`${BASE_URL}/legal`} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Online Cricket ID" />
        <meta property="og:title" content="Legal, Privacy & Responsible Gaming Compliance | Online Cricket ID" />
        <meta
          property="og:description"
          content="Official statutory policies, terms of service, 256-bit SSL data privacy protocols, restricted state notices, and responsible gaming guidelines under the Online Gaming Act, 2025."
        />
        <meta property="og:url" content={`${BASE_URL}/legal`} />
        <meta property="og:image" content={`${BASE_URL}/og-image.svg`} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(legalPageSchema)}</script>
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
              Legal, Privacy &amp; Compliance
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300/80 text-xs font-semibold text-slate-700 mb-5">
            <Scale className="w-3.5 h-3.5 text-slate-600" />
            <span>Player Safety &amp; Legal Terms</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-700 font-bold">Online Gaming Act, 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Legal, Privacy &amp; Responsible Gaming Hub
          </h1>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Clear terms, complete privacy protection, and responsible gaming guidelines. Learn how your funds are kept safe, how withdrawals work, and our commitment to fair and transparent play.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <span>Effective Date: <strong>August 2026</strong></span>
            <span>•</span>
            <span>Version: <strong>Updated 2026</strong></span>
            <span>•</span>
            <span>Protection: <strong>Bank-Grade 256-Bit SSL</strong></span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="bg-slate-50 py-10 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">

            {/* Sticky Sidebar Navigation (Desktop) / Quick Tabs (Mobile) */}
            <aside className="lg:col-span-4 mb-8 lg:mb-0">
              <div className="lg:sticky lg:top-24 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-3 px-2">
                  Compliance Sections
                </span>

                <nav className="space-y-1" aria-label="Legal Document Sections">
                  {SECTIONS.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-bold flex items-center gap-3 transition-colors ${
                          isActive
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent'
                        }`}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                        <span className="truncate">{sec.label}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Support Badge in Sidebar */}
                <div className="mt-6 pt-5 border-t border-slate-100 px-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>24/7 Player Support Desk</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Have questions about verification or account limits? Our team is available 24/7 on WhatsApp.
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] w-full mt-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Ask Questions on WhatsApp</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Editorial Prose Content Area */}
            <main className="lg:col-span-8 space-y-12">

              {/* Section 1: Terms of Service */}
              <section
                id="terms"
                aria-labelledby="terms-heading"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs"
              >
                <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <FileText className="w-4 h-4" />
                  <span>Section 01</span>
                </div>
                
                <h2 id="terms-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6">
                  Terms of Service &amp; User Agreement
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-li:text-slate-600">
                  <p>
                    These Terms of Service (&ldquo;Agreement&rdquo;) explain how our service works for players using <strong>Online Cricket ID</strong>. By using our website or contacting our official WhatsApp helpline, you agree to these clear and fair terms.
                  </p>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    1.1 Our Role as an Authorized ID Provider
                  </h3>
                  <p>
                    Online Cricket ID operates as an authorized customer service and registration platform for licensed cricket betting exchanges (including Laser247, Lotus365, Betbhai9, and SkyExchange). We help you create verified accounts, manage safe deposits and withdrawals, and receive 24/7 WhatsApp assistance.
                  </p>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    1.2 Account Activation &amp; Single-Account Rule
                  </h3>
                  <ul>
                    <li>
                      <strong>One Account Per Player:</strong> Each player is entitled to one verified account per exchange. Creating duplicate or fake accounts to exploit promotions is prohibited.
                    </li>
                    <li>
                      <strong>Minimum Starting Deposit:</strong> Accounts are activated with a starting deposit of just ₹100. Login details are shared instantly through our verified WhatsApp helpline.
                    </li>
                    <li>
                      <strong>Password Security:</strong> Always change your initial password upon logging in for the first time to keep your wallet completely private and secure.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    1.3 Indian Gaming Laws &amp; Fair Play Rules
                  </h3>
                  <p>
                    In accordance with regulatory guidelines under the <em>Online Gaming Act, 2025</em> and state laws:
                  </p>
                  <ul>
                    <li>
                      Players must verify that online sports betting is permitted in their respective state before depositing.
                    </li>
                    <li>
                      Unfair practices, automated bots, and syndicated manipulation violate fair play and result in immediate account closure.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    1.4 Deposit &amp; Withdrawal Guidelines
                  </h3>
                  <p>
                    All deposits must be made using verified Indian payment methods (UPI, PhonePe, Google Pay, Paytm, or IMPS) in your own name. Withdrawals are processed 24/7 in 2 to 15 minutes directly to your verified bank or UPI account with ₹0 platform fees.
                  </p>
                </div>
              </section>

              {/* Section 2: Privacy & Data Security Policy */}
              <section
                id="privacy"
                aria-labelledby="privacy-heading"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs"
              >
                <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <Lock className="w-4 h-4" />
                  <span>Section 02</span>
                </div>

                <h2 id="privacy-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6">
                  Privacy &amp; 256-Bit SSL Data Security Policy
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-li:text-slate-600">
                  <p>
                    Your personal privacy and financial discretion are foundational to our operational integrity. This Privacy Policy details our data collection, encryption standards, and strict retention policies.
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 not-prose my-6 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-emerald-900 font-bold block mb-0.5">
                        Binding Zero Third-Party Sharing Covenant
                      </strong>
                      <span className="text-emerald-800 leading-relaxed">
                        We pledge unconditionally that your mobile numbers, banking identifiers, transaction proofs, and chat records are <strong>never sold, leased, rented, or shared</strong> with external advertisers, third-party marketing networks, or unrelated data brokers.
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    2.1 Minimum Required Data Collection
                  </h3>
                  <p>
                    We collect only the bare minimum transactional records required to deliver operational sports account services:
                  </p>
                  <ul>
                    <li>
                      <strong>Contact Identifier:</strong> Your WhatsApp phone number used to dispatch encrypted credentials and process transaction receipts.
                    </li>
                    <li>
                      <strong>Transaction Verification:</strong> 12-digit UPI UTR reference numbers and payment transaction screenshots to confirm deposit balance adjustments.
                    </li>
                    <li>
                      <strong>Payout Details:</strong> The destination UPI ID or bank account name provided exclusively for sending withdrawal credits.
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    2.2 256-Bit SSL Military-Grade Encryption Standards
                  </h3>
                  <p>
                    All communications between your device and our systems, as well as communications with partner exchanges, are protected using modern TLS 1.3 cryptographic protocols with 256-bit Advanced Encryption Standard (AES) cyphers. Database records are kept on isolated, firewall-protected virtual private servers with strict multi-factor role-based access control.
                  </p>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    2.3 Right to Complete Data Erasure (Right to be Forgotten)
                  </h3>
                  <p>
                    Clients retain the absolute legal right to request the permanent deletion of their account records. Upon settling any pending wallet balance, simply notify our compliance desk at{' '}
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="font-bold text-emerald-700 underline">
                      {SUPPORT_EMAIL}
                    </a>{' '}
                    with the subject line &ldquo;Data Erasure Request&rdquo;. All associated telephone logs and transaction records will be permanently purged within 48 business hours.
                  </p>
                </div>
              </section>

              {/* Section 3: Responsible Gaming Guidelines */}
              <section
                id="responsible-gaming"
                aria-labelledby="rg-heading"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs"
              >
                <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Section 03</span>
                </div>

                <h2 id="rg-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6">
                  Responsible Gaming &amp; 18+ Underage Protection
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-li:text-slate-600">
                  <p>
                    Sports trading and fantasy cricket wagering should always remain an exciting recreational entertainment activity. It must never be viewed as an alternative source of employment, guaranteed income, or an avenue to settle existing personal debt.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-900 text-white not-prose my-6 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500 text-rose-400 font-black text-sm flex items-center justify-center shrink-0">
                      18+
                    </div>
                    <div className="text-xs">
                      <strong className="text-white font-bold block mb-0.5">
                        Strict Underage Gambling Prohibition
                      </strong>
                      <span className="text-slate-300 leading-relaxed">
                        Individuals under the age of 18 are strictly prohibited from opening an account, depositing money, or participating in real-money sports betting. We conduct random age verification checks and immediately freeze accounts opened by minors.
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    3.1 Core Principles of Bankroll Discipline
                  </h3>
                  <ol>
                    <li>
                      <strong>Pre-Set Entertainment Budgets:</strong> Determine a fixed monthly leisure budget that you can afford to lose without affecting your living essentials.
                    </li>
                    <li>
                      <strong>Never Chase Losses:</strong> Increasing stake sizes following an unfavorable wager is the primary cause of financial distress. Accept market outcomes and step away.
                    </li>
                    <li>
                      <strong>Avoid Emotional Wagering:</strong> Never place bets under the influence of alcohol, sleep deprivation, or emotional stress.
                    </li>
                    <li>
                      <strong>Scheduled Screen Breaks:</strong> Enforce cooling-off periods during intense match series like the IPL or World Cup to avoid cognitive fatigue.
                    </li>
                  </ol>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    3.2 Mandatory Self-Exclusion Framework
                  </h3>
                  <p>
                    We provide three tiers of self-exclusion tools that can be enacted instantly upon request:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 not-prose my-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-xs font-bold text-slate-900 block mb-1">
                        1. 24–72h Cool-Off
                      </strong>
                      <span className="text-[11px] text-slate-600 leading-relaxed block">
                        Temporary account lock to enforce an immediate pause during volatile match days.
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-xs font-bold text-slate-900 block mb-1">
                        2. 30-Day Suspension
                      </strong>
                      <span className="text-[11px] text-slate-600 leading-relaxed block">
                        Structured extended hiatus with blocked logins and complete communication muting.
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-xs font-bold text-slate-900 block mb-1">
                        3. Permanent Closure
                      </strong>
                      <span className="text-[11px] text-slate-600 leading-relaxed block">
                        Complete blacklisting of credentials, immediate payout of residual funds, and permanent account deactivation.
                      </span>
                    </div>
                  </div>

                  <p>
                    To activate self-exclusion, send a WhatsApp message with the phrase &ldquo;SELF EXCLUSION&rdquo; to our 24/7 hotline or email{' '}
                    <a href={`mailto:${SUPPORT_EMAIL}?subject=Self%20Exclusion%20Request`} className="font-bold text-emerald-700 underline">
                      {SUPPORT_EMAIL}
                    </a>.
                  </p>
                </div>
              </section>

              {/* Section 4: Jurisdictional Notice */}
              <section
                id="jurisdiction"
                aria-labelledby="jurisdiction-heading"
                className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-rose-200/80 shadow-xs"
              >
                <div className="flex items-center gap-2.5 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Section 04</span>
                </div>

                <h2 id="jurisdiction-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  State Regulations &amp; Restricted States
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-li:text-slate-600">
                  <p>
                    Gaming rules vary across India. A few states have specific laws that restrict real-money sports gaming.
                  </p>

                  {/* High Visibility Warning Box */}
                  <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 not-prose my-6">
                    <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
                      <ShieldAlert className="w-5 h-5 text-rose-700 shrink-0" />
                      <span>Restricted States in India</span>
                    </div>
                    <p className="text-xs text-rose-900 leading-relaxed mb-3">
                      Due to state-level regulations, residents of the following states cannot create accounts or deposit on our partner exchanges:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="px-3 py-2 rounded-xl bg-white border border-rose-200 text-center font-bold text-xs text-rose-950">
                        🚫 Andhra Pradesh
                      </div>
                      <div className="px-3 py-2 rounded-xl bg-white border border-rose-200 text-center font-bold text-xs text-rose-950">
                        🚫 Telangana
                      </div>
                      <div className="px-3 py-2 rounded-xl bg-white border border-rose-200 text-center font-bold text-xs text-rose-950">
                        🚫 Assam
                      </div>
                      <div className="px-3 py-2 rounded-xl bg-white border border-rose-200 text-center font-bold text-xs text-rose-950">
                        🚫 Odisha
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg text-slate-900 font-extrabold mt-6 mb-3">
                    4.1 Your Responsibility as a Player
                  </h3>
                  <p>
                    Before creating an account or placing bets, you confirm that:
                  </p>
                  <ul>
                    <li>
                      You do not reside in Andhra Pradesh, Telangana, Assam, Odisha, or any area where online sports betting is prohibited by state law.
                    </li>
                    <li>
                      You are not using VPNs or proxy tools to hide your location.
                    </li>
                    <li>
                      If an account is found to be created from a restricted state, it will be closed and any remaining deposit balance will be refunded to your source account.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Quick Compliance Support Hook (WhatsApp Exclusive) */}
              <section
                id="support-hook"
                aria-labelledby="support-hook-heading"
                className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-xl"
              >
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Section 05</span>
                </div>

                <h2 id="support-hook-heading" className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
                  Have a Compliance or Policy Question?
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mb-8">
                  Our dedicated compliance desk is available 24/7/365 exclusively via our verified WhatsApp hotline and corporate email desk. Contact our senior legal liaison team for immediate assistance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp Primary Hook */}
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi Compliance Desk, I have an inquiry regarding platform legal policies and user verification.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-5 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-98 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-between gap-3 shadow-lg shadow-emerald-950/40 transition-all"
                    aria-label="Contact WhatsApp Compliance Desk"
                  >
                    <div className="flex items-center gap-2.5">
                      <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                      <div className="text-left">
                        <span className="block font-black leading-tight">WhatsApp Compliance Desk</span>
                        <span className="text-[10px] text-slate-800 font-bold block">Response Time: &lt; 120 Seconds</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>

                  {/* Formal Email Desk */}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Legal%20Compliance%20Inquiry`}
                    className="min-h-[48px] px-5 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm flex items-center justify-between gap-3 transition-colors"
                    aria-label="Send Email to Compliance Desk"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div className="text-left">
                        <span className="block font-bold leading-tight">Formal Email Inquiry</span>
                        <span className="text-[10px] text-slate-400 block">{SUPPORT_EMAIL}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0 text-slate-400" />
                  </a>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-slate-400 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Exclusive Gateway: <strong>wa.link/onlinecricketid</strong></span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact')}
                    className="min-h-[48px] text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Visit 24/7 Support Hub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </section>

            </main>

          </div>
        </div>
      </div>
    </>
  );
}
