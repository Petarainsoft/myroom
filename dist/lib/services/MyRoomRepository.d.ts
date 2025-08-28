import { Room, RoomType } from '../../shared/types/RoomTypes';
import { Item, ItemCategory } from '../../shared/types/ItemTypes';
import { AvatarPart, AvatarCategory } from '../../shared/types/AvatarTypes';
export interface DefaultManifest {
    id: string;
    name: string;
    config: Record<string, any>;
    metadata?: Record<string, any>;
}
/**
 * API Wrapper class that provides simplified methods for accessing backend APIs
 * Hides URL endpoints and HTTP request details from consumers
 */
export declare class MyRoomRepository {
    private apiService;
    constructor();
    private filterS3Data;
    /**
     * Configure the API wrapper with custom settings
     * @param baseUrl - Backend API base URL
     * @param apiKey - API key for authentication
     */
    configure(baseUrl: string, apiKey: string): void;
    /**
     * Get current base URL configured for ApiService
     */
    getBaseUrl(): string;
    /**
     * Get all available rooms
     * @returns Promise<Room[]> - List of all rooms
     */
    getRooms(): Promise<Room[]>;
    /**
     * Get rooms filtered by type
     * @param type - Room type to filter by
     * @returns Promise<Room[]> - List of rooms matching the type
     */
    getRoomsByType(type: string): Promise<Room[]>;
    /**
     * Get a specific room by ID
     * @param roomId - Room ID to fetch
     * @returns Promise<Room> - Room details
     */
    getRoomById(roomId: string): Promise<Room>;
    /**
     * Get all available room types
     * @returns Promise<RoomType[]> - List of all room types
     */
    getRoomTypes(): Promise<RoomType[]>;
    /**
     * Get avatar parts filtered by gender and optionally by part type
     * @param gender - Avatar gender ('male' | 'female')
     * @param partType - Optional part type filter
     * @param page - Page number for pagination (default: 1)
     * @param limit - Items per page (default: 20)
     * @returns Promise<AvatarPart[]> - List of avatar parts
     */
    getAvatarParts(gender: 'male' | 'female', partType?: string, page?: number, limit?: number): Promise<AvatarPart[]>;
    /**
     * Get all avatar categories
     * @returns Promise<AvatarCategory[]> - List of avatar categories
     */
    getAvatarCategories(): Promise<AvatarCategory[]>;
    /**
     * Get all item categories
     * @param page - Page number for pagination (default: 1)
     * @param limit - Items per page (default: 50)
     * @returns Promise<ItemCategory[]> - List of item categories
     */
    getItemCategories(page?: number, limit?: number): Promise<ItemCategory[]>;
    /**
     * Get items by category ID
     * @param categoryId - Category ID to filter by
     * @param page - Page number for pagination (default: 1)
     * @param limit - Items per page (default: 20)
     * @returns Promise<Item[]> - List of items in the category
     */
    getItemsByCategory(categoryId: string, page?: number, limit?: number): Promise<Item[]>;
    /**
     * Search items across all categories
     * @param query - Search query string
     * @param categoryId - Optional category ID to limit search scope
     * @param page - Page number for pagination (default: 1)
     * @param limit - Items per page (default: 20)
     * @returns Promise<Item[]> - List of matching items
     */
    searchItems(query: string, categoryId?: string, page?: number, limit?: number): Promise<Item[]>;
    /**
     * Get the default manifest configuration
     * @returns Promise<DefaultManifest> - Default manifest data
     */
    getDefaultManifest(): Promise<DefaultManifest>;
    /**
     * Get available avatar part types from categories
     * @param gender - Optional gender filter
     * @returns Promise<string[]> - List of unique part types
     */
    /**
     * Get manifests with options (pagination, filtering, sorting)
     * @param options - Optional query parameters
     * @returns Promise<any> - List of manifests
     */
    getManifests(options?: {
        page?: number;
        limit?: number;
        status?: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }): Promise<any>;
    /**
     * Get latest manifest
     * @returns Promise<any> - Latest manifest
     */
    getLatestManifest(): Promise<any>;
    /**
     * Get all versions of a manifest by name
     * @param name - Manifest name
     * @param options - Optional query parameters
     * @returns Promise<any> - List of manifest versions
     */
    getManifestVersions(name: string, options?: {
        page?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }): Promise<any>;
    /**
     * Get manifest by name
     * @param name - Manifest name
     * @returns Promise<any> - Manifest details
     */
    getManifestByName(name: string): Promise<any>;
    /**
     * Get a specific manifest by ID
     * @param manifestId - Manifest ID to fetch
     * @returns Promise<any> - Manifest details
     */
    getManifest(manifestId: string): Promise<any>;
    /**
     * Create a new manifest for a specific project
     * @param data - Manifest data (name, description, config)
     * @returns Promise<any> - Created manifest details
     */
    createManifestForProject(data: {
        name: string;
        description?: string;
        config: any;
    }): Promise<any>;
    /**
     * Create a new manifest (using authenticated project from API key)
     * @param data - Manifest data (name, description, config)
     * @returns Promise<any> - Created manifest details
     */
    createManifest(data: {
        name: string;
        version?: string;
        description?: string;
        config: any;
    }): Promise<any>;
    /**
     * Update an existing manifest
     * @param manifestId - Manifest ID to update
     * @param data - Updated manifest data
     * @returns Promise<any> - Updated manifest details
     */
    updateManifest(manifestId: string, data: {
        name?: string;
        description?: string;
        config?: any;
    }): Promise<any>;
    /**
     * Update manifest status (activate/deactivate)
     * @param manifestId - Manifest ID to update
     * @param status - New status ('ACTIVE' | 'INACTIVE')
     * @returns Promise<any> - Updated manifest status
     */
    updateManifestStatus(manifestId: string, status: 'ACTIVE' | 'INACTIVE'): Promise<any>;
    /**
     * Delete a manifest
     * @param manifestId - Manifest ID to delete
     * @returns Promise<any> - Deletion result
     */
    deleteManifest(manifestId: string): Promise<any>;
    /**
     * Get manifest content
     * @param manifestId - Manifest ID to get content for
     * @returns Promise<any> - Manifest content
     */
    getManifestContent(manifestId: string): Promise<any>;
    /**
     * Get manifest details (same as getManifest)
     * @param manifestId - Manifest ID to get details for
     * @returns Promise<any> - Manifest details
     */
    getManifestDetails(manifestId: string): Promise<any>;
    /**
     * Get manifest with content
     * @param manifestId - Manifest ID to get with content
     * @returns Promise<any> - Manifest with content
     */
    getManifestWithContent(manifestId: string): Promise<any>;
    getAvatarPartTypes(gender?: 'male' | 'female'): Promise<string[]>;
}
export declare const myRoomRepository: MyRoomRepository;
export default myRoomRepository;
