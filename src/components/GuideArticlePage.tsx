import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  MessageCircle,
  Clock,
  Calendar,
  User,
  List,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  BookmarkCheck,
  ThumbsUp,
  ThumbsDown,
  ShieldCheck,
  Zap,
  Star,
  Share2,
  ExternalLink,
} from 'lucide-react';
import { GuideArticle } from '@/types/platform';
import { GUIDES, ALL_GUIDE_SLUGS, GUIDE_TAKEAWAYS } from '@/data/guidesData';
import Breadcrumbs from './Breadcrumbs';

const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const BASE_URL = 'https://www.onlinecricketid.games';

interface GuideArticlePageProps {
  article: GuideArticle;
  onNavigate: (path: string) => void;
}

const CATEGORY_THEMES: Record<string, { badge: string; border: string; accent: string }> = {
  payments: {
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    border: 'border-emerald-500',
    accent: 'text-emerald-700',
  },
  registration: {
    badge: 'bg-sky-50 text-sky-800 border-sky-200',
    border: 'border-sky-500',
    accent: 'text-sky-700',
  },
  comparisons: {
    badge: 'bg-violet-50 text-violet-800 border-violet-200',
    border: 'border-violet-500',
    accent: 'text-violet-700',
  },
  legal: {
    badge: 'bg-amber-50 text-amber-800 border-amber-200',
    border: 'border-amber-500',
    accent: 'text-amber-700',
  },
  strategy: {
    badge: 'bg-rose-50 text-rose-800 border-rose-200',
    border: 'border-rose-500',
    accent: 'text-rose-700',
  },
  troubleshooting: {
    badge: 'bg-slate-100 text-slate-700 border-slate-200',
    border: 'border-slate-500',
    accent: 'text-slate-700',
  },
};



export default function GuideArticlePage({ article, onNavigate }: GuideArticlePageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTOC, setActiveTOC] = useState<string>('');
  const [userFeedback, setUserFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top on article change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTOC(article.tableOfContents[0]?.id ?? '');
    setUserFeedback(null);
  }, [article.slug, article.tableOfContents]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active TOC item based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTOC(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -65% 0px' }
    );

    article.tableOfContents.forEach(({ id }) => {
      const el = contentRef.current?.querySelector(`#${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Intercept internal link clicks inside dangerouslySetInnerHTML to prevent full page reloads
  const handleProseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as HTMLElement).closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    // In-page hash jump
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.substring(1));
      return;
    }

    // Relative internal link (e.g. /laser247-cricket-id, /reviews/laser247)
    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const canonicalUrl = `${BASE_URL}/guides/${article.slug}`;
  const theme = CATEGORY_THEMES[article.category] ?? {
    badge: 'bg-slate-100 text-slate-700 border-slate-200',
    border: 'border-emerald-500',
    accent: 'text-emerald-700',
  };

  // Sibling articles (same category or next in list)
  const relatedSlugs = ALL_GUIDE_SLUGS
    .filter((s) => s !== article.slug)
    .sort((a, b) => {
      // Prioritize same category
      if (GUIDES[a].category === article.category && GUIDES[b].category !== article.category) return -1;
      if (GUIDES[b].category === article.category && GUIDES[a].category !== article.category) return 1;
      return 0;
    })
    .slice(0, 3);

  // Previous & Next navigation
  const currentIndex = ALL_GUIDE_SLUGS.indexOf(article.slug);
  const prevSlug = currentIndex > 0 ? ALL_GUIDE_SLUGS[currentIndex - 1] : null;
  const nextSlug = currentIndex < ALL_GUIDE_SLUGS.length - 1 ? ALL_GUIDE_SLUGS[currentIndex + 1] : null;
  const prevArticle = prevSlug ? GUIDES[prevSlug] : null;
  const nextArticle = nextSlug ? GUIDES[nextSlug] : null;

  const takeaways = GUIDE_TAKEAWAYS[article.slug] ?? {
    highlights: [
      'Official verified instructions tested directly with live exchange partner APIs.',
      'Instant WhatsApp assistance with under 120 seconds response time.',
      '₹100 minimum deposit threshold across all certified partner platforms.',
      'Zero hidden deductions on bank and UPI cashouts.',
    ],
    keyPoints: article.tableOfContents.map((t) => t.label).slice(0, 4),
  };

  // ── JSON-LD Schemas ──────────────────────────────────────────────────────
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    author: {
      '@type': 'Organization',
      name: article.authorEntity,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Online Cricket ID',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/og-image.svg`,
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: article.categoryLabel, item: `${BASE_URL}/guides#${article.category}` },
      { '@type': 'ListItem', position: 4, name: article.title, item: canonicalUrl },
    ],
  };

  return (
    <div className="pt-2 pb-24 md:pb-16 bg-slate-50 min-h-screen relative">
      {/* ── Fixed Reading Progress Bar ──────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── SEO Meta ────────────────────────────────────────────────────────── */}
      <Helmet>
        <title>{article.title} | Online Cricket ID Knowledge Base</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Online Cricket ID" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${BASE_URL}/og-image.svg`} />
        <meta property="article:published_time" content={article.publishDate} />
        <meta property="article:author" content={article.authorEntity} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-image.svg`} />

        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ── Breadcrumbs ─────────────────────────────────────────────────────── */}
      <Breadcrumbs
        items={[
          { label: 'Guides Hub', href: '/guides' },
          { label: article.categoryLabel, href: '/guides' },
          { label: article.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Article (2/3), Right Sticky Sidebar (1/3) */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">

          {/* ════════════════════════════════════════════════════════════════════
              MAIN ARTICLE COLUMN (8 cols on lg)
          ════════════════════════════════════════════════════════════════════ */}
          <article className="lg:col-span-8">

            {/* ── Editorial Article Header ───────────────────────────────────── */}
            <header className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Category Pill & Share */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badge}`}
                >
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  {article.categoryLabel}
                </span>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors min-h-[36px]"
                  title="Copy link to article"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                </button>
              </div>

              {/* H1 Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                {article.title}
              </h1>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <User className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{article.authorEntity}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <time dateTime={article.publishDate}>
                    {new Date(article.publishDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Verified Guide Quality Banner */}
              <div className="mt-4 flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <BadgeCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-emerald-900">
                  <span className="font-bold">Verified Guide:</span> Tested and verified for 2026. Every step for instant UPI deposits, fast withdrawals, and official cricket ID setup is checked and updated regularly.
                </div>
              </div>
            </header>

            {/* ── Executive Summary / Key Takeaways (TL;DR Box) ──────────────── */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-7 text-white shadow-sm mb-6 border border-slate-700/80">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                    Quick Summary (Key Points)
                  </h2>
                  <p className="text-xs text-slate-300">Everything you need to know in 30 seconds</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {takeaways.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* In-Page Quick Jump Section Pills */}
              {article.tableOfContents.length > 0 && (
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Jump Directly to Section:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {article.tableOfContents.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-emerald-500 hover:text-white text-slate-200 transition-all font-medium flex items-center gap-1.5"
                      >
                        <span className="text-emerald-300 text-[10px] font-bold">#{idx + 1}</span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Mobile-Only Table of Contents Dropdown ──────────────────────── */}
            {article.tableOfContents.length > 0 && (
              <details className="lg:hidden bg-white border border-slate-200 rounded-2xl shadow-xs mb-6 overflow-hidden group">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none font-bold text-slate-800 text-sm select-none">
                  <span className="flex items-center gap-2">
                    <List className="w-4 h-4 text-emerald-600" />
                    Table of Contents ({article.tableOfContents.length} Sections)
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <nav aria-label="Table of contents" className="border-t border-slate-100 px-4 py-3 bg-slate-50/50">
                  <ol className="space-y-1.5">
                    {article.tableOfContents.map((item, i) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left text-xs text-slate-700 hover:text-emerald-700 py-2 px-2.5 rounded-lg hover:bg-white flex items-center gap-2.5 transition-colors"
                        >
                          <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          <span className="line-clamp-1">{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ol>
                </nav>
              </details>
            )}

            {/* ── Main Article Body with Intercepted Internal Links ──────────── */}
            <div
              ref={contentRef}
              onClick={handleProseClick}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-9 mb-6 prose prose-slate prose-base max-w-none
                prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-slate-900
                prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-3 prose-h2:mt-10 prose-h2:first:mt-0
                prose-h3:text-lg prose-h3:text-slate-800 prose-h3:mt-6
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:my-4
                prose-ul:my-4 prose-ul:space-y-2
                prose-li:text-slate-600 prose-li:leading-relaxed
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-table:text-xs sm:prose-table:text-sm prose-table:my-6 prose-table:border prose-table:border-slate-200 prose-table:rounded-xl prose-table:overflow-hidden
                prose-thead:bg-slate-100/80
                prose-th:p-3 prose-th:font-bold prose-th:text-slate-900 prose-th:border-b prose-th:border-slate-200
                prose-td:p-3 prose-td:border-b prose-td:border-slate-100 prose-td:text-slate-700
                prose-a:text-emerald-700 prose-a:font-semibold prose-a:underline hover:prose-a:text-emerald-600 hover:prose-a:decoration-2 transition-colors"
              dangerouslySetInnerHTML={{ __html: article.htmlContent }}
            />

            {/* ── Was this Guide Helpful? Interactive Rating Feedback ───────── */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    Did you find this guide helpful?
                  </h3>
                  <p className="text-xs text-slate-500">
                    Your feedback helps our editorial team maintain accurate, up-to-date betting guides.
                  </p>
                </div>

                {userFeedback ? (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    {userFeedback === 'helpful'
                      ? 'Thank you! Glad this tutorial assisted you.'
                      : 'Thanks for the feedback. Our team will review this article.'}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setUserFeedback('helpful')}
                      className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                    >
                      <ThumbsUp className="w-4 h-4 text-emerald-600" />
                      Yes, very helpful
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserFeedback('not-helpful')}
                      className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-600 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                    >
                      <ThumbsDown className="w-4 h-4 text-slate-400" />
                      Needs improvement
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* ── Previous / Next Article Navigation ────────────────────────── */}
            {(prevArticle || nextArticle) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {prevArticle ? (
                  <a
                    href={`/guides/${prevArticle.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/guides/${prevArticle.slug}`);
                    }}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-all flex flex-col justify-between group min-h-[90px]"
                  >
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                      <ArrowLeft className="w-3.5 h-3.5" /> Previous Guide
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mt-1">
                      {prevArticle.title}
                    </span>
                  </a>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {nextArticle && (
                  <a
                    href={`/guides/${nextArticle.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/guides/${nextArticle.slug}`);
                    }}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-all flex flex-col justify-between text-right group min-h-[90px]"
                  >
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-end gap-1 group-hover:text-emerald-600 transition-colors">
                      Next Guide <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mt-1">
                      {nextArticle.title}
                    </span>
                  </a>
                )}
              </div>
            )}

            {/* ── Related Knowledge Base Guides ─────────────────────────────── */}
            {relatedSlugs.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900">
                      Related Guides &amp; Tutorials
                    </h2>
                    <p className="text-xs text-slate-500">
                      Continue mastering online cricket betting with verified walkthroughs
                    </p>
                  </div>
                  <a
                    href="/guides"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/guides');
                    }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 min-h-[36px]"
                  >
                    View All Guides <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedSlugs.map((s) => {
                    const g = GUIDES[s];
                    return (
                      <a
                        key={s}
                        href={`/guides/${s}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(`/guides/${s}`);
                        }}
                        className="text-left group p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-all flex flex-col justify-between min-h-[120px]"
                      >
                        <div>
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 mb-2">
                            {g.categoryLabel}
                          </span>
                          <h3 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                            {g.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-100">
                          <span>{g.readTime}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Back to Guides Link */}
            <div className="pt-2">
              <a
                href="/guides"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/guides');
                }}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-700 text-xs font-bold transition-colors min-h-[44px] px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Knowledge Base Guides
              </a>
            </div>
          </article>

          {/* ════════════════════════════════════════════════════════════════════
              RIGHT STICKY SIDEBAR (4 cols on lg)
          ════════════════════════════════════════════════════════════════════ */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-5">

              {/* Desktop Table of Contents */}
              {article.tableOfContents.length > 0 && (
                <nav
                  aria-label="Table of contents"
                  className="bg-white rounded-3xl border border-slate-200 shadow-xs p-5"
                >
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                    <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      <List className="w-4 h-4 text-emerald-600" />
                      In This Article
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {article.tableOfContents.length} parts
                    </span>
                  </div>

                  <ol className="space-y-1">
                    {article.tableOfContents.map((item, i) => {
                      const isActive = activeTOC === item.id;
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left text-xs py-2 px-2.5 rounded-xl flex items-center gap-2.5 transition-all ${
                              isActive
                                ? 'bg-emerald-50 text-emerald-800 font-bold shadow-2xs'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-md text-[10px] font-bold flex items-center justify-center shrink-0 ${
                                isActive
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className="line-clamp-1 flex-1">{item.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              )}

              {/* Recommended Verified Platforms Widget */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-5">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Verified Exchanges
                  </h4>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Tested 2026
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {[
                    {
                      name: 'Laser247 Cricket ID',
                      rating: '4.9/5',
                      badge: 'Fastest UPI (2m)',
                      reviewHref: '/reviews/laser247',
                      idHref: '/laser247-cricket-id',
                    },
                    {
                      name: 'Lotus365 Cricket ID',
                      rating: '4.8/5',
                      badge: '100% Bonus Match',
                      reviewHref: '/reviews/lotus365',
                      idHref: '/lotus365-cricket-id',
                    },
                    {
                      name: 'Betbhai9 Cricket ID',
                      rating: '4.8/5',
                      badge: 'High Bet Limits',
                      reviewHref: '/reviews/betbhai9',
                      idHref: '/betbhai9-cricket-id',
                    },
                  ].map((plat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">{plat.name}</span>
                        <span className="text-[10px] font-extrabold text-amber-600 flex items-center gap-0.5">
                          ★ {plat.rating}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span className="text-emerald-700 font-medium">{plat.badge}</span>
                        <div className="flex items-center gap-2">
                          <a
                            href={plat.reviewHref}
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate(plat.reviewHref);
                            }}
                            className="text-slate-600 hover:text-emerald-700 font-semibold underline"
                          >
                            Review
                          </a>
                          <span>•</span>
                          <a
                            href={plat.idHref}
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate(plat.idHref);
                            }}
                            className="text-emerald-700 hover:text-emerald-800 font-bold"
                          >
                            Get ID
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-xs active:scale-95"
                  aria-label="Get Instant Cricket ID on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Instant WhatsApp Activation
                </a>
              </div>

              {/* 24/7 Support Helpline Quick Card */}
              <div className="bg-slate-900 rounded-3xl p-5 text-white shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-xs uppercase tracking-wider text-emerald-400">
                    Official 24/7 Support
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-white mb-1.5">
                  Need Help with an ID or Withdrawal?
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Our friendly support team responds in under 2 minutes on WhatsApp to set up your account, process deposits, or help with withdrawals.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    WhatsApp Live Support (24/7)
                  </a>
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/contact');
                    }}
                    className="min-h-[40px] flex items-center justify-center gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-all"
                  >
                    Contact Support Team <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* YMYL Regulatory Disclaimer */}
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4">
                <p className="text-amber-900 text-xs font-bold mb-1">⚖️ Compliance &amp; Legal Notice</p>
                <p className="text-amber-800 text-[11px] leading-relaxed mb-2">
                  18+ only. Real-money gaming is subject to state-level regulations under the Online Gaming Act, 2025. Please review our mandatory legal disclosure.
                </p>
                <a
                  href="/legal"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/legal');
                  }}
                  className="text-amber-900 font-bold text-xs underline hover:text-amber-700"
                >
                  Read Legal &amp; Responsible Gaming Policy &rarr;
                </a>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
