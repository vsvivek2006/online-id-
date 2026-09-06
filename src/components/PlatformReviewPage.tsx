import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  MessageCircle,
  Star,
  BadgeCheck,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ArrowRight,
  Zap,
  Clock,
  ShieldCheck,
  ArrowLeft,
} from 'lucide-react';
import { PlatformReviewData } from '@/types/platform';
import { SEO_PAGES } from '@/data/seoPages';
import Breadcrumbs from './Breadcrumbs';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const BASE_URL = 'https://www.onlinecricketid.games';

interface PlatformReviewPageProps {
  review: PlatformReviewData;
  onNavigate: (path: string) => void;
}

export default function PlatformReviewPage({ review, onNavigate }: PlatformReviewPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scroll to top on review change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [review.slug]);

  const canonicalUrl = `${BASE_URL}/reviews/${review.slug}`;

  const whatsappText = encodeURIComponent(
    `Hello, I want to create a verified Cricket ID for ${review.name} with minimum deposit of ${review.minDeposit}. Please activate my account.`
  );
  const whatsappHref = `${WHATSAPP_LINK}?text=${whatsappText}`;

  // ── JSON-LD Schemas ──────────────────────────────────────────────────────
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: review.metaTitle,
    reviewBody: review.editorialSummary,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.overallRating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Organization',
      name: 'Online Cricket ID',
      url: BASE_URL,
    },
    itemReviewed: {
      '@type': 'Service',
      name: review.name,
      description: review.tagline,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: review.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${BASE_URL}/reviews` },
      { '@type': 'ListItem', position: 3, name: review.name, item: canonicalUrl },
    ],
  };

  // Render star icons for a given rating (0–5)
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
      />
    ));

  return (
    <article className="pt-4 pb-24 md:pb-16 bg-slate-50 min-h-screen">
      {/* ── SEO Meta ────────────────────────────────────────────────────────── */}
      <Helmet>
        <title>{review.metaTitle}</title>
        <meta name="description" content={review.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Online Cricket ID" />
        <meta property="og:title" content={review.metaTitle} />
        <meta property="og:description" content={review.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${BASE_URL}/og-image.svg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={review.metaTitle} />
        <meta name="twitter:description" content={review.metaDescription} />

        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ── Breadcrumbs ─────────────────────────────────────────────────────── */}
      <Breadcrumbs
        items={[
          { label: 'Reviews', href: '/#explore-ids' },
          { label: review.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══ BLOCK 1: REVIEW HERO ══════════════════════════════════════════════ */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">

            {/* Logo Avatar — explicit w/h for zero CLS */}
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 aspect-square rounded-2xl ${review.logoBg} text-white font-black text-base sm:text-lg flex items-center justify-center border-2 ${review.logoAccent} shadow-sm shrink-0`}
              aria-label={`${review.name} logo`}
            >
              {review.logoText}
            </div>

            <div className="flex-1 min-w-0">
              {/* Verified badge + name */}
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {review.name} Review 2026
                </h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold shrink-0">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm mb-3 leading-relaxed">{review.tagline}</p>

              {/* Star rating row */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">{renderStars(review.overallRating)}</div>
                <span className="font-extrabold text-slate-900 text-sm">{review.overallRating}</span>
                <span className="text-slate-500 text-xs">({review.reviewCount.toLocaleString()} verified reviews)</span>
              </div>

              {/* Quick stats grid — fixed min-h for zero CLS */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, label: 'Min Deposit', value: review.minDeposit },
                  { icon: <Clock className="w-4 h-4 text-emerald-600" />, label: 'Payout', value: review.payoutSpeed },
                  { icon: <Zap className="w-4 h-4 text-emerald-600" />, label: 'Activation', value: review.activationTime },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="min-h-[60px] flex flex-col items-center justify-center bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-center"
                  >
                    {stat.icon}
                    <span className="block font-extrabold text-slate-900 text-xs sm:text-sm mt-1">{stat.value}</span>
                    <span className="block text-slate-500 text-[10px]">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xs transition-all active:scale-98"
                  aria-label={`Get ${review.name} ID on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  Get {review.name} ID on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate(`/${review.detailPageSlug}`)}
                  className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-200 transition-all"
                >
                  <span>View Platform Details</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Expert Verdict strip */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 aspect-square rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                <BadgeCheck className="w-4 h-4 text-emerald-700" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
                  Expert Editorial Verdict
                </span>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{review.editorialSummary}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ BLOCK 2: SCORE CARD ══════════════════════════════════════════════ */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-7 mb-6">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-5">
            {review.name} — Performance Score Card
          </h2>
          <div className="space-y-4">
            {review.scoreCard.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">{item.note}</span>
                    <span className="text-sm font-extrabold text-emerald-700">{item.score}/10</span>
                  </div>
                </div>
                {/* CSS-only progress bar — explicit height for zero CLS */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all"
                    style={{ width: `${item.score * 10}%` }}
                    role="progressbar"
                    aria-valuenow={item.score}
                    aria-valuemin={0}
                    aria-valuemax={10}
                    aria-label={`${item.label}: ${item.score} out of 10`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ BLOCK 3: PROS & CONS ═════════════════════════════════════════════ */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4">
            {review.name} — Pros &amp; Cons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Pros */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-5">
              <h3 className="text-sm font-extrabold text-emerald-800 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Pros
              </h3>
              <ul className="space-y-2.5">
                {review.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pro.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50 border border-red-200/80 rounded-2xl p-5">
              <h3 className="text-sm font-extrabold text-red-800 mb-3 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-500" />
                Cons
              </h3>
              <ul className="space-y-2.5">
                {review.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-red-900">
                    <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{con.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ══ BLOCK 4: EDITORIAL CONTENT SECTIONS ══════════════════════════════ */}
        {review.contentSections.map((section, idx) => (
          <section
            key={idx}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-7 mb-6"
          >
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">{section.title}</h2>
            <div className="space-y-3">
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* ══ BLOCK 5: PLATFORM FAQ — CSS-HIDDEN ACCORDION ════════════════════ */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-7 mb-6">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mb-5">
            {review.name} — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {review.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-slate-200/90 rounded-xl overflow-hidden bg-slate-50/60"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-4 flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm min-h-[48px]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-emerald-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {/* Always in DOM — CSS max-h toggle for Googlebot indexing */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isOpen ? 'max-h-48' : 'max-h-0'
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <div className="px-4 pb-4 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══ BLOCK 6: RELATED PAGES & GUIDES ═════════════════════════════════ */}
        {review.relatedSlugs.length > 0 && (
          <section className="mb-6">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4">Related Cricket IDs &amp; Comparison Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {review.relatedSlugs.map((slug) => {
                const page = SEO_PAGES[slug];
                if (!page) return null;
                return (
                  <a
                    key={slug}
                    href={`/${slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/${slug}`);
                    }}
                    className="text-left group p-4 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-400 hover:shadow-xs transition-all min-h-[60px] flex items-center justify-between gap-2"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-2 flex-1">
                      {page.h1.replace(/ - .*/, '')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                  </a>
                );
              })}
            </div>

            {/* Contextual Guides Row */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-2">
                Recommended Player Guides for {review.name}
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="/guides/how-to-deposit-upi"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/guides/how-to-deposit-upi');
                  }}
                  className="text-xs font-medium text-emerald-800 hover:text-emerald-900 bg-white px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-300 transition-colors"
                >
                  ⚡ Deposit via UPI Walkthrough &rarr;
                </a>
                <a
                  href="/guides/how-to-withdraw-upi"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/guides/how-to-withdraw-upi');
                  }}
                  className="text-xs font-medium text-emerald-800 hover:text-emerald-900 bg-white px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-300 transition-colors"
                >
                  💰 Fast Withdrawal Guide &rarr;
                </a>
                <a
                  href="/guides/laser247-vs-lotus365"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/guides/laser247-vs-lotus365');
                  }}
                  className="text-xs font-medium text-emerald-800 hover:text-emerald-900 bg-white px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-300 transition-colors"
                >
                  📊 Laser247 vs Lotus365 Head-to-Head &rarr;
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ── Back link ─────────────────────────────────────────────────────── */}
        <div className="mt-2">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-emerald-700 text-xs font-bold transition-colors min-h-[48px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Reviews
          </button>
        </div>
      </div>
    </article>
  );
}
