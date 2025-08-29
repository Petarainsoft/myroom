import { Scene } from '@babylonjs/core';
import { AvatarConfig } from '../types/AvatarTypes';
interface UseAnimationManagerParams {
    sceneRef: React.MutableRefObject<Scene | null>;
    avatarConfig: AvatarConfig;
    domainConfig: any;
    idleAnimRef: React.MutableRefObject<any>;
    walkAnimRef: React.MutableRefObject<any>;
    currentAnimRef: React.MutableRefObject<any>;
    allIdleAnimationsRef: React.MutableRefObject<any[]>;
    allWalkAnimationsRef: React.MutableRefObject<any[]>;
    allCurrentAnimationsRef: React.MutableRefObject<any[]>;
}
export declare const useAnimationManager: ({ sceneRef, avatarConfig, domainConfig, idleAnimRef, walkAnimRef, currentAnimRef, allIdleAnimationsRef, allWalkAnimationsRef, componentId, }: UseAnimationManagerParams & {
    componentId?: string;
}) => {
    addAnimationTargets: (newMeshes: any[]) => void;
    loadAnimationFromGLB: (animationName: string, loadedAvatarPartsRef: React.MutableRefObject<Record<string, any[]>>, pendingPartsRef: React.MutableRefObject<Record<string, any[]>>, options?: {
        playImmediately?: boolean;
        synchronizeAnimations?: boolean;
    }) => Promise<void>;
    synchronizeAnimations: (clonedAnimations: any[]) => void;
    cloneAnimationsForSkeletons: (targetAnimGroup: any, avatarSkeletons: any[]) => ({
        animation: any;
        skeletonInfo: any;
    } | null)[];
};
export {};
