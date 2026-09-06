import { PlatformReviewData } from '@/types/platform';
import { PLATFORM_REVIEWS as rawReviews } from './platformReviews.js';

export const PLATFORM_REVIEWS = rawReviews as Record<string, PlatformReviewData>;
