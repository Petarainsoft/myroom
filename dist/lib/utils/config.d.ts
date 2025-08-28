import { RoomConfig, AvatarConfigProps, SceneConfig, MyRoomExportConfig } from '../types';
/**
 * Merge configurations with deep merge support
 */
export declare function mergeConfigs<T extends Record<string, any>>(defaultConfig: T, userConfig: Partial<T>): T;
/**
 * Create default configuration
 */
export declare function createDefaultConfig(): {
    roomConfig: RoomConfig;
    avatarConfig: AvatarConfigProps;
    sceneConfig: SceneConfig;
};
/**
 * Export configuration to JSON string
 */
export declare function exportConfigToJson(config: MyRoomExportConfig): string;
/**
 * Import configuration from JSON string
 */
export declare function importConfigFromJson(jsonString: string): MyRoomExportConfig;
