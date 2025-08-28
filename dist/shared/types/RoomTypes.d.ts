/**
 * Room-related type definitions
 * Centralized location for all room-related interfaces
 */
/**
 * Unified Room interface that combines basic and extended room properties
 * Used throughout the application for both manifest and API data
 */
export interface Room {
    id?: string;
    name: string;
    resourceId: string;
    path?: string;
    description?: string;
    roomTypeId?: string;
    url?: string;
    isPaid?: boolean;
    price?: number;
    tags?: string[];
    metadata?: Record<string, any>;
    thumbnailUrl?: string;
    s3Key?: string;
    s3Url?: string;
}
/**
 * Room type definition for categorizing rooms
 */
export interface RoomType {
    id: string;
    name: string;
    label: string;
    resource_path: string;
}
/**
 * Room configuration interface for manifest usage
 */
export interface RoomConfig {
    room: Room;
    metadata?: Record<string, any>;
}
/**
 * Legacy alias for backward compatibility
 * @deprecated Use Room interface instead
 */
export type RoomData = Room;
