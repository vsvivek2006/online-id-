import { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  Trophy, 
  Building2, 
  BookOpen, 
  Scale, 
  ArrowRight,
  Flame,
  CreditCard,
  Target,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SEO_PAGES, CATEGORIZED_PAGES, ALL_SLUGS } from '@/data/seoPages';

const PAGE_SIZE = 12;

interface SEODirectoryProps {
  onNavigate: (path: string) => void;
}

export default function SEODirectory({ onNavigate }: SEODirectoryProps) {
  const [activeTab, setActiveTab] = useState<
    'all' | 'platform' | 'tournament' | 'team' | 'market' | 'payment' | 'city' | 'feature' | 'legal'
  >('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const tabs = [
    { key: 'all', label: `All IDs (${ALL_SLUGS.length})`, icon: Sparkles },
    { key: 'platform', label: `Exchanges (${CATEGORIZED_PAGES.platform?.length || 0})`, icon: Sparkles },
    { key: 'team', label: `IPL Teams (${CATEGORIZED_PAGES.team?.length || 0})`, icon: Flame },
    { key: 'market', label: `Bet Types (${CATEGORIZED_PAGES.market?.length || 0})`, icon: Target },
    { key: 'payment', label: `Payment Modes (${CATEGORIZED_PAGES.payment?.length || 0})`, icon: CreditCard },
    { key: 'tournament', label: `Tournaments (${CATEGORIZED_PAGES.tournament?.length || 0})`, icon: Trophy },
    { key: 'city', label: `Cities (${CATEGORIZED_PAGES.city?.length || 0})`, icon: Building2 },
    { key: 'feature', label: `Guides (${CATEGORIZED_PAGES.feature?.length || 0})`, icon: BookOpen },
    { key: 'legal', label: `Legal (${CATEGORIZED_PAGES.legal?.length || 0})`, icon: Scale },
  ] as const;

  const filteredSlugs = useMemo(() => {
    let slugs = activeTab === 'all' ? ALL_SLUGS : CATEGORIZED_PAGES[activeTab] || [];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      slugs = slugs.filter((slug) => {
        const page = SEO_PAGES[slug];
        if (!page) return false;
        return (
          page.h1.toLowerCase().includes(q) ||
          page.keywords.toLowerCase().includes(q) ||
          page.intro.toLowerCase().includes(q)
        );
      });
    }

    return slugs;
  }, [activeTab, searchTerm]);

  // Reset visible count when tab or search changes
  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setVisibleCount(PAGE_SIZE);
  };

  const visibleSlugs = filteredSlugs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSlugs.length;
  const isExpanded = visibleCount > PAGE_SIZE;

  return (
    <section id="explore-ids" className="py-12 sm:py-16 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5 border border-emerald-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Verified ID Directory
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Explore All <span className="text-emerald-700">88+ Cricket IDs &amp; Guides</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Select your preferred betting exchange, IPL franchise special, session betting market, or payment method from our comprehensive network of certified partners.
          </p>
        </div>

        {/* Search & Tabs */}
        <div className="mb-8 space-y-4">
          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search Laser247, CSK, Session Betting, PhonePe, Mumbai..."
              aria-label="Filter cricket IDs"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 focus:bg-white focus:border-emerald-500 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-2xs"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabChange(tab.key)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all min-h-[40px] active:scale-95 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-xs font-bold'
                      : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Pages — showing visibleCount items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {visibleSlugs.map((slug) => {
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
                className="text-left group p-4 sm:p-5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xs transition-all duration-200 flex flex-col justify-between block shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 truncate max-w-[140px]">
                      {page.badge}
                    </span>
                    <span className="text-slate-400 text-[11px] font-mono font-medium">₹100 Min</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5 line-clamp-2">
                    {page.h1.replace(/ - .*/, '')}
                  </h3>

                  <p className="text-slate-500 text-xs line-clamp-2 mb-3 leading-relaxed">
                    {page.metaDescription}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                  <span>View Details &amp; Odds</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

        {filteredSlugs.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 p-6">
            <p className="text-slate-500 text-xs sm:text-sm font-medium">No matching IDs found for "{searchTerm}". Try another keyword!</p>
          </div>
        )}

        {/* Show More / Show Less controls */}
        {filteredSlugs.length > PAGE_SIZE && (
          <div className="mt-8 flex flex-col items-center gap-3">
            {/* Progress indicator */}
            <p className="text-slate-500 text-xs font-medium">
              Showing <span className="font-bold text-slate-800">{Math.min(visibleCount, filteredSlugs.length)}</span> of{' '}
              <span className="font-bold text-slate-800">{filteredSlugs.length}</span> results
            </p>

            {/* Progress bar */}
            <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((visibleCount / filteredSlugs.length) * 100, 100)}%` }}
              />
            </div>

            <div className="flex items-center gap-2">
              {hasMore && (
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all active:scale-98"
                >
                  <span>Show More ({Math.min(PAGE_SIZE, filteredSlugs.length - visibleCount)} more)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}

              {isExpanded && (
                <button
                  type="button"
                  onClick={() => {
                    setVisibleCount(PAGE_SIZE);
                    document.getElementById('explore-ids')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-h-[48px] inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-xl border border-slate-200 shadow-xs transition-all"
                >
                  <ChevronUp className="w-4 h-4" />
                  <span>Show Less</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
