import { Scene, TransformNode, ShadowGenerator } from '@babylonjs/core';
import { AvatarConfig } from '../../types/AvatarTypes';
interface UseAvatarLoaderParams {
    sceneRef: React.MutableRefObject<Scene | null>;
    avatarConfig: AvatarConfig;
    domainConfig: any;
    idleAnimRef: React.MutableRefObject<any>;
    walkAnimRef: React.MutableRefObject<any>;
    currentAnimRef: React.MutableRefObject<any>;
    allIdleAnimationsRef: React.MutableRefObject<any[]>;
    allWalkAnimationsRef: React.MutableRefObject<any[]>;
    allCurrentAnimationsRef: React.MutableRefObject<any[]>;
    avatarRef: React.MutableRefObject<TransformNode | null>;
    shadowGeneratorRef?: React.MutableRefObject<ShadowGenerator | null>;
}
/**
 * Custom hook to manage avatar part loading, gender switching, and animation management.
 * @param {object} params
 * @param {React.MutableRefObject<Scene|null>} params.sceneRef - Ref to the Babylon.js scene
 * @param {AvatarConfig} params.avatarConfig - Avatar configuration (gender, parts)
 * @param {object} params.domainConfig - Domain config for asset URLs
 * @param {React.MutableRefObject<any>} params.idleAnimRef - Ref for idle animation
 * @param {React.MutableRefObject<any>} params.walkAnimRef - Ref for walk animation
 * @param {React.MutableRefObject<any>} params.currentAnimRef - Ref for current animation
 * @param {React.MutableRefObject<any[]>} params.allIdleAnimationsRef - Ref for all idle animations
 * @param {React.MutableRefObject<any[]>} params.allWalkAnimationsRef - Ref for all walk animations
 * @param {React.MutableRefObject<any[]>} params.allCurrentAnimationsRef - Ref for all current animations
 * @param {React.MutableRefObject<TransformNode|null>} params.avatarRef - Ref for avatar container node
 * @returns {object} - Avatar part/animation refs, state, and loader functions
 */
export declare function useAvatarLoader({ sceneRef, avatarConfig, domainConfig, idleAnimRef, walkAnimRef, currentAnimRef, allIdleAnimationsRef, allWalkAnimationsRef, allCurrentAnimationsRef, avatarRef, shadowGeneratorRef, }: UseAvatarLoaderParams): {
    loadedAvatarPartsRef: import('react').MutableRefObject<Record<string, any[]>>;
    pendingPartsRef: import('react').MutableRefObject<Record<string, any[]>>;
    oldPartsToDisposeRef: import('react').MutableRefObject<Record<string, any[]>>;
    loadingGenderPartsRef: import('react').MutableRefObject<{
        isLoading: boolean;
        gender: string | null;
        parts: Record<string, any[]>;
    }>;
    loadBodyPart: (avatarConfig: AvatarConfig, domainConfig: any) => Promise<any[]>;
    loadSelectablePart: (partType: string, partKey: any, avatarConfig: AvatarConfig, domainConfig: any) => Promise<any[] | null>;
    enableAvatarParts: (partType: string, meshes: any[]) => void;
    disableAvatarParts: (partType: string, meshes: any[]) => void;
    disposeAvatarParts: (partType: string, meshes: any[]) => void;
    waitForAllPartsToLoad: (avatarConfig: AvatarConfig) => Promise<void>;
    cleanupAllParts: () => void;
    addAnimationTargets: (newMeshes: any[]) => void;
    loadAnimationFromGLB: (animationName: string, loadedAvatarPartsRef: React.MutableRefObject<Record<string, any[]>>, pendingPartsRef: React.MutableRefObject<Record<string, any[]>>, options?: {
        playImmediately?: boolean;
        synchronizeAnimations?: boolean;
    }) => Promise<void>;
    isAnimationReady: boolean;
    setIsAnimationReady: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    isLoading: boolean;
    loadAvatar: () => Promise<void>;
    clearAnimationCache: () => void;
    clearExpiredAnimationCache: () => void;
    getAnimationCacheSize: () => number;
};
export {};
