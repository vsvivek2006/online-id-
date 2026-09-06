import { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  CreditCard,
  UserPlus,
  Wrench,
  BarChart2,
  Scale,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { GUIDES, ALL_GUIDE_SLUGS, GUIDE_CATEGORIES } from '@/data/guidesData';
import { GuideCategory } from '@/types/platform';

interface GuidesHubProps {
  onNavigate: (path: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  all:             <Sparkles className="w-3.5 h-3.5" />,
  payments:        <CreditCard className="w-3.5 h-3.5" />,
  registration:    <UserPlus className="w-3.5 h-3.5" />,
  comparisons:     <BarChart2 className="w-3.5 h-3.5" />,
  legal:           <Scale className="w-3.5 h-3.5" />,
  strategy:        <BookOpen className="w-3.5 h-3.5" />,
  troubleshooting: <Wrench className="w-3.5 h-3.5" />,
};

const CATEGORY_COLORS: Record<string, string> = {
  payments:        'bg-emerald-50 text-emerald-800 border-emerald-200',
  registration:    'bg-sky-50 text-sky-800 border-sky-200',
  comparisons:     'bg-violet-50 text-violet-800 border-violet-200',
  legal:           'bg-amber-50 text-amber-800 border-amber-200',
  strategy:        'bg-rose-50 text-rose-800 border-rose-200',
  troubleshooting: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function GuidesHub({ onNavigate }: GuidesHubProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<GuideCategory | 'all'>('all');

  const filteredSlugs = useMemo(() => {
    let slugs = activeCategory === 'all'
      ? ALL_GUIDE_SLUGS
      : ALL_GUIDE_SLUGS.filter((s) => GUIDES[s].category === activeCategory);

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      slugs = slugs.filter((s) => {
        const g = GUIDES[s];
        return g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q);
      });
    }
    return slugs;
  }, [searchTerm, activeCategory]);

  const handleTabChange = (cat: GuideCategory | 'all') => {
    setActiveCategory(cat);
    setSearchTerm('');
  };

  return (
    <section className="pt-4 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto py-10 sm:py-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            Knowledge Base
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Cricket ID <span className="text-emerald-700">Guides & Help Centre</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Expert guides on deposits, withdrawals, platform comparisons, session betting strategy, and legal information — everything you need to bet safely and profitably.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="guides-search"
            type="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setActiveCategory('all');
            }}
            placeholder="Search guides — e.g. 'UPI deposit', 'legal', 'session betting'..."
            aria-label="Search guides"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200/90 focus:border-emerald-500 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {GUIDE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleTabChange(cat.key as GuideCategory | 'all')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[36px] ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-emerald-600'}>
                  {CATEGORY_ICONS[cat.key]}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        {(searchTerm || activeCategory !== 'all') && (
          <p className="text-slate-500 text-xs font-medium text-center mb-5">
            {filteredSlugs.length} guide{filteredSlugs.length !== 1 ? 's' : ''} found
          </p>
        )}

        {/* 2-column mobile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredSlugs.map((slug) => {
            const guide = GUIDES[slug];
            const colorClass = CATEGORY_COLORS[guide.category] ?? 'bg-slate-100 text-slate-700 border-slate-200';
            return (
              <a
                key={slug}
                href={`/guides/${slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/guides/${slug}`);
                }}
                className="text-left group p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-400 hover:shadow-sm transition-all duration-200 flex flex-col justify-between min-h-[180px]"
                aria-label={`Read guide: ${guide.title}`}
              >
                <div>
                  {/* Category badge */}
                  <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border mb-3 ${colorClass}`}>
                    {CATEGORY_ICONS[guide.category]}
                    {guide.categoryLabel}
                  </span>

                  {/* Title */}
                  <h2 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug line-clamp-2">
                    {guide.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {guide.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{guide.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                    Read Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredSlugs.length === 0 && (
          <div className="text-center py-14 bg-white rounded-2xl border border-slate-200 mt-4">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm font-medium">
              No guides found for "<span className="font-bold text-slate-700">{searchTerm}</span>". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
