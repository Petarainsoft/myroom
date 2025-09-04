import { CSSProperties } from 'react';
import { AvatarConfig } from '../../shared/types/AvatarTypes';
export type { AvatarConfig };
export interface MyRoomProps {
    roomConfig?: RoomConfig;
    avatarConfig?: AvatarConfigProps;
    sceneConfig?: SceneConfig;
    manifestName?: string;
    manifestId?: string;
    showAvatarOverlay?: boolean;
    showRoomOverlay?: boolean;
    showInstructions?: boolean;
    instructionText?: string;
    enableAdvancedUI?: boolean;
    onSceneReady?: (scene: any) => void;
    onAvatarChange?: (config: AvatarConfig) => void;
    onRoomChange?: (room: any) => void;
    onItemAdd?: (item: any) => void;
    onItemRemove?: (itemId: string) => void;
    onItemInteraction?: (item: any) => void;
    onError?: (error: Error) => void;
    className?: string;
    style?: CSSProperties;
    height?: string | number;
    width?: string | number;
}
export interface RoomConfig {
    roomResourceId?: string;
}
export interface AvatarConfigProps {
    gender?: "male" | "female";
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
    backgroundColor?: string;
    enableShadows?: boolean;
    lighting?: {
        intensity?: number;
        color?: string;
        shadows?: boolean;
    };
    cameraSettings?: CameraConfig;
    renderSettings?: RenderConfig;
    zoomSettings?: {
        enableZoom?: boolean;
        sensitivity?: number;
        initialDistance?: number;
    };
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
export interface MyRoomRef {
    getScene: () => any;
    isSceneReady?: () => boolean;
    changeRoom: (room: any) => void;
    getCurrentRoom: () => any;
    updateAvatar: (config: any) => void;
    getCurrentAvatar: () => any;
    showAvatar: () => void;
    hideAvatar: () => void;
    addItem: (item: any) => void;
    removeItem: (itemId: string) => void;
    getItems?: () => any[];
    getLoadedItems: () => any[];
    rotateItem: (itemId: string, degrees: number, duration: number) => void;
    exportConfig: () => any;
    importConfig: (config: any) => void;
    takeScreenshot: () => Promise<string>;
    toggleAvatarOverlay: () => void;
    toggleRoomOverlay: () => void;
}
export interface MyRoomExportConfig {
    room: string | undefined;
    avatar: AvatarConfig;
    items: any[];
    metadata?: Record<string, any>;
}
export interface MyRoomConfig {
    roomConfig?: RoomConfig;
    avatarConfig?: AvatarConfig;
    sceneConfig?: SceneConfig;
    itemConfigs?: any[];
    apiConfig?: {
        apiKey?: string;
        backendDomain?: string;
    };
    uiConfig?: {
        showAvatarOverlay?: boolean;
        showRoomOverlay?: boolean;
        showInstructions?: boolean;
        instructionText?: string;
    };
}
export interface MyAvatarProps {
    avatarConfig?: AvatarConfigProps;
    sceneConfig?: SceneConfig;
    enableZoom?: boolean;
    zoomSensitivity?: number;
    initialZoom?: number;
    enableAdvancedUI?: boolean;
    showAvatarOverlay?: boolean;
    showInstructions?: boolean;
    instructionText?: string;
    onSceneReady?: (scene: any) => void;
    onAvatarChange?: (config: AvatarConfig) => void;
    onError?: (error: Error) => void;
    className?: string;
    style?: CSSProperties;
    height?: string | number;
    width?: string | number;
}
export interface MyAvatarRef {
    getScene: () => any;
    isSceneReady?: () => boolean;
    updateAvatar: (config: any) => void;
    getCurrentAvatar: () => any;
    takeScreenshot: () => Promise<string>;
    toggleAvatarOverlay: () => void;
    dispose?: () => void;
}
