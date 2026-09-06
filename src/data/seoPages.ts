import { SEO_PAGES as rawPages, ALL_SLUGS as rawSlugs, CATEGORIZED_PAGES as rawCategorized } from './seoData.js';

export interface SEOPageFAQ {
  question: string;
  answer: string;
}

export interface SEOPageData {
  slug: string;
  category: 'platform' | 'tournament' | 'team' | 'market' | 'payment' | 'city' | 'feature' | 'legal';
  categoryLabel: string;
  title: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  badge: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  contentSections: { title: string; paragraphs: string[] }[];
  faqs: SEOPageFAQ[];
  relatedSlugs: string[];
}

export const SEO_PAGES = rawPages as Record<string, SEOPageData>;
export const ALL_SLUGS = rawSlugs as string[];
export const CATEGORIZED_PAGES = rawCategorized as {
  platform: string[];
  tournament: string[];
  team: string[];
  market: string[];
  payment: string[];
  city: string[];
  feature: string[];
  legal: string[];
};
