import { Scene, TransformNode, ShadowGenerator } from '@babylonjs/core';
import { AvatarConfig } from '../types/AvatarTypes';
interface UseAvatarPartLoaderParams {
    sceneRef: React.MutableRefObject<Scene | null>;
    avatarRef: React.MutableRefObject<TransformNode | null>;
    shadowGeneratorRef?: React.MutableRefObject<ShadowGenerator | null>;
}
export declare const useAvatarPartLoader: ({ sceneRef, avatarRef, shadowGeneratorRef, }: UseAvatarPartLoaderParams) => {
    loadedAvatarPartsRef: import('react').MutableRefObject<Record<string, any[]>>;
    pendingPartsRef: import('react').MutableRefObject<Record<string, any[]>>;
    oldPartsToDisposeRef: import('react').MutableRefObject<Record<string, any[]>>;
    loadingGenderPartsRef: import('react').MutableRefObject<{
        isLoading: boolean;
        gender: string | null;
        parts: Record<string, any[]>;
    }>;
    loadAvatarPart: (partType: string, partData: any, domainConfig: any, gender: string) => Promise<any[]>;
    loadBodyPart: (avatarConfig: AvatarConfig, domainConfig: any) => Promise<any[]>;
    loadSelectablePart: (partType: string, partKey: any, avatarConfig: AvatarConfig, domainConfig: any) => Promise<any[] | null>;
    enableAvatarParts: (partType: string, meshes: any[]) => void;
    disableAvatarParts: (partType: string, meshes: any[]) => void;
    disposeAvatarParts: (partType: string, meshes: any[]) => void;
    checkAllPartsLoaded: (avatarConfig: AvatarConfig) => boolean;
    waitForAllPartsToLoad: (avatarConfig: AvatarConfig) => Promise<void>;
    cleanupAllParts: () => void;
};
export {};
