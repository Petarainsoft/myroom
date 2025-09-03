import { Scene } from '@babylonjs/core';
import { AvatarConfig } from '../../types/AvatarTypes';
import { SceneConfig } from '../../../lib/types';
interface MyAvatarSceneProps {
    avatarConfig: AvatarConfig;
    onSceneReady?: (scene: any) => void;
    onLoadingStateChange?: (loadingStates: any) => void;
    sceneConfig?: SceneConfig;
    onError?: (error: any) => void;
    enableControls?: boolean;
    cameraControls?: boolean;
}
interface MyAvatarSceneRef {
    resetCamera: () => void;
    getScene: () => Scene | null;
}
declare const MyAvatarScene: import('react').ForwardRefExoticComponent<MyAvatarSceneProps & import('react').RefAttributes<MyAvatarSceneRef>>;
export { MyAvatarScene };
export type { MyAvatarSceneProps, MyAvatarSceneRef };
