import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_PAGES, ALL_SLUGS } from '../src/data/seoData.js';
import { GUIDES, ALL_GUIDE_SLUGS, GUIDE_TAKEAWAYS } from '../src/data/guidesData.js';
import { PLATFORM_REVIEWS } from '../src/data/platformReviews.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');
const publicDir = path.resolve(projectRoot, 'public');

const BASE_URL = 'https://www.onlinecricketid.games';
const TODAY = new Date().toISOString().split('T')[0];

function generateHomeHtml(baseTemplate) {
  let html = baseTemplate;

  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the minimum amount to get an Online Cricket ID?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most platforms require ₹100 to ₹500. We offer ₹100 minimum deposit for most ID types.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a Cricket ID without KYC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, many platforms issue IDs with just a name and phone number. However, KYC verification is recommended for large withdrawals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can I withdraw money?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Withdrawals process in 2-15 minutes via UPI depending on the provider and time of day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use one Cricket ID on mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, most IDs work on mobile through apps or browsers. Your login works on any device.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which platform is best for IPL betting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide specialized IPL Cricket ID with exclusive markets, live odds, and real-time updates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is online cricket betting legal in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As of August 2026, real-money online games including cricket betting are banned under the Online Gaming Act, 2025. Consult a qualified lawyer for specific advice.',
        },
      },
    ],
  };

  const homeWebSiteSchema = {
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

  const schemasHtml = `
    <script type="application/ld+json">
    ${JSON.stringify(homeWebSiteSchema, null, 2)}
    </script>
    <script type="application/ld+json">
    ${JSON.stringify(homeFaqSchema, null, 2)}
    </script>
  `;

  html = html.replace('</head>', `${schemasHtml}\n</head>`);

  // Complete pre-rendered semantic HTML inside <div id="root"> matching React Croma-style UI
  const homeContent = `
    <div class="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      <!-- Announcement Banner -->
      <aside aria-label="Announcement" class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white text-xs py-2 px-3">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full bg-white/20 text-white font-black text-[10px] uppercase tracking-wider">IPL 2026 Ready</span>
            <span class="font-medium text-xs hidden sm:inline text-emerald-50">
              India’s Most Trusted Cricket ID Provider • Instant 2-Min WhatsApp Activation • ₹100 Min Deposit
            </span>
            <span class="font-medium text-xs sm:hidden text-emerald-50">
              ⚡ 2-Min WhatsApp Activation • ₹100 Min Deposit
            </span>
          </div>
          <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="shrink-0 px-3 py-1 rounded-full bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs transition-colors shadow-sm">
            Claim Offer
          </a>
        </div>
      </aside>

      <!-- Sticky Header: Clean top navbar with direct useful navigation links -->
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-14 sm:h-16 gap-3">
            <a href="/" class="flex items-center gap-2.5 text-left py-1 group min-h-[48px] shrink-0">
              <div class="w-9 h-9 sm:w-10 sm:h-10 aspect-square rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-xs shrink-0">
                C
              </div>
              <div class="leading-tight">
                <div class="flex items-center gap-1.5">
                  <span class="text-slate-900 font-extrabold text-sm sm:text-base tracking-tight">Online Cricket ID</span>
                  <span class="px-1.5 py-0.5 rounded-md bg-amber-50 border border-amber-300 text-amber-800 font-black text-[10px] leading-none shrink-0">18+</span>
                </div>
                <span class="text-emerald-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block">Official Provider Network</span>
              </div>
            </a>

            <!-- Desktop Navigation Links -->
            <nav aria-label="Main Navigation" class="hidden lg:flex items-center gap-1">
              <a href="/all-cricket-id" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors">All Platforms</a>
              <a href="/ipl-cricket-id" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors inline-flex items-center gap-1">IPL 2026 <span class="px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-rose-500 text-white leading-none">HOT</span></a>
              <a href="/laser247-cricket-id" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors">Laser247</a>
              <a href="/lotus365-cricket-id" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors">Lotus365</a>
              <a href="/guides" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors">Guides &amp; Tips</a>
              <a href="/contact" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors">24/7 Support</a>
            </nav>

            <!-- WhatsApp Action -->
            <div class="flex items-center gap-2 shrink-0">
              <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all shrink-0">
                <span>WhatsApp</span>
                <span class="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] bg-emerald-700 text-emerald-100 font-bold ml-0.5">24/7 Active</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Mobile / Tablet Quick Navigation Strip -->
        <div class="lg:hidden border-t border-slate-100 bg-slate-50/70">
          <div class="max-w-7xl mx-auto px-2 sm:px-4">
            <nav aria-label="Quick Navigation" class="flex items-center gap-1.5 py-2 overflow-x-auto no-scrollbar">
              <a href="/all-cricket-id" class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200/80 shadow-2xs">⭐ All Platforms</a>
              <a href="/ipl-cricket-id" class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/90 shadow-2xs">🔥 IPL 2026</a>
              <a href="/laser247-cricket-id" class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200/80 shadow-2xs">Laser247</a>
              <a href="/lotus365-cricket-id" class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200/80 shadow-2xs">Lotus365</a>
              <a href="/guides" class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200/80 shadow-2xs">📚 Guides</a>
              <a href="/contact" class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200/80 shadow-2xs">🎧 24/7 Support</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <!-- Hero Section -->
        <section class="bg-white border-b border-slate-200 py-8 sm:py-14 relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div class="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Official Verified Provider Network
                </div>
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  India’s #1 Verified <br class="hidden sm:inline" />
                  <span class="text-emerald-700">Online Cricket ID</span> Platform
                </h1>
                <p class="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Official direct access to <strong>Laser247, Lotus365, Betbhai9</strong>, and <strong>IPL 2026 Exchanges</strong> with instant 2-minute WhatsApp activation and 5-minute automated UPI cashouts.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                  <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 min-h-[48px] transition-all">
                    Get Your ID on WhatsApp
                  </a>
                  <a href="/all-cricket-id" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 min-h-[48px] transition-colors">
                    Explore 88+ Platforms
                  </a>
                </div>
                <div class="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-slate-100">
                  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                    <p class="font-extrabold text-slate-900 text-xs sm:text-sm">24/7 Dedicated Support</p>
                    <p class="text-[11px] text-slate-500 mt-0.5">Fast WhatsApp response in &lt;60s</p>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                    <p class="font-extrabold text-slate-900 text-xs sm:text-sm">5-Min Withdrawals</p>
                    <p class="text-[11px] text-slate-500 mt-0.5">Instant UPI direct bank transfer</p>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                    <p class="font-extrabold text-slate-900 text-xs sm:text-sm">Bank-Grade Security</p>
                    <p class="text-[11px] text-slate-500 mt-0.5">256-bit SSL encrypted & protected</p>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-5">
                <div class="bg-gradient-to-b from-white to-slate-50 rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/50 space-y-4">
                  <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span class="text-xs font-extrabold text-emerald-800 uppercase bg-emerald-50 px-2.5 py-1 rounded-md">Instant Match Desk</span>
                    <span class="text-xs text-slate-500 font-bold">IPL 2026 Special</span>
                  </div>
                  <div class="space-y-3">
                    <div class="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                      <span class="text-xs font-bold text-slate-700">Laser247 Cricket ID</span>
                      <span class="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Min ₹100</span>
                    </div>
                    <div class="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                      <span class="text-xs font-bold text-slate-700">Lotus365 Cricket ID</span>
                      <span class="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Min ₹100</span>
                    </div>
                    <div class="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                      <span class="text-xs font-bold text-slate-700">Betbhai9 Cricket ID</span>
                      <span class="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Min ₹100</span>
                    </div>
                  </div>
                  <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 bg-emerald-600 text-white font-extrabold text-sm rounded-xl min-h-[48px] flex items-center justify-center">
                    Activate ID via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 2-Column Mobile Platform Grid -->
        <section class="py-10 sm:py-14 bg-slate-50 border-b border-slate-200">
          <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                Certified Platforms
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Top Rated Cricket ID Exchanges
              </h2>
              <p class="text-slate-600 text-xs sm:text-sm mt-1">
                Handpicked, verified platforms featuring live cricket odds, instant UPI refills, and fast cashouts.
              </p>
            </div>

            <!-- 2-column mobile grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              <!-- Laser247 -->
              <div class="bg-white rounded-2xl border-2 border-emerald-500 shadow-sm p-3.5 sm:p-5 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-extrabold bg-emerald-100 text-emerald-800">Trending #1</span>
                    <span class="text-[11px] font-bold text-slate-700">★ 4.9</span>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-700 text-white font-black text-xs flex items-center justify-center">L247</div>
                    <div>
                      <h3 class="font-extrabold text-slate-900 text-sm sm:text-base">Laser247</h3>
                      <span class="text-[10px] text-slate-500">1,420 Reviews</span>
                    </div>
                  </div>
                  <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3 space-y-1">
                    <div class="flex justify-between text-[11px]"><span class="text-slate-500">Min Deposit:</span><span class="font-bold text-slate-900">₹100</span></div>
                    <div class="flex justify-between text-[11px]"><span class="text-slate-500">Withdrawal:</span><span class="font-bold text-emerald-700">2 - 10 Mins</span></div>
                  </div>
                </div>
                <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl text-center min-h-[48px] flex items-center justify-center transition-colors">
                  Get Laser247 ID
                </a>
              </div>

              <!-- Lotus365 -->
              <div class="bg-white rounded-2xl border-2 border-rose-400 shadow-sm p-3.5 sm:p-5 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-extrabold bg-rose-100 text-rose-800">Best Mobile App</span>
                    <span class="text-[11px] font-bold text-slate-700">★ 4.9</span>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-rose-700 text-white font-black text-xs flex items-center justify-center">L365</div>
                    <div>
                      <h3 class="font-extrabold text-slate-900 text-sm sm:text-base">Lotus365</h3>
                      <span class="text-[10px] text-slate-500">1,280 Reviews</span>
                    </div>
                  </div>
                  <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3 space-y-1">
                    <div class="flex justify-between text-[11px]"><span class="text-slate-500">Min Deposit:</span><span class="font-bold text-slate-900">₹100</span></div>
                    <div class="flex justify-between text-[11px]"><span class="text-slate-500">Withdrawal:</span><span class="font-bold text-emerald-700">3 - 10 Mins</span></div>
                  </div>
                </div>
                <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl text-center min-h-[48px] flex items-center justify-center transition-colors">
                  Get Lotus365 ID
                </a>
              </div>

              <!-- Betbhai9 -->
              <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-3.5 sm:p-5 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-extrabold bg-blue-100 text-blue-800">Top Cricket Odds</span>
                    <span class="text-[11px] font-bold text-slate-700">★ 4.8</span>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-blue-700 text-white font-black text-xs flex items-center justify-center">BB9</div>
                    <div>
                      <h3 class="font-extrabold text-slate-900 text-sm sm:text-base">Betbhai9</h3>
                      <span class="text-[10px] text-slate-500">940 Reviews</span>
                    </div>
                  </div>
                  <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3 space-y-1">
                    <div class="flex justify-between text-[11px]"><span class="text-slate-500">Min Deposit:</span><span class="font-bold text-slate-900">₹100</span></div>
                    <div class="flex justify-between text-[11px]"><span class="text-slate-500">Withdrawal:</span><span class="font-bold text-emerald-700">5 - 12 Mins</span></div>
                  </div>
                </div>
                <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl text-center min-h-[48px] flex items-center justify-center transition-colors">
                  Get Betbhai9 ID
                </a>
              </div>

              <!-- Silver Exchange -->
              <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-3.5 sm:p-5 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-extrabold bg-slate-100 text-slate-800">Lowest Margin</span>
                    <span class="text-[11px] font-bold text-slate-700">★ 4.8</span>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-slate-700 text-white font-black text-xs flex items-center justify-center">SILVER</div>
                    <div>
                      <h3 class="font-extrabold text-slate-900 text-sm sm:text-base">Silver Exch</h3>
                      <span class="text-[10px] text-slate-500">860 Reviews</span>
                    </div>
                  </div>
                  <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3 space-y-1">
                    <div class="flex justify-between text-[11px]"><span class="text-slate-500">Min Deposit:</span><span class="font-bold text-slate-900">₹100</span></div>
                    <div class="flex justify-between text-[11px]"><span class="text-slate-500">Withdrawal:</span><span class="font-bold text-emerald-700">5 - 15 Mins</span></div>
                  </div>
                </div>
                <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl text-center min-h-[48px] flex items-center justify-center transition-colors">
                  Get Silver ID
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Trust & E-E-A-T Block -->
        <section class="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <!-- 3-Step How It Works -->
            <div>
              <div class="text-center max-w-2xl mx-auto mb-8">
                <span class="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  How to Get Started
                </span>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Get Your Cricket ID in <span class="text-emerald-700">3 Easy Steps</span>
                </h2>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">
                  Fast 2-minute activation directly on WhatsApp with instant UPI support.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 relative">
                  <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mb-3">1</div>
                  <h3 class="font-extrabold text-slate-900 text-base mb-1">Connect on WhatsApp</h3>
                  <p class="text-slate-600 text-xs leading-relaxed">Click the WhatsApp button to start a chat with our official 24/7 team.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 relative">
                  <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mb-3">2</div>
                  <h3 class="font-extrabold text-slate-900 text-base mb-1">Select Exchange & Deposit</h3>
                  <p class="text-slate-600 text-xs leading-relaxed">Choose Laser247, Lotus365 or any exchange and deposit minimum ₹100 via secure UPI.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 relative">
                  <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mb-3">3</div>
                  <h3 class="font-extrabold text-slate-900 text-base mb-1">Receive Credentials Instantly</h3>
                  <p class="text-slate-600 text-xs leading-relaxed">Get your official username and password with 100% welcome bonus in under 120 seconds.</p>
                </div>
              </div>
            </div>

            <!-- Security & YMYL Credentials -->
            <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-10 text-white">
              <div class="max-w-3xl mb-8">
                <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  Safe & Protected Experience
                </span>
                <h3 class="text-xl sm:text-2xl font-black text-white mt-2">
                  Bank-Grade Security & Fair Play Guarantee
                </h3>
                <p class="text-slate-300 text-xs sm:text-sm mt-1">
                  Enjoy safe, transparent, and hassle-free cricket betting with verified accounts and instant payouts.
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  <h4 class="font-bold text-white text-sm mb-1">256-Bit SSL Encryption</h4>
                  <p class="text-slate-400 text-xs">Your transactions and personal details are protected by the same security standards used by leading Indian banks.</p>
                </div>
                <div class="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  <h4 class="font-bold text-white text-sm mb-1">Anti-Fraud Protection</h4>
                  <p class="text-slate-400 text-xs">24/7 account protection ensures zero unauthorized access and guarantees safe, verified gameplay.</p>
                </div>
                <div class="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  <h4 class="font-bold text-white text-sm mb-1">Fast UPI Withdrawals</h4>
                  <p class="text-slate-400 text-xs">Withdraw your winnings directly to Google Pay, PhonePe, or Paytm with zero hidden deductions.</p>
                </div>
                <div class="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  <h4 class="font-bold text-white text-sm mb-1">24/7 WhatsApp Support</h4>
                  <p class="text-slate-400 text-xs">Our friendly customer support team is always active on WhatsApp to assist you within 60 seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Directory & FAQs -->
        <section class="py-14 bg-slate-50 border-b border-slate-200">
          <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Complete Cricket ID Directory: Explore 88+ Platforms</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              ${ALL_SLUGS.map(s => {
                const p = SEO_PAGES[s];
                return `<div class="p-4 bg-white rounded-xl border border-slate-200">
                  <span class="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">${p.categoryLabel}</span>
                  <a href="/${s}" class="block font-bold text-slate-900 text-sm mt-1 hover:text-emerald-700">${p.h1.replace(/ - .*/, '')}</a>
                  <p class="text-slate-500 text-xs line-clamp-2 mt-1">${p.metaDescription}</p>
                </div>`;
              }).join('\n              ')}
            </div>
          </div>
        </section>

        <section class="py-12 bg-white border-b border-slate-200">
          <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div class="space-y-3">
              ${homeFaqSchema.mainEntity.map(f => `
                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 class="font-bold text-slate-900 text-sm mb-1">${f.name}</h3>
                  <p class="text-slate-600 text-xs sm:text-sm">${f.acceptedAnswer.text}</p>
                </div>
              `).join('\n              ')}
            </div>
          </div>
        </section>
      </main>

      <!-- Compliance & E-E-A-T Footer -->
      <footer class="bg-slate-950 text-slate-400 pt-12 pb-16 border-t border-slate-800 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <span class="w-12 h-12 rounded-xl bg-amber-500/10 border-2 border-amber-500 text-amber-500 flex items-center justify-center font-black text-xl shrink-0">
                18+
              </span>
              <div>
                <p class="text-white font-bold text-sm">Age Restriction Notice (Strict 18+ Only)</p>
                <p class="text-slate-400 text-xs">Online cricket gaming and sports betting carry financial risk and may be habit-forming. Play responsibly.</p>
              </div>
            </div>
            <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors min-h-[48px] flex items-center justify-center">
              24/7 WhatsApp Support
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 border-t border-slate-800/80">
            <div class="md:col-span-2 space-y-2">
              <span class="text-white font-extrabold text-base">Online Cricket ID Provider</span>
              <p class="text-slate-400 text-xs leading-relaxed max-w-md">
                India’s certified cricket ID facilitation network. Providing verified credentials for Laser247, Lotus365, Betbhai9, and major sporting exchanges with automated UPI payout infrastructure.
              </p>
            </div>
            <div>
              <p class="text-white font-bold text-xs uppercase tracking-wider mb-2">Verified Platforms</p>
              <ul class="space-y-1.5 text-xs">
                <li><a href="/laser247-cricket-id" class="hover:text-white transition-colors">Laser247 Cricket ID</a></li>
                <li><a href="/lotus365-cricket-id" class="hover:text-white transition-colors">Lotus365 Cricket ID</a></li>
                <li><a href="/betbhai9-cricket-id" class="hover:text-white transition-colors">Betbhai9 Cricket ID</a></li>
                <li><a href="/all-cricket-id" class="hover:text-white transition-colors">All 88+ Platforms</a></li>
              </ul>
            </div>
            <div>
              <p class="text-white font-bold text-xs uppercase tracking-wider mb-2">Verified Desk</p>
              <ul class="space-y-1.5 text-xs text-slate-300">
                <li>WhatsApp: <a href="https://wa.link/onlinecricketid" class="text-emerald-400 font-medium hover:underline">wa.link/onlinecricketid (24/7 Desk)</a></li>
                <li>Email: support@onlinecricketid.games</li>
                <li>Hours: 24 Hours / 7 Days a Week</li>
              </ul>
            </div>
          </div>

          <div class="pt-6 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
            <p><strong>Important Legal Notice:</strong> Under the Online Gaming Act, 2025, participation in real-money sports gaming may be restricted in certain states. Players must be 18+ and are responsible for checking local rules. We help players connect with verified, licensed international cricket exchanges safely.</p>
            <p>© 2026 Online Cricket ID Provider. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${homeContent}</div>`);
  return html;
}

function generatePageHtml(baseTemplate, page) {
  let html = baseTemplate;

  // 1. Replace Title
  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${page.title}</title>`
  );

  // 2. Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?"\s*\/?>/i,
    `<meta name="description" content="${page.metaDescription.replace(/"/g, '&quot;')}" />`
  );

  // 3. Replace Meta Keywords
  html = html.replace(
    /<meta name="keywords" content=".*?"\s*\/?>/i,
    `<meta name="keywords" content="${page.keywords.replace(/"/g, '&quot;')}" />`
  );

  // 4. Replace Canonical URL
  html = html.replace(
    /<link rel="canonical" href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${BASE_URL}/${page.slug}" />`
  );

  // 5. Replace OpenGraph & Twitter Tags
  html = html.replace(
    /<meta property="og:title" content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${page.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${page.metaDescription.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${BASE_URL}/${page.slug}" />`
  );

  html = html.replace(
    /<meta name="twitter:title" content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${page.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${page.metaDescription.replace(/"/g, '&quot;')}" />`
  );

  // 6. Structured Data (Breadcrumbs and FAQs)
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

  const schemasHtml = `
    <script type="application/ld+json">
    ${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>
    <script type="application/ld+json">
    ${JSON.stringify(faqSchema, null, 2)}
    </script>
  `;

  html = html.replace('</head>', `${schemasHtml}\n</head>`);

  // 7. Light-themed Pre-rendered Content inside <div id="root"> for Crawlers
  const serverRenderedContent = `
    <div class="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <header class="py-3 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="/" class="text-slate-900 font-extrabold text-base">Online Cricket ID</a>
          <a href="https://wa.link/onlinecricketid" class="text-emerald-700 font-bold text-xs">WhatsApp Helpline</a>
        </div>
      </header>
      <main class="max-w-7xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" class="mb-4 text-xs text-slate-500">
          <a href="/" class="hover:text-emerald-700">Home</a> &gt; <span>${page.categoryLabel}</span> &gt; <span class="text-emerald-800 font-bold">${page.h1}</span>
        </nav>
        <span class="inline-block px-3 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold uppercase mb-3">${page.badge}</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">${page.h1}</h1>
        <p class="text-sm sm:text-base text-slate-600 mb-6 max-w-3xl leading-relaxed">${page.intro}</p>
        
        <div class="my-6 p-5 bg-white rounded-2xl border border-slate-200 max-w-2xl shadow-2xs">
          <h2 class="text-lg font-bold text-slate-900 mb-3">Platform Specifications</h2>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-700">
            ${page.specs.map(s => `<li><strong>${s.label}:</strong> ${s.value}</li>`).join('\n            ')}
          </ul>
        </div>

        <div class="my-6">
          <h2 class="text-xl font-bold text-slate-900 mb-3">Key Highlights</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${page.highlights.map(h => `
              <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <h3 class="font-bold text-slate-900 text-sm mb-1">${h.title}</h3>
                <p class="text-xs text-slate-600">${h.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        ${page.contentSections.map(s => `
          <article class="my-6 p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <h2 class="text-lg font-bold text-slate-900 mb-2">${s.title}</h2>
            ${s.paragraphs.map(p => `<p class="text-slate-600 text-xs sm:text-sm mb-2.5 leading-relaxed">${p}</p>`).join('')}
          </article>
        `).join('')}

        <section class="my-8">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <div class="space-y-3">
            ${page.faqs.map(f => `
              <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <h3 class="font-bold text-slate-900 text-sm mb-1">${f.question}</h3>
                <p class="text-xs sm:text-sm text-slate-600">${f.answer}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <div class="my-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
          <h2 class="text-xl font-bold text-slate-900 mb-1">Get Your ${page.h1.replace(/ - .*/, '')} Instantly</h2>
          <p class="text-slate-600 text-xs mb-4">Minimum deposit ₹100 • 2-Minute Activation • 24/7 UPI Withdrawals</p>
          <a href="https://wa.link/onlinecricketid" class="inline-block px-6 py-3 bg-emerald-600 text-white font-extrabold text-sm rounded-xl shadow-xs">Get ID on WhatsApp</a>
        </div>
      </main>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${serverRenderedContent}</div>`);

  return html;
}

function generateContactHtml(baseTemplate) {
  let html = baseTemplate;

  const contactTitle = '24/7 Official Support & WhatsApp Customer Care Helpline | Online Cricket ID';
  const contactDesc = 'Official 24/7 customer care helpline for Online Cricket ID. Instant WhatsApp support with under 2-minute response time, account assistance, and fast withdrawals.';

  html = html.replace(/<title>.*?<\/title>/i, `<title>${contactTitle}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${contactDesc}" />`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/i, `<link rel="canonical" href="${BASE_URL}/contact" />`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${contactTitle}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${contactDesc}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/i, `<meta property="og:url" content="${BASE_URL}/contact" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${contactTitle}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${contactDesc}" />`);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Official 24/7 Support Helpline',
    description: contactDesc,
    url: `${BASE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Online Cricket ID',
      url: `${BASE_URL}/`,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://wa.link/onlinecricketid',
        email: 'support@onlinecricketid.games',
        availableLanguage: ['English', 'Hindi'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    },
  };

  const schemaHtml = `
    <script type="application/ld+json">
    ${JSON.stringify(contactSchema, null, 2)}
    </script>
  `;
  html = html.replace('</head>', `${schemaHtml}\n</head>`);

  const serverContent = `
    <div class="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <header class="py-3 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="/" class="text-slate-900 font-extrabold text-base">Online Cricket ID</a>
          <a href="https://wa.link/onlinecricketid" class="text-emerald-700 font-bold text-xs">WhatsApp Support</a>
        </div>
      </header>
      <main class="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <nav aria-label="Breadcrumb" class="mb-4 text-xs text-slate-500">
          <a href="/" class="hover:text-emerald-700">Home</a> &gt; <span class="text-emerald-800 font-bold">Contact & Support</span>
        </nav>
        <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold uppercase mb-3">Official 24/7 Help Desk</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Official 24/7 Support & WhatsApp Helpline</h1>
        <p class="text-slate-600 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
          Need an instant cricket ID, help with deposits, or quick withdrawal support? Our friendly customer team is available 24/7 on WhatsApp with responses in under 2 minutes.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="p-6 bg-white rounded-2xl border border-emerald-200 shadow-xs">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Instant WhatsApp Care</h2>
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">Direct chat with our official team for new cricket IDs, instant deposits, and fast UPI withdrawals.</p>
            <a href="https://wa.link/onlinecricketid" class="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-bold text-sm rounded-xl hover:bg-emerald-500">Chat on WhatsApp (24/7)</a>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Official Email Desk</h2>
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">General inquiries, account assistance, and feedback handled promptly by our support team.</p>
            <a href="mailto:support@onlinecricketid.games" class="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-bold text-sm rounded-xl hover:bg-slate-800">support@onlinecricketid.games</a>
          </div>
        </div>

        <div class="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed my-8">
          <strong>Security Warning:</strong> Our support agents will NEVER ask for your banking passwords, OTPs, or UPI PINs. Always verify you are contacting the official WhatsApp link shown on this website.
        </div>
      </main>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${serverContent}</div>`);
  return html;
}

function generateLegalHtml(baseTemplate) {
  let html = baseTemplate;

  const legalTitle = 'Legal Compliance, Privacy Policy & Responsible Gaming | Online Cricket ID';
  const legalDesc = 'Official terms of service, privacy policy, 256-bit data encryption, and responsible gaming guidelines under the Online Gaming Act, 2025.';

  html = html.replace(/<title>.*?<\/title>/i, `<title>${legalTitle}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${legalDesc}" />`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/i, `<link rel="canonical" href="${BASE_URL}/legal" />`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${legalTitle}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${legalDesc}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/i, `<meta property="og:url" content="${BASE_URL}/legal" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${legalTitle}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${legalDesc}" />`);

  const serverContent = `
    <div class="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <header class="py-3 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="/" class="text-slate-900 font-extrabold text-base">Online Cricket ID</a>
          <a href="https://wa.link/onlinecricketid" class="text-emerald-700 font-bold text-xs">WhatsApp Helpline</a>
        </div>
      </header>
      <main class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <nav aria-label="Breadcrumb" class="mb-4 text-xs text-slate-500">
          <a href="/" class="hover:text-emerald-700">Home</a> &gt; <span class="text-emerald-800 font-bold">Legal & Compliance</span>
        </nav>
        <span class="inline-block px-3 py-1 bg-slate-200 text-slate-800 rounded-full text-xs font-bold uppercase mb-3">Regulatory Transparency</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Terms of Service, Privacy & Responsible Gaming</h1>
        <p class="text-slate-600 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
          Online Cricket ID is committed to legal transparency, strict user privacy, and responsible gaming. All platform activities must comply with regional gaming laws and our terms of use.
        </p>

        <article class="p-6 bg-white rounded-2xl border border-slate-200 mb-6 shadow-xs">
          <h2 class="text-xl font-bold text-slate-900 mb-3">1. Age Requirement & Regulatory Compliance</h2>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            Access to our services is strictly restricted to individuals aged 18 years or older. Under the Online Gaming Act, 2025 and prevailing state laws, players must verify the legality of sports betting within their specific jurisdiction before participating.
          </p>
        </article>

        <article class="p-6 bg-white rounded-2xl border border-slate-200 mb-6 shadow-xs">
          <h2 class="text-xl font-bold text-slate-900 mb-3">2. 256-Bit SSL Data Encryption & Privacy</h2>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            Your personal credentials, phone number, and financial interaction records are safeguarded with enterprise-grade 256-bit SSL encryption. We enforce a zero-sharing policy with third-party advertising brokers.
          </p>
        </article>

        <article class="p-6 bg-white rounded-2xl border border-slate-200 mb-6 shadow-xs">
          <h2 class="text-xl font-bold text-slate-900 mb-3">3. Responsible Gaming & Self-Exclusion</h2>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            Sports betting involves financial risk. We urge all users to set strict deposit limits and never gamble with money they cannot afford to lose. Immediate self-exclusion is available 24/7 upon request via our WhatsApp support desk.
          </p>
        </article>
      </main>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${serverContent}</div>`);
  return html;
}

function generateGuidesHtml(baseTemplate) {
  let html = baseTemplate;

  const guidesTitle = 'Online Cricket ID Guides & Knowledge Base | Tutorials & FAQs';
  const guidesDesc = 'Comprehensive step-by-step guides, payment tutorials, and troubleshooting instructions for online cricket betting IDs.';

  html = html.replace(/<title>.*?<\/title>/i, `<title>${guidesTitle}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${guidesDesc}" />`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/i, `<link rel="canonical" href="${BASE_URL}/guides" />`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${guidesTitle}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${guidesDesc}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/i, `<meta property="og:url" content="${BASE_URL}/guides" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${guidesTitle}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${guidesDesc}" />`);

  const cardsHtml = ALL_GUIDE_SLUGS.map((slug) => {
    const g = GUIDES[slug];
    if (!g) return '';
    return `
      <article class="p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase">${g.category}</span>
            <span class="text-xs text-slate-500">${g.readTime}</span>
          </div>
          <h2 class="text-xl font-bold text-slate-900 mb-2">
            <a href="/guides/${g.slug}" class="hover:text-emerald-700 transition-colors">${g.title}</a>
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">${g.description}</p>
        </div>
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs text-slate-400">By ${g.author || 'Editorial Team'}</span>
          <a href="/guides/${g.slug}" class="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
            Read Full Guide &rarr;
          </a>
        </div>
      </article>
    `;
  }).join('');

  const serverContent = `
    <div class="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <header class="py-3 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="/" class="text-slate-900 font-extrabold text-base">Online Cricket ID</a>
          <a href="https://wa.link/onlinecricketid" class="text-emerald-700 font-bold text-xs">WhatsApp Helpline</a>
        </div>
      </header>
      <main class="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <nav aria-label="Breadcrumb" class="mb-4 text-xs text-slate-500">
          <a href="/" class="hover:text-emerald-700">Home</a> &gt; <span class="text-emerald-800 font-bold">Guides & Knowledge Base</span>
        </nav>
        <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold uppercase mb-3">Knowledge Base</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Online Cricket ID Knowledge Base & Guides</h1>
        <p class="text-slate-600 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
          Master online cricket betting with verified tutorials on UPI payments, fast cashouts, bonus wagering rules, and platform comparison guides.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${cardsHtml}
        </div>
      </main>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${serverContent}</div>`);
  return html;
}

function generateGuideArticleHtml(baseTemplate, article) {
  let html = baseTemplate;

  const title = `${article.title} | Online Cricket ID Guides`;
  const desc = article.description;
  const canonicalUrl = `${BASE_URL}/guides/${article.slug}`;

  html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${desc.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${desc.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${desc.replace(/"/g, '&quot;')}" />`);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.authorEntity || 'Online Cricket ID Editorial Team',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Online Cricket ID',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.svg`,
      },
    },
    datePublished: '2026-01-15T00:00:00+05:30',
    dateModified: '2026-08-20T00:00:00+05:30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

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
        name: 'Guides & Knowledge Base',
        item: `${BASE_URL}/guides`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  const schemasHtml = `
    <script type="application/ld+json">
    ${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>
    <script type="application/ld+json">
    ${JSON.stringify(articleSchema, null, 2)}
    </script>
  `;

  html = html.replace('</head>', `${schemasHtml}\n</head>`);

  const takeaways = GUIDE_TAKEAWAYS[article.slug]?.highlights || [];
  const keyTakeawaysHtml = takeaways.length > 0 ? `
    <div class="mb-8 p-5 sm:p-6 bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border border-emerald-200/80 rounded-2xl shadow-xs">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">Quick Summary</span>
        <span class="text-xs text-slate-500">• 30-Second Read</span>
      </div>
      <h2 class="text-lg sm:text-xl font-black text-slate-900 mb-3">Key Points to Know</h2>
      <ul class="space-y-2">
        ${takeaways.map(point => `
          <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
            <span>${point}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  ` : '';

  const relatedArticlesHtml = article.relatedArticles && article.relatedArticles.length > 0 ? `
    <div class="mt-12 pt-8 border-t border-slate-200">
      <h3 class="text-lg font-bold text-slate-900 mb-4">Recommended Related Tutorials</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${article.relatedArticles.map(relSlug => {
          const rel = GUIDES[relSlug];
          if (!rel) return '';
          return `
            <a href="/guides/${rel.slug}" class="p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors block">
              <span class="text-[11px] font-semibold text-emerald-700 uppercase">${rel.category}</span>
              <h4 class="text-sm font-bold text-slate-900 mt-1">${rel.title}</h4>
              <span class="text-xs text-slate-500 mt-2 inline-block">${rel.readTime}</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  ` : '';

  const serverContent = `
    <div class="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <header class="py-3 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="/" class="text-slate-900 font-extrabold text-base">Online Cricket ID</a>
          <a href="https://wa.link/onlinecricketid" class="text-emerald-700 font-bold text-xs">WhatsApp Helpline</a>
        </div>
      </header>
      <main class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <nav aria-label="Breadcrumb" class="mb-4 text-xs text-slate-500 flex items-center gap-1.5 flex-wrap">
          <a href="/" class="hover:text-emerald-700">Home</a>
          <span>&gt;</span>
          <a href="/guides" class="hover:text-emerald-700">Guides & Tutorials</a>
          <span>&gt;</span>
          <span class="text-emerald-800 font-bold">${article.title}</span>
        </nav>
        
        <header class="mb-8">
          <div class="flex items-center gap-2 mb-3">
            <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold uppercase">${article.category}</span>
            <span class="text-xs text-slate-500">• ${article.readTime}</span>
            <span class="text-xs text-slate-500">• Updated August 2026</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">${article.title}</h1>
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">${article.description}</p>
        </header>

        ${keyTakeawaysHtml}

        <article class="prose prose-slate max-w-none text-slate-800 leading-relaxed mb-10">
          ${article.htmlContent}
        </article>

        <div class="p-6 bg-emerald-900 text-white rounded-2xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 class="text-lg font-bold">Need Help Getting Your Cricket ID?</h3>
            <p class="text-emerald-200 text-xs sm:text-sm mt-1">Our 24/7 team will activate your verified account in under 2 minutes.</p>
          </div>
          <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0">
            Open WhatsApp
          </a>
        </div>

        ${relatedArticlesHtml}
      </main>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${serverContent}</div>`);
  return html;
}

function generateReviewHtml(baseTemplate, review) {
  let html = baseTemplate;

  const title = review.metaTitle || `${review.name} Review 2026 — Ratings, Pros, Cons & Details | Online Cricket ID`;
  const desc = review.metaDescription || review.editorialSummary;
  const canonicalUrl = `${BASE_URL}/reviews/${review.slug}`;

  html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${desc.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${desc.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${desc.replace(/"/g, '&quot;')}" />`);

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: `${review.name} Cricket Betting Exchange`,
      description: review.tagline,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.overallRating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Organization',
      name: 'Online Cricket ID Research Desk',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Online Cricket ID',
      url: BASE_URL,
    },
  };

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
        name: 'Platform Reviews',
        item: `${BASE_URL}/#explore-ids`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${review.name} Review 2026`,
        item: canonicalUrl,
      },
    ],
  };

  let schemas = [breadcrumbSchema, reviewSchema];
  if (review.faqs && review.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: review.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  const schemasHtml = schemas.map(s => `
    <script type="application/ld+json">
    ${JSON.stringify(s, null, 2)}
    </script>
  `).join('\n');

  html = html.replace('</head>', `${schemasHtml}\n</head>`);

  const prosHtml = review.pros.map(p => `
    <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
      <span class="text-emerald-600 font-bold">✓</span>
      <span>${p.text}</span>
    </li>
  `).join('');

  const consHtml = review.cons.map(c => `
    <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
      <span class="text-rose-500 font-bold">✗</span>
      <span>${c.text}</span>
    </li>
  `).join('');

  const sectionsHtml = review.contentSections.map(s => `
    <section class="mb-6">
      <h2 class="text-xl font-bold text-slate-900 mb-2">${s.title}</h2>
      ${s.paragraphs.map(p => `<p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">${p}</p>`).join('')}
    </section>
  `).join('');

  const faqsHtml = review.faqs.map(f => `
    <div class="p-4 bg-white rounded-xl border border-slate-200 mb-3">
      <h3 class="text-sm font-bold text-slate-900 mb-1">${f.q}</h3>
      <p class="text-xs text-slate-600 leading-relaxed">${f.a}</p>
    </div>
  `).join('');

  const serverContent = `
    <div class="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <header class="py-3 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="/" class="text-slate-900 font-extrabold text-base">Online Cricket ID</a>
          <a href="https://wa.link/onlinecricketid" class="text-emerald-700 font-bold text-xs">WhatsApp Helpline</a>
        </div>
      </header>
      <main class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <nav aria-label="Breadcrumb" class="mb-4 text-xs text-slate-500">
          <a href="/" class="hover:text-emerald-700">Home</a> &gt; <a href="/#explore-ids" class="hover:text-emerald-700">Reviews</a> &gt; <span class="text-emerald-800 font-bold">${review.name}</span>
        </nav>
        
        <header class="mb-8">
          <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold uppercase mb-3">Verified Expert Review</span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">${review.name} Review 2026</h1>
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">${review.tagline}</p>
          <div class="flex items-center gap-4 flex-wrap text-xs text-slate-600">
            <span class="font-bold text-amber-700">★ ${review.overallRating} / 5.0 (${review.reviewCount} reviews)</span>
            <span>• Min Deposit: <strong class="text-slate-900">${review.minDeposit}</strong></span>
            <span>• Payout: <strong class="text-slate-900">${review.payoutSpeed}</strong></span>
          </div>
        </header>

        <div class="p-5 bg-white rounded-2xl border border-slate-200 mb-8 shadow-xs">
          <h2 class="text-base font-bold text-slate-900 mb-2">Editorial Summary</h2>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${review.editorialSummary}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="p-5 bg-emerald-50/50 border border-emerald-200 rounded-2xl">
            <h3 class="text-sm font-bold text-emerald-900 mb-3 uppercase tracking-wider">Pros</h3>
            <ul class="space-y-2">${prosHtml}</ul>
          </div>
          <div class="p-5 bg-rose-50/50 border border-rose-200 rounded-2xl">
            <h3 class="text-sm font-bold text-rose-900 mb-3 uppercase tracking-wider">Cons</h3>
            <ul class="space-y-2">${consHtml}</ul>
          </div>
        </div>

        ${sectionsHtml}

        <div class="mt-8 mb-8">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          ${faqsHtml}
        </div>

        <div class="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 class="text-lg font-bold">Get Your Official ${review.name} ID Now</h3>
            <p class="text-slate-400 text-xs sm:text-sm mt-1">Direct WhatsApp activation with 100% payout security.</p>
          </div>
          <a href="https://wa.link/onlinecricketid" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0">
            Activate on WhatsApp
          </a>
        </div>
      </main>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${serverContent}</div>`);
  return html;
}

function buildSitemapXml() {
  const urls = [
    { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${BASE_URL}/guides`, priority: '0.85', changefreq: 'weekly' },
    { loc: `${BASE_URL}/contact`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${BASE_URL}/legal`, priority: '0.5', changefreq: 'monthly' },
  ];

  // Guides
  ALL_GUIDE_SLUGS.forEach((slug) => {
    urls.push({
      loc: `${BASE_URL}/guides/${slug}`,
      priority: '0.85',
      changefreq: 'weekly',
    });
  });

  // Reviews
  Object.keys(PLATFORM_REVIEWS).forEach((slug) => {
    urls.push({
      loc: `${BASE_URL}/reviews/${slug}`,
      priority: '0.85',
      changefreq: 'weekly',
    });
  });

  ALL_SLUGS.forEach((slug) => {
    const page = SEO_PAGES[slug];
    let priority = '0.8';
    let changefreq = 'weekly';

    if (slug === 'ipl-cricket-id' || page.category === 'platform') {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (page.category === 'team' || page.category === 'market') {
      priority = '0.85';
      changefreq = 'weekly';
    } else if (page.category === 'legal') {
      priority = '0.5';
      changefreq = 'monthly';
    }

    urls.push({
      loc: `${BASE_URL}/${slug}`,
      priority,
      changefreq,
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n\n')}

</urlset>
`;

  return xml;
}

function buildLlmsTxt() {
  return `# Online Cricket ID - Complete Knowledge & Services Index

Website: ${BASE_URL}/
WhatsApp: https://wa.link/onlinecricketid
Updated: ${TODAY}

## About
Online Cricket ID is India's premier verified cricket betting ID provider offering instant account activation for Laser247, Lotus365, Betbhai9, Silver Exchange, Diamond Exchange, and IPL 2026 cricket IDs.

## Core Features
- Instant Activation via WhatsApp within 2 minutes
- Minimum deposit starting from ₹100
- 2-15 minute withdrawals via UPI, GPay, PhonePe, Paytm, IMPS
- 24/7 dedicated customer care helpline
- 100% payout guarantee

## Complete Index of Pages (${ALL_SLUGS.length + ALL_GUIDE_SLUGS.length + Object.keys(PLATFORM_REVIEWS).length + 4} URLs)

### Core Hubs & Support
- Home: ${BASE_URL}/
- Guides & Tutorials Hub: ${BASE_URL}/guides
- 24/7 Official Helpline: ${BASE_URL}/contact
- Legal Compliance & Terms: ${BASE_URL}/legal

### In-Depth Guides & Tutorials (/guides/[slug])
${ALL_GUIDE_SLUGS.map(s => `- ${GUIDES[s].title}: ${BASE_URL}/guides/${s}`).join('\n')}

### Verified Platform Reviews (/reviews/[slug])
${Object.keys(PLATFORM_REVIEWS).map(s => `- ${PLATFORM_REVIEWS[s].name} Review 2026: ${BASE_URL}/reviews/${s}`).join('\n')}

### Top Platforms & Exchanges
${ALL_SLUGS.filter(s => SEO_PAGES[s].category === 'platform').map(s => `- ${SEO_PAGES[s].h1}: ${BASE_URL}/${s}`).join('\n')}

### IPL Franchise IDs
${ALL_SLUGS.filter(s => SEO_PAGES[s].category === 'team').map(s => `- ${SEO_PAGES[s].h1}: ${BASE_URL}/${s}`).join('\n')}

### Bet Types & Markets
${ALL_SLUGS.filter(s => SEO_PAGES[s].category === 'market').map(s => `- ${SEO_PAGES[s].h1}: ${BASE_URL}/${s}`).join('\n')}

### Payment Methods
${ALL_SLUGS.filter(s => SEO_PAGES[s].category === 'payment').map(s => `- ${SEO_PAGES[s].h1}: ${BASE_URL}/${s}`).join('\n')}

### Tournaments & Competitions
${ALL_SLUGS.filter(s => SEO_PAGES[s].category === 'tournament').map(s => `- ${SEO_PAGES[s].h1}: ${BASE_URL}/${s}`).join('\n')}

### Regional & City Hubs
${ALL_SLUGS.filter(s => SEO_PAGES[s].category === 'city').map(s => `- ${SEO_PAGES[s].h1}: ${BASE_URL}/${s}`).join('\n')}

### Guides & Features
${ALL_SLUGS.filter(s => SEO_PAGES[s].category === 'feature').map(s => `- ${SEO_PAGES[s].h1}: ${BASE_URL}/${s}`).join('\n')}

### Legal & Policies
${ALL_SLUGS.filter(s => SEO_PAGES[s].category === 'legal').map(s => `- ${SEO_PAGES[s].h1}: ${BASE_URL}/${s}`).join('\n')}
`;
}

function run() {
  console.log('--- Starting Static SEO Prerender Generation ---');

  if (!fs.existsSync(distDir)) {
    console.error('Error: dist directory does not exist. Run "vite build" first.');
    process.exit(1);
  }

  const baseIndexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(baseIndexPath)) {
    console.error('Error: dist/index.html not found.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(baseIndexPath, 'utf8');

  // 1. Prerender Homepage (dist/index.html)
  const homeHtml = generateHomeHtml(baseTemplate);
  fs.writeFileSync(baseIndexPath, homeHtml, 'utf8');
  console.log('✓ Pre-rendered full semantic HTML for Homepage (/) inside dist/index.html');

  // 2. Prerender Core Hubs (/contact, /contact-us, /legal, /compliance, /guides)
  const contactHtml = generateContactHtml(baseTemplate);
  ['contact', 'contact-us'].forEach(dir => {
    const targetDir = path.join(distDir, dir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), contactHtml, 'utf8');
  });
  console.log('✓ Pre-rendered static HTML for /contact & /contact-us');

  const legalHtml = generateLegalHtml(baseTemplate);
  ['legal', 'compliance'].forEach(dir => {
    const targetDir = path.join(distDir, dir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), legalHtml, 'utf8');
  });
  console.log('✓ Pre-rendered static HTML for /legal & /compliance');

  const guidesHtml = generateGuidesHtml(baseTemplate);
  const guidesDir = path.join(distDir, 'guides');
  if (!fs.existsSync(guidesDir)) fs.mkdirSync(guidesDir, { recursive: true });
  fs.writeFileSync(path.join(guidesDir, 'index.html'), guidesHtml, 'utf8');
  console.log('✓ Pre-rendered static HTML for /guides');

  // 3. Prerender all Guide Articles (dist/guides/[slug]/index.html)
  let guideArticleCount = 0;
  ALL_GUIDE_SLUGS.forEach((slug) => {
    const article = GUIDES[slug];
    if (!article) return;
    const articleDir = path.join(guidesDir, slug);
    if (!fs.existsSync(articleDir)) fs.mkdirSync(articleDir, { recursive: true });
    const articleHtml = generateGuideArticleHtml(baseTemplate, article);
    fs.writeFileSync(path.join(articleDir, 'index.html'), articleHtml, 'utf8');
    guideArticleCount++;
  });
  console.log(`✓ Pre-rendered ${guideArticleCount} dedicated guide article pages in dist/guides/[slug]/`);

  // 4. Prerender all Platform Reviews (dist/reviews/[slug]/index.html)
  const reviewsDir = path.join(distDir, 'reviews');
  if (!fs.existsSync(reviewsDir)) fs.mkdirSync(reviewsDir, { recursive: true });
  let reviewCount = 0;
  Object.keys(PLATFORM_REVIEWS).forEach((slug) => {
    const review = PLATFORM_REVIEWS[slug];
    if (!review) return;
    const reviewTargetDir = path.join(reviewsDir, slug);
    if (!fs.existsSync(reviewTargetDir)) fs.mkdirSync(reviewTargetDir, { recursive: true });
    const reviewHtml = generateReviewHtml(baseTemplate, review);
    fs.writeFileSync(path.join(reviewTargetDir, 'index.html'), reviewHtml, 'utf8');
    reviewCount++;
  });
  console.log(`✓ Pre-rendered ${reviewCount} dedicated platform review pages in dist/reviews/[slug]/`);

  // 5. Prerender all 88+ Subpages (dist/[slug]/index.html)
  let generatedCount = 0;
  ALL_SLUGS.forEach((slug) => {
    const page = SEO_PAGES[slug];
    const pageDir = path.join(distDir, slug);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    const pageHtml = generatePageHtml(baseTemplate, page);
    fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml, 'utf8');
    generatedCount++;
  });

  console.log(`✓ Pre-rendered ${generatedCount} dedicated static HTML pages in dist/`);

  // Update sitemap.xml in both dist and public
  const sitemapXml = buildSitemapXml();
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`✓ Updated sitemap.xml with ${ALL_SLUGS.length + ALL_GUIDE_SLUGS.length + Object.keys(PLATFORM_REVIEWS).length + 4} URLs in dist/ and public/`);

  // Update llms.txt in both dist and public
  const llmsTxt = buildLlmsTxt();
  fs.writeFileSync(path.join(distDir, 'llms.txt'), llmsTxt, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt, 'utf8');
  console.log('✓ Updated llms.txt with complete page index');

  console.log('--- Static SEO Prerender Completed Successfully ---');
}

run();

