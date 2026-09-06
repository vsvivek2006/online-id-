import { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import TopAnnouncementBar from '@/components/TopAnnouncementBar';
import StickyHeader from '@/components/StickyHeader';
import HeroSection from '@/components/HeroSection';
import LivePayoutTicker from '@/components/LivePayoutTicker';
import PlatformGrid from '@/components/PlatformGrid';
import TrustEEATBlock from '@/components/TrustEEATBlock';
import Testimonials from '@/components/Testimonials';
import SEODirectory from '@/components/SEODirectory';
import FAQs from '@/components/FAQs';
import ComplianceFooter from '@/components/ComplianceFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';

import { SEO_PAGES } from '@/data/seoPages';
import { PLATFORM_REVIEWS } from '@/data/platformReviews';
import { GUIDES } from '@/data/guidesData';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

// Route-level dynamic code-splitting to minimize initial bundle size
const SEOPageTemplate = lazy(() => import('@/components/SEOPageTemplate'));
const PlatformReviewPage = lazy(() => import('@/components/PlatformReviewPage'));
const GuidesHub = lazy(() => import('@/components/GuidesHub'));
const GuideArticlePage = lazy(() => import('@/components/GuideArticlePage'));
const ContactHub = lazy(() => import('@/components/ContactHub'));
const LegalPage = lazy(() => import('@/components/LegalPage'));

function RouteLoadingFallback() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="w-10 h-10 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4" />
      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Loading...</span>
    </div>
  );
}

const BASE_URL = 'https://www.onlinecricketid.games';

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname.replace(/\/$/, '') || '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const cleanPath = window.location.pathname.replace(/\/$/, '') || '/';
      setCurrentPath(cleanPath);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
      return;
    }

    if (path.startsWith('#') || (path.startsWith('/#') && currentPath === '/')) {
      const hash = path.replace(/^\//, '');
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const cleanPath = path.replace(/\/$/, '') || '/';
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPlatforms = () => {
    if (currentPath !== '/') {
      navigate('/#platforms');
    } else {
      const el = document.querySelector('#platforms');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Find if current path matches an SEO page
  const slug = currentPath.replace(/^\//, '');
  const pageData = SEO_PAGES[slug];

  // Find if current path matches a platform review page (/reviews/[slug])
  const reviewSlug = currentPath.startsWith('/reviews/')
    ? currentPath.replace(/^\/reviews\//, '')
    : null;
  const reviewData = reviewSlug ? PLATFORM_REVIEWS[reviewSlug] : null;

  // Find if current path matches a guide article (/guides/[slug])
  const guideSlug = currentPath.startsWith('/guides/')
    ? currentPath.replace(/^\/guides\//, '')
    : null;
  const guideArticle = guideSlug ? GUIDES[guideSlug] : null;

  // Global WebSite Schema JSON-LD for Homepage
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Online Cricket ID',
    url: `${BASE_URL}/`,
    description: 'India’s #1 verified Online Cricket ID Provider. Instant activation via WhatsApp for Laser247, Lotus365, Betbhai9, Silver Exchange, and IPL 2026 cricket IDs.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Root / Default SEO Meta Management */}
      {currentPath === '/' && (
        <Helmet>
          <title>Online Cricket ID - Best Cricket ID Provider | Get IPL ID 2026</title>
          <meta
            name="description"
            content="Get your verified Online Cricket ID, IPL Cricket ID & All Cricket IDs from top provider. Instant 2-min activation via WhatsApp with 24/7 support & fast UPI cashouts."
          />
          <meta
            name="keywords"
            content="Online Cricket ID, Cricket ID, Online Betting ID, Online Cricket ID Whatsapp Number, Cricket Id Online, Best Online Cricket ID, Ipl Cricket Id, All cricket Id, Cricket Id Provider"
          />
          <link rel="canonical" href={`${BASE_URL}/`} />
          <meta name="robots" content="index, follow" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Online Cricket ID" />
          <meta property="og:title" content="Online Cricket ID - Best Cricket ID Provider | Get IPL ID 2026" />
          <meta
            property="og:description"
            content="Get your verified Online Cricket ID, IPL Cricket ID & All Cricket IDs from top provider. Instant 2-min activation via WhatsApp with 24/7 support & fast UPI cashouts."
          />
          <meta property="og:url" content={`${BASE_URL}/`} />
          <meta property="og:image" content={`${BASE_URL}/og-image.svg`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Online Cricket ID - Best Cricket ID Provider | Get IPL ID 2026" />
          <meta
            name="twitter:description"
            content="Get your verified Online Cricket ID, IPL Cricket ID & All Cricket IDs from top provider. Instant 2-min activation via WhatsApp with 24/7 support."
          />
          <meta name="twitter:image" content={`${BASE_URL}/og-image.svg`} />

          {/* WebSite Schema */}
          <script type="application/ld+json">
            {JSON.stringify(websiteSchema)}
          </script>
        </Helmet>
      )}

      {/* Top Notice Bar */}
      <TopAnnouncementBar />

      {/* Sticky Top Header with Direct Navigation Links */}
      <StickyHeader
        onNavigate={navigate}
        currentPath={currentPath}
      />

      {/* Main Viewport Content */}
      <main>
        {currentPath === '/' ? (
          <>
            {/* Hero Section: Bold headline, Get ID CTA, and immediate trust badges */}
            <HeroSection onExploreClick={scrollToPlatforms} onNavigate={navigate} />

            {/* Zero-CLS Verified Payout Stream Ticker */}
            <LivePayoutTicker />

            {/* 2-Column Mobile Grid of Platforms with strict typing */}
            <PlatformGrid
              onSelectPlatform={navigate}
            />

            {/* Trust & E-E-A-T Block: 3-step visual + 256-bit SSL Banking Security */}
            <TrustEEATBlock onNavigate={navigate} />

            {/* Testimonials: Verified User Reviews */}
            <Testimonials onNavigate={navigate} />

            {/* Programmatic Master Directory of 88+ IDs */}
            <SEODirectory onNavigate={navigate} />

            {/* Common FAQs */}
            <FAQs onNavigate={navigate} />
          </>
        ) : (
          <Suspense fallback={<RouteLoadingFallback />}>
            {currentPath === '/contact' || currentPath === '/contact-us' ? (
              <ContactHub onNavigate={navigate} />
            ) : currentPath === '/legal' || currentPath === '/compliance' ? (
              <LegalPage onNavigate={navigate} />
            ) : currentPath === '/guides' ? (
              <GuidesHub onNavigate={navigate} />
            ) : guideArticle ? (
              <GuideArticlePage article={guideArticle} onNavigate={navigate} />
            ) : reviewData ? (
              <>
                <LivePayoutTicker />
                <PlatformReviewPage review={reviewData} onNavigate={navigate} />
              </>
            ) : pageData ? (
              <>
                <LivePayoutTicker />
                <SEOPageTemplate page={pageData} onNavigate={navigate} />
              </>
            ) : (
              <div className="pt-32 pb-24 px-4 text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-emerald-700" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Page Not Found</h1>
                <p className="text-slate-600 text-sm sm:text-base mb-6">
                  The cricket ID or guide you are looking for might have been moved or updated.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-xs"
                  >
                    <Home className="w-4 h-4" />
                    Return to Homepage
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/all-cricket-id')}
                    className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold rounded-xl border border-slate-200 transition-all shadow-xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    View All Cricket IDs
                  </button>
                </div>
              </div>
            )}
          </Suspense>
        )}
      </main>

      {/* Compliance Footer: verified business info & legal disclosure */}
      <ComplianceFooter onNavigate={navigate} />

      {/* Desktop Floating Scroll-to-Top in Top Right */}
      <ScrollToTop />

      {/* Floating WhatsApp on Desktop */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
