/**
 * Avatar URL Helpers
 * Handles fetching presigned URLs for avatar parts and animations from backend API
 */
/**
 * Get avatar part URL from backend API
 * @param partData - Avatar part data containing resourceId
 * @param domainConfig - Domain configuration with backend URL and API key
 * @returns Promise<string> - Presigned URL for the avatar part
 */
export declare const getAvatarPartUrl: (partData: any, domainConfig: any) => Promise<string>;
/**
 * Get animation URL from backend API
 * @param gender - Avatar gender for animation loading
 * @param domainConfig - Domain configuration with backend URL and API key
 * @returns Promise<string> - Presigned URL for the animation file
 */
export declare const getAnimationUrl: (gender: string, domainConfig: any) => Promise<string>;
/**
 * Validate domain configuration
 * @param domainConfig - Domain configuration to validate
 * @returns boolean - True if configuration is valid
 */
export declare const validateDomainConfig: (domainConfig: any) => boolean;
/**
 * Create API headers for backend requests
 * @param domainConfig - Domain configuration
 * @returns Headers object for fetch requests
 */
export declare const createApiHeaders: (domainConfig: any) => HeadersInit;
/**
 * Clear expired cache entries
 */
export declare const clearExpiredUrlCache: () => void;
/**
 * Clear all URL cache
 */
export declare const clearAllUrlCache: () => void;
/**
 * Get cache statistics
 */
export declare const getUrlCacheStats: () => {
    animationUrlCacheSize: number;
    avatarPartUrlCacheSize: number;
    pendingRequestsSize: number;
    preloadedResourcesSize: number;
};
/**
 * Batch load multiple avatar parts concurrently
 * @param partDataArray - Array of avatar part data
 * @param domainConfig - Domain configuration
 * @returns Promise<string[]> - Array of presigned URLs
 */
export declare const batchLoadAvatarParts: (partDataArray: any[], domainConfig: any) => Promise<string[]>;
/**
 * Preload commonly used avatar resources
 * @param resourceIds - Array of resource IDs to preload
 * @param domainConfig - Domain configuration
 */
export declare const preloadAvatarResources: (resourceIds: string[], domainConfig: any) => Promise<void>;
/**
 * Preload animations for both genders
 * @param domainConfig - Domain configuration
 */
export declare const preloadAnimations: (domainConfig: any) => Promise<void>;
/**
 * Check if a resource is preloaded
 * @param resourceId - Resource ID to check
 * @returns boolean - True if resource is preloaded
 */
export declare const isResourcePreloaded: (resourceId: string) => boolean;
/**
 * Clear pending requests (useful for cleanup)
 */
export declare const clearPendingRequests: () => void;
/**
 * Auto cleanup expired cache entries (should be called periodically)
 */
export declare const autoCleanupCache: () => void;
