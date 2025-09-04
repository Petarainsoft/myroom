import { ActiveMovement, TouchMovement, AvatarConfig } from '../../types/AvatarTypes';
import { ManifestConfig } from '../../types/ManifestConfig';
import { SceneConfig } from '../../../lib/types';
import { LoadedItem } from '../../types/LoadedItem';
interface MyRoomSceneProps {
    roomPath?: string;
    roomResourceId?: string | null;
    avatarConfig: AvatarConfig;
    activeMovement?: ActiveMovement;
    touchMovement?: TouchMovement;
    loadedItems?: LoadedItem[];
    onSceneReady?: (scene: any) => void;
    onLoadingStateChange?: (loadingStates: any) => void;
    gizmoMode?: "position" | "rotation" | "scale";
    onGizmoModeChange?: (mode: "position" | "rotation" | "scale") => void;
    selectedItem?: any;
    onSelectItem?: (item: any) => void;
    onItemInteraction?: (item: any) => void;
    onItemTransformChange?: (itemId: string, transform: {
        position: {
            x: number;
            y: number;
            z: number;
        };
        rotation: {
            x: number;
            y: number;
            z: number;
        };
        scale: {
            x: number;
            y: number;
            z: number;
        };
    }) => void;
    onToggleUIOverlay?: () => void;
    onToggleRoomPanel?: () => void;
    onToggleFullscreen?: () => void;
    sceneConfig?: SceneConfig;
    onError?: (error: any) => void;
    enableControls?: boolean;
    cameraControls?: boolean;
    enableAdvancedUI?: boolean;
    showAvatarOverlay?: boolean;
    showRoomOverlay?: boolean;
}
interface MyRoomSceneRef {
    resetCamera: () => void;
    getCurrentSceneConfig: () => ManifestConfig;
    rotateItem: (itemId: string, degrees: number, duration: number) => void;
    showAvatar: () => void;
    hideAvatar: () => void;
}
declare const MyRoomScene: import('react').ForwardRefExoticComponent<MyRoomSceneProps & import('react').RefAttributes<MyRoomSceneRef>>;
export { MyRoomScene };
export type { MyRoomSceneProps, MyRoomSceneRef };
export default MyRoomScene;
