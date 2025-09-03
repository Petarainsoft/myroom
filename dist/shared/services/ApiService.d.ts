declare class ApiService {
    private static instance;
    private baseUrl;
    private apiKey;
    private readonly logPrefix;
    private constructor();
    static getInstance(): ApiService;
    /**
     * Configure API settings
     */
    configure(baseUrl: string, apiKey: string): void;
    /**
     * Get current base URL
     */
    getBaseUrl(): string;
    /**
     * Create standardized error object
     */
    private createApiError;
    /**
     * Log API request details
     */
    private logRequest;
    /**
     * Log API response details
     */
    private logResponse;
    /**
     * Make authenticated API request with improved error handling
     */
    private makeRequest;
    /**
     * Handle API response with standardized error handling
     */
    private handleResponse;
    /**
     * GET request
     */
    get(endpoint: string): Promise<any>;
    /**
     * POST request
     */
    post(endpoint: string, data?: any): Promise<any>;
    /**
     * PUT request
     */
    put(endpoint: string, data?: any): Promise<any>;
    /**
     * PATCH request
     */
    patch(endpoint: string, data?: any): Promise<any>;
    /**
     * DELETE request
     */
    delete(endpoint: string): Promise<any>;
    /**
     * Execute API call with standardized error handling and logging
     */
    private executeApiCall;
    /**
     * Fetch rooms from backend
     */
    getRooms(): Promise<any>;
    /**
     * Fetch room types from backend
     */
    getRoomTypes(): Promise<any>;
    /**
     * Get default manifest configuration
     * @deprecated Use manifestService.getLatestManifest() instead
     * Project is automatically determined from apiKey by backend middleware
     */
    getDefaultManifest(): Promise<any>;
    /**
     * Fetch room by ID
     */
    getRoomById(roomId: string): Promise<any>;
    /**
     * Fetch avatar categories from backend
     */
    getAvatarCategories(): Promise<any>;
    /**
     * Fetch avatars by gender and part type
     */
    getAvatars(gender?: string, partType?: string, page?: number, limit?: number): Promise<any>;
    /**
     * Fetch item categories from backend
     */
    getItemCategories(page?: number, limit?: number): Promise<any>;
    /**
     * Fetch items by category
     */
    getItemsByCategory(categoryId: string, page?: number, limit?: number): Promise<any>;
    /**
     * Get all items with pagination and sorting
     */
    getAllItems(page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<any>;
    /**
     * Search items across categories
     */
    searchItems(query: string, categoryId?: string, page?: number, limit?: number): Promise<any>;
}
export default ApiService;
