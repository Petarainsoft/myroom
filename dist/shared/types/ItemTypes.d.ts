/**
 * Unified Item interface that combines manifest, catalog, and API properties
 * Used throughout the application for all item-related operations
 */
export interface Item {
    id: string;
    name: string;
    resourceId: string;
    category?: string;
    categoryId?: string;
    path?: string;
    description?: string;
    url?: string;
    isPaid?: boolean;
    price?: number;
    tags?: string[];
    metadata?: Record<string, any>;
    s3Key?: string;
    s3Url?: string;
    fileType?: string;
    thumbnailUrl?: string;
    position?: {
        x: number;
        y: number;
        z: number;
    };
    rotation?: {
        x: number;
        y: number;
        z: number;
    };
    scale?: {
        x: number;
        y: number;
        z: number;
    };
}
/**
 * Legacy aliases for backward compatibility
 * @deprecated Use Item interface instead
 */
export type AvailableItem = Item;
export type ItemData = Item;
/**
 * CategoryData interface for item categorization
 * Used for organizing items by category with metadata
 */
export interface CategoryData {
    id: string;
    name: string;
    description?: string;
    itemCount?: number;
}
/**
 * ItemCategory interface for API responses and catalog browsing
 * Extended category information with premium and pricing details
 */
export interface ItemCategory {
    id: string;
    name: string;
    description?: string;
    isPremium?: boolean;
    price?: number;
    metadata?: Record<string, any>;
}
