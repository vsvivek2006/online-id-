import { GuideArticle, GuideCategory } from '@/types/platform';
import {
  GUIDES as rawGuides,
  ALL_GUIDE_SLUGS as rawSlugs,
  GUIDES_BY_CATEGORY as rawByCategory,
  GUIDE_CATEGORIES as rawCategories,
  GUIDE_TAKEAWAYS as rawTakeaways,
} from './guidesData.js';

export const GUIDES = rawGuides as Record<string, GuideArticle>;
export const ALL_GUIDE_SLUGS = rawSlugs as string[];
export const GUIDES_BY_CATEGORY = rawByCategory as Record<string, string[]>;
export const GUIDE_CATEGORIES = rawCategories as { key: GuideCategory | 'all'; label: string }[];
export const GUIDE_TAKEAWAYS = rawTakeaways as Record<string, { highlights: string[]; keyPoints: string[] }>;

