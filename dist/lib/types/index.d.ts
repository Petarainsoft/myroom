import { CSSProperties } from 'react';
import { AvatarConfig } from '../../shared/types/AvatarTypes';
export type { AvatarConfig };
export interface MyRoomProps {
    roomConfig?: RoomConfig;
    initialRoom?: string;
    avatarConfig?: AvatarConfigProps;
    initialAvatar?: any;
    sceneConfig?: SceneConfig;
    showControls?: boolean;
    showAvatarOverlay?: boolean;
    showRoomOverlay?: boolean;
    ultraCompactMode?: boolean;
    showInstructions?: boolean;
    instructionText?: string;
    onSceneReady?: (scene: any) => void;
    onAvatarChange?: (config: AvatarConfig) => void;
    onRoomChange?: (room: any) => void;
    onItemAdd?: (item: any) => void;
    onItemRemove?: (itemId: string) => void;
    onError?: (error: Error) => void;
    className?: string;
    style?: CSSProperties;
    height?: string | number;
    width?: string | number;
    enableDebug?: boolean;
    customDomain?: string;
    apiEndpoint?: string;
}
export interface RoomConfig {
    id?: string;
    roomResourceId?: string;
    category?: string;
    url?: string;
}
export interface AvatarConfigProps {
    defaultGender?: "male" | "female";
    gender?: "male" | "female";
    enableCustomization?: boolean;
    enableMovement?: boolean;
    enableAnimations?: boolean;
    avatarAssetPath?: string;
}
export interface SceneConfig {
    postProcessing?: {
        enableFXAA?: boolean;
        enableMSAA?: boolean;
        enableBloom?: boolean;
        bloomIntensity?: number;
        bloomThreshold?: number;
        enableDOF?: boolean;
        enableSSAO?: boolean;
        enableImageProcessing?: boolean;
        contrast?: number;
        exposure?: number;
    };
    enableSkybox?: boolean;
    enableShadows?: boolean;
    lighting?: {
        intensity?: number;
        color?: string;
        shadows?: boolean;
    };
    cameraSettings?: CameraConfig;
    renderSettings?: RenderConfig;
}
export interface CameraConfig {
    position?: {
        x: number;
        y: number;
        z: number;
    };
    target?: {
        x: number;
        y: number;
        z: number;
    };
    fov?: number;
    minDistance?: number;
    maxDistance?: number;
}
export interface RenderConfig {
    antialias?: boolean;
    adaptToDeviceRatio?: boolean;
    powerPreference?: "default" | "high-performance" | "low-power";
}
export interface ItemConfig {
    id: string;
    name: string;
    resourceId?: string;
    url?: string;
    format?: string;
    path?: string;
    category?: string;
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
    metadata?: Record<string, any>;
}
export interface MyRoomRef {
    getScene: () => any;
    isSceneReady?: () => boolean;
    changeRoom: (room: any) => void;
    getCurrentRoom: () => any;
    updateAvatar: (config: any) => void;
    getCurrentAvatar: () => any;
    addItem: (item: any) => void;
    removeItem: (itemId: string) => void;
    getItems?: () => any[];
    getLoadedItems: () => any[];
    exportConfig: () => any;
    importConfig: (config: any) => void;
    takeScreenshot: () => Promise<string>;
    toggleAvatarOverlay: () => void;
    toggleRoomOverlay: () => void;
}
export interface MyRoomExportConfig {
    room: string | undefined;
    avatar: AvatarConfig;
    items: ItemConfig[];
    metadata?: Record<string, any>;
}
export interface MyRoomConfig {
    roomConfig?: RoomConfig;
    avatarConfig?: AvatarConfig;
    sceneConfig?: SceneConfig;
    itemConfigs?: ItemConfig[];
    apiConfig?: {
        apiKey?: string;
        backendDomain?: string;
        projectId?: string;
    };
    uiConfig?: {
        showControls?: boolean;
        showAvatarOverlay?: boolean;
        showRoomOverlay?: boolean;
        ultraCompactMode?: boolean;
        showInstructions?: boolean;
        instructionText?: string;
    };
    enableDebug?: boolean;
    customDomain?: string;
}
