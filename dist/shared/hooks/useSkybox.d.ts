import { Scene } from '@babylonjs/core';
export interface UseSkyboxProps {
    scene: Scene | null;
    isSceneReady: boolean;
    enabled?: boolean;
}
/**
 * Hook để tạo và quản lý skybox với shader tùy chỉnh
 */
export declare const useSkybox: ({ scene, isSceneReady, enabled }: UseSkyboxProps) => void;
export default useSkybox;
