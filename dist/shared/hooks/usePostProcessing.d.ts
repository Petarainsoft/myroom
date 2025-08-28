import { Scene, Camera } from '@babylonjs/core';
export interface UsePostProcessingProps {
    scene: Scene | null;
    camera: Camera | null;
    isSceneReady: boolean;
    options?: {
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
}
/**
 * Hook để quản lý các hiệu ứng hậu xử lý (post-processing) trong Babylon.js
 */
export declare const usePostProcessing: ({ scene, camera, isSceneReady, options, }: UsePostProcessingProps) => void;
export default usePostProcessing;
