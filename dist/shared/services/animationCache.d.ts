/**
 * Animation Cache Service
 * Manages caching of animation groups to improve performance and reduce loading times
 */
interface AnimationCacheEntry {
    animationGroups: any[];
    url: string;
    gender: string;
    timestamp: number;
}
/**
 * Get cached animation if available and not expired
 */
export declare const getCachedAnimation: (cacheKey: string) => AnimationCacheEntry | null;
/**
 * Cache animation groups with metadata
 */
export declare const setCachedAnimation: (cacheKey: string, animationGroups: any[], url: string, gender: string) => void;
/**
 * Clear expired cache entries
 */
export declare const clearExpiredCache: () => void;
/**
 * Clear all cache entries
 */
export declare const clearAllCache: () => void;
/**
 * Get current cache size
 */
export declare const getCacheSize: () => number;
/**
 * Get cache statistics
 */
export declare const getCacheStats: () => {
    total: number;
    valid: number;
    expired: number;
    cacheKeys: string[];
};
export {};
