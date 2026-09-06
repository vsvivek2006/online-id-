import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  ChevronDown, 
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';
import { SEOPageData, SEO_PAGES } from '@/data/seoPages';
import Breadcrumbs from './Breadcrumbs';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const BASE_URL = 'https://www.onlinecricketid.games';

interface SEOPageTemplateProps {
  page: SEOPageData;
  onNavigate: (path: string) => void;
}

export default function SEOPageTemplate({ page, onNavigate }: SEOPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page.slug]);

  // Structured Data Schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
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
        name: page.categoryLabel,
        item: `${BASE_URL}/#explore-ids`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.h1,
        item: `${BASE_URL}/${page.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Online Cricket ID',
      url: BASE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: '100',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  const canonicalUrl = `${BASE_URL}/${page.slug}`;

  return (
    <article className="pt-2 sm:pt-4 pb-16 bg-slate-50 min-h-screen">
      {/* Declarative SEO Metadata via react-helmet-async */}
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="keywords" content={page.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Online Cricket ID" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${BASE_URL}/og-image.svg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.metaDescription} />
        <meta name="twitter:image" content={`${BASE_URL}/og-image.svg`} />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: page.categoryLabel, href: '/#explore-ids' },
          { label: page.h1 },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{page.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span className="text-slate-600 font-medium">Verified Partner 2026</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
            {page.h1}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            {page.intro}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl shadow-xs hover:shadow-sm transition-all text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Get ID on WhatsApp
            </a>

            <button
              type="button"
              onClick={() => onNavigate('/demo-cricket-id')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-200 transition-all text-xs sm:text-sm shadow-xs"
            >
              Free Demo Account
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </button>
          </div>

          {/* Quick trust metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="block font-bold text-slate-900">2 Mins</span>
                <span className="text-slate-500 text-[11px]">Activation</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="block font-bold text-slate-900">2 - 15 Mins</span>
                <span className="text-slate-500 text-[11px]">UPI Payout</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="block font-bold text-slate-900">₹100 Only</span>
                <span className="text-slate-500 text-[11px]">Min Deposit</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="block font-bold text-slate-900">24/7 Live</span>
                <span className="text-slate-500 text-[11px]">WhatsApp Desk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Cols: Content and Highlights */}
          <div className="lg:col-span-2 space-y-8">
            {/* Highlights Cards */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                Key Highlights &amp; Advantages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.highlights.map((h, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-slate-900 font-bold text-sm sm:text-base mb-1">{h.title}</h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In-depth Editorial Content Sections */}
            {page.contentSections.map((sec, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-xs space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">{sec.title}</h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {/* 3 Step Activation Guide */}
            <div className="bg-emerald-50/60 rounded-2xl p-5 sm:p-7 border border-emerald-200 space-y-5">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                How to Activate Your Account in <span className="text-emerald-700">3 Easy Steps</span>
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5">Message Our WhatsApp Desk</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Click any WhatsApp button to initiate chat with our verified team. State that you want a {page.h1}.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5">Send Initial ₹100 Deposit</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Scan the provided QR code using PhonePe, Google Pay, or Paytm and send the payment screenshot.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5">Get Instant Login &amp; Play</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Receive your username, password, and URL within 120 seconds. Access live markets immediately!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-emerald-800 uppercase tracking-wider font-bold block">Ready to start?</span>
                  <span className="text-slate-900 font-bold text-xs sm:text-sm">Accounts activated in under 2 minutes</span>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-center shadow-xs transition-all text-xs sm:text-sm"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* FAQs Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Frequently Asked <span className="text-emerald-700">Questions</span>
              </h2>
              <div className="space-y-2.5">
                {page.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-emerald-600 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Col: Specifications & Fast Sticky Box */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm sticky top-24">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Platform Overview
              </h3>

              <div className="divide-y divide-slate-100 mb-5">
                {page.specs.map((s, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500">{s.label}</span>
                    <span className="font-bold text-slate-900 text-right">{s.value}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl shadow-xs transition-all text-xs sm:text-sm mb-3"
              >
                Instant WhatsApp Activation
              </a>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                100% Genuine credentials with 24/7 dedicated support desk. Zero deduction on UPI cashouts.
              </p>

              {/* Related Pages Widget */}
              {page.relatedSlugs && page.relatedSlugs.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <h4 className="text-xs uppercase tracking-wider text-emerald-800 font-bold mb-2.5">
                    Explore Related IDs
                  </h4>
                  <div className="space-y-1.5">
                    {page.relatedSlugs.map((relSlug) => {
                      const relPage = SEO_PAGES[relSlug];
                      if (!relPage) return null;
                      return (
                        <a
                          key={relSlug}
                          href={`/${relSlug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(`/${relSlug}`);
                          }}
                          className="w-full text-left p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 border border-slate-200/70 hover:border-emerald-300 transition-all flex items-center justify-between group"
                        >
                          <span className="text-xs text-slate-700 group-hover:text-emerald-900 font-medium truncate">
                            {relPage?.h1 ? relPage.h1.replace(/ - .*/, '') : relSlug}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Contextual Guides Widget */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-xs uppercase tracking-wider text-slate-900 font-bold mb-2.5">
                  Helpful Player Guides
                </h4>
                <div className="space-y-2">
                  <a
                    href="/guides/how-to-deposit-upi"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/guides/how-to-deposit-upi');
                    }}
                    className="block p-2 rounded-lg bg-emerald-50/60 hover:bg-emerald-100/70 border border-emerald-200/70 transition-all text-xs font-semibold text-emerald-900"
                  >
                    ⚡ How to Deposit via UPI in 60s &rarr;
                  </a>
                  <a
                    href="/guides/how-to-withdraw-upi"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/guides/how-to-withdraw-upi');
                    }}
                    className="block p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 border border-slate-200/70 hover:border-emerald-300 transition-all text-xs font-medium text-slate-700 hover:text-emerald-900"
                  >
                    💰 2–15 Min Cashout Process &rarr;
                  </a>
                  <a
                    href="/guides/laser247-vs-lotus365"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/guides/laser247-vs-lotus365');
                    }}
                    className="block p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 border border-slate-200/70 hover:border-emerald-300 transition-all text-xs font-medium text-slate-700 hover:text-emerald-900"
                  >
                    📊 Laser247 vs Lotus365 Comparison &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Link Mesh / Related Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
            Browse Popular <span className="text-emerald-700">Cricket ID Categories &amp; Tutorials</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'IPL Cricket ID', href: '/ipl-cricket-id' },
              { label: 'Laser247 ID', href: '/laser247-cricket-id' },
              { label: 'Lotus365 ID', href: '/lotus365-cricket-id' },
              { label: 'Betbhai9 ID', href: '/betbhai9-cricket-id' },
              { label: 'Silver Exchange', href: '/silver-exchange-id' },
              { label: 'Diamond Exchange', href: '/diamond-exchange-id' },
              { label: 'Instant Withdrawal', href: '/instant-withdrawal-cricket-id' },
              { label: 'Demo Cricket ID', href: '/demo-cricket-id' },
              { label: 'All Cricket IDs', href: '/all-cricket-id' },
              { label: 'Knowledge Base Guides', href: '/guides' },
              { label: 'UPI Deposit Guide', href: '/guides/how-to-deposit-upi' },
              { label: 'Fast Cashout Guide', href: '/guides/how-to-withdraw-upi' },
              { label: '2026 Legal Status', href: '/guides/cricket-betting-legal-india' },
            ].map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(cat.href);
                }}
                className="min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-semibold inline-flex items-center transition-all border border-slate-200/80 active:scale-98"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
