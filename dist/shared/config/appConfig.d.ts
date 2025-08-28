/**
 * Application Configuration
 *
 * This file contains global configuration settings for the MyRoom application.
 * Simplified to use backend API only for all asset loading.
 */
export declare const domainConfig: {
    backendDomain: string;
    apiKey: string;
};
/**
 * Initialize MyRoom configuration
 * This function allows developers to set their API key programmatically
 */
export declare const initializeMyRoomConfig: (config: {
    apiKey: string;
    backendDomain?: string;
}) => void;
/**
 * Helper function to generate embed URLs with query parameters
 */
export declare const getEmbedUrl: (params?: Record<string, any>) => string;
declare const _default: {
    domainConfig: {
        backendDomain: string;
        apiKey: string;
    };
    getEmbedUrl: (params?: Record<string, any>) => string;
    initializeMyRoomConfig: (config: {
        apiKey: string;
        backendDomain?: string;
    }) => void;
};
export default _default;
