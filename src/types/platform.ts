export interface PlatformCardItem {
  id: string;
  name: string;
  slug: string;
  badge: string;
  minDeposit: string;
  payoutSpeed: string;
  rating: number;
  reviewCount: number;
  bestFor: string;
  logoBg: string;
  logoText: string;
  logoAccent: string;
  featured?: boolean;
}

export interface TrustBadgeItem {
  id: string;
  iconName: 'support' | 'withdrawal' | 'security' | 'bonus';
  title: string;
  subtitle: string;
}

export interface SecurityFeatureItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  timeEstimate: string;
}

// ─── Platform Review Page Types ────────────────────────────────────────────

export interface PlatformReviewProCon {
  text: string;
}

export interface PlatformReviewFAQ {
  q: string;
  a: string;
}

export interface PlatformReviewScoreCard {
  label: string;   // e.g. "Payout Speed"
  score: number;   // 0–10 integer
  note: string;    // e.g. "2–10 min UPI"
}

export interface PlatformReviewData {
  slug: string;                         // route key, e.g. "laser247"
  name: string;                         // display name
  tagline: string;                      // hero sub-headline
  logoText: string;                     // initials for avatar
  logoBg: string;                       // Tailwind bg-gradient class
  logoAccent: string;                   // Tailwind border class
  overallRating: number;                // e.g. 4.9
  reviewCount: number;
  minDeposit: string;                   // "₹100"
  payoutSpeed: string;                  // "2–10 Min"
  activationTime: string;               // "2 Min"
  metaTitle: string;
  metaDescription: string;
  editorialSummary: string;             // 2–3 sentence expert verdict
  pros: PlatformReviewProCon[];
  cons: PlatformReviewProCon[];
  scoreCard: PlatformReviewScoreCard[];
  contentSections: {
    title: string;
    paragraphs: string[];
  }[];
  faqs: PlatformReviewFAQ[];
  relatedSlugs: string[];               // existing SEO_PAGES slugs
  detailPageSlug: string;               // existing /${slug} page
}

// ─── Guides / Knowledge Base Types ────────────────────────────────────────

export type GuideCategory =
  | 'payments'
  | 'registration'
  | 'troubleshooting'
  | 'comparisons'
  | 'legal'
  | 'strategy';

export interface GuideTOCItem {
  id: string;    // matches <h2 id="..."> in htmlContent
  label: string; // visible TOC label
}

export interface GuideArticle {
  slug: string;
  category: GuideCategory;
  categoryLabel: string;        // e.g. "Payments"
  title: string;                // <h1> and og:title
  description: string;          // meta description + card excerpt
  publishDate: string;          // ISO 8601, e.g. "2026-08-15"
  readTime: string;             // e.g. "5 min read"
  authorEntity: string;         // e.g. "Online Cricket ID Editorial Team"
  tableOfContents: GuideTOCItem[];
  htmlContent: string;          // sanitized HTML with h2/h3/ul/strong tags
}
