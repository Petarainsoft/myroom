import { ManifestConfig, ManifestWithMetadata } from '../types/ManifestConfig';
import { Room } from '../types/RoomTypes';
import { Item } from '../types/ItemTypes';
interface RoomsManifest {
    rooms: Room[];
}
interface ItemsManifest {
    items: Item[];
}
declare class ManifestService {
    private static instance;
    private roomsCache;
    private itemsCache;
    private manifestCache;
    private manifestsCache;
    private manifestIdCache;
    private readonly MANIFESTS_CACHE_TTL;
    private apiBaseUrl;
    private apiKey;
    private constructor();
    /**
     * Configure API settings for backend communication
     */
    configure(apiBaseUrl: string, apiKey: string): void;
    private getConfigValue;
    /**
     * Retry a fetch request with exponential backoff for 429 errors
     */
    private retryWithBackoff;
    static getInstance(): ManifestService;
    /**
     * Configure API settings for backend communication
     */
    /**
     * Extract manifest data from server response consistently
     */
    private extractManifestData;
    /**
     * Extract manifest list from server response consistently
     */
    private extractManifestList;
    /**
     * Load manifest configuration from backend API
     */
    private loadManifestConfig;
    /**
     * Load rooms manifest from manifest configuration
     */
    loadRoomsManifest(manifestId?: string): Promise<RoomsManifest>;
    /**
     * Load items manifest from manifest configuration
     */
    loadItemsManifest(manifestId: string): Promise<ItemsManifest>;
    /**
     * Load avatar configuration from manifest
     */
    loadAvatarConfig(manifestId: string): Promise<any>;
    /**
     * Load room configuration from manifest
     */
    loadRoomConfig(manifestId: string): Promise<any>;
    /**
     * Create a new manifest configuration via API
     */
    createManifest(name: string, config: ManifestConfig, description?: string): Promise<boolean>;
    /**
     * Save a manifest configuration (alias for createManifest)
     */
    saveManifest(_name: string, config: ManifestConfig, description?: string): Promise<boolean>;
    /**
     * Get the latest manifest for the current project
     */
    getLatestManifest(): Promise<any | null>;
    /**
     * Load a manifest by name or ID
     */
    /**
     * Get hardcoded default manifest configuration
     * This method returns the default manifest immediately without any API calls
     */
    getHardcodedDefaultManifest(): ManifestConfig;
    loadManifest(manifestIdentifier: string): Promise<ManifestConfig | null>;
    loadManifestByName(manifestName: string): Promise<ManifestConfig | null>;
    /**
     * List all manifests for the current project
     */
    listManifests(): Promise<any[]>;
    /**
     * Update an existing manifest configuration via API
     */
    updateManifest(manifestId: string, name: string, config: ManifestConfig, description?: string): Promise<boolean>;
    /**
     * Delete a manifest via API
     */
    deleteManifest(manifestId: string): Promise<boolean>;
    /**
     * Get a specific manifest by ID
     */
    getManifest(manifestId: string): Promise<ManifestConfig | null>;
    /**
     * Get a specific manifest by ID (alias for getManifest)
     */
    getManifestById(manifestId: string): Promise<ManifestConfig | null>;
    /**
     * Apply a manifest configuration to the scene
     */
    applyManifest(manifestName: string): Promise<ManifestConfig | null>;
    /**
     * Get manifests for a project
     */
    getManifests(options?: {
        page?: number;
        limit?: number;
        status?: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }): Promise<any>;
    /**
     * Get manifest by name
     */
    getManifestByName(manifestName: string): Promise<any>;
    /**
     * Get simplified list of manifests
     */
    getManifestsList(options?: {
        page?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }): Promise<any>;
    /**
     * Update manifest status
     */
    updateManifestStatus(manifestId: string, status: 'ACTIVE' | 'INACTIVE'): Promise<boolean>;
    /**
     * Get manifest versions by name
     */
    getManifestVersionsByName(manifestName: string, options?: {
        page?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }): Promise<any>;
    /**
     * Get manifest content by ID
     */
    getManifestContent(id: string): Promise<any>;
    /**
     * Fetch manifest content (alias for getManifestContent)
     */
    fetchManifestContent(id: string): Promise<any>;
    /**
     * Get manifest details
     */
    getManifestDetails(id: string): Promise<any>;
    /**
     * Get manifest with content
     */
    getManifestWithContent(id: string): Promise<any>;
    /**
     * Validate manifest data
     */
    validateManifestData(manifestData: any): {
        isValid: boolean;
        errors: string[];
    };
    /**
     * Format manifest data for API
     */
    formatManifestData(manifestData: any): any;
    /**
     * Format manifest for display
     */
    formatManifestForDisplay(manifest: any): any;
    /**
     * Get default manifest with metadata
     */
    getDefaultManifest(): ManifestWithMetadata;
    /**
     * Get manifests list with default manifest at the beginning
     */
    getManifestsWithDefault(_options?: {
        page?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }): Promise<ManifestWithMetadata[]>;
    /**
     * Clear all cached data
     */
    clearCache(): void;
}
export { ManifestService };
export declare const manifestService: ManifestService;
export default manifestService;
export type { Room, Item, RoomsManifest, ItemsManifest };
