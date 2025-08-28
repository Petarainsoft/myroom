import { Vector3, Scene, ArcRotateCamera, TransformNode, Mesh } from '@babylonjs/core';
import { TouchMovement } from '../../types/AvatarTypes';
interface UseAvatarMovementProps {
    sceneRef: React.MutableRefObject<Scene | null>;
    cameraRef: React.MutableRefObject<ArcRotateCamera | null>;
    avatarRef: React.MutableRefObject<TransformNode | null>;
    touchMovement?: TouchMovement;
    isSceneReady: boolean;
    idleAnimRef: React.MutableRefObject<any>;
    walkAnimRef: React.MutableRefObject<any>;
    currentAnimRef: React.MutableRefObject<any>;
    allIdleAnimationsRef: React.MutableRefObject<any[]>;
    allWalkAnimationsRef: React.MutableRefObject<any[]>;
    allCurrentAnimationsRef: React.MutableRefObject<any[]>;
    AVATAR_BOUNDARY_LIMIT?: number;
    CAMERA_TARGET_HEAD_OFFSET?: number;
    cameraOffset?: Vector3;
}
export declare function useAvatarMovement({ sceneRef, cameraRef, avatarRef, touchMovement, isSceneReady, idleAnimRef, walkAnimRef, currentAnimRef, allIdleAnimationsRef, allWalkAnimationsRef, allCurrentAnimationsRef, AVATAR_BOUNDARY_LIMIT, CAMERA_TARGET_HEAD_OFFSET, cameraOffset, }: UseAvatarMovementProps): {
    avatarMovementStateRef: import('react').MutableRefObject<{
        isMoving: boolean;
        targetPosition: Vector3 | null;
        startPosition: Vector3 | null;
        animationProgress: number;
        movementSpeed: number;
        totalDistance: number;
        targetRotation: number;
        startRotation: number;
        shouldRotate: boolean;
    }>;
    cameraFollowStateRef: import('react').MutableRefObject<{
        currentTarget: Vector3;
        dampingFactor: number;
        shouldFollowAvatar: boolean;
    }>;
    isRightMouseDownRef: import('react').MutableRefObject<boolean>;
    animationBlendingRef: import('react').MutableRefObject<{
        isBlending: boolean;
        blendDuration: number;
        blendProgress: number;
        fromAnimations: any[];
        toAnimations: any[];
        startTime: number;
    }>;
    avatarMovementObserverRef: import('react').MutableRefObject<any>;
    moveAvatarToPosition: (targetPosition: Vector3, targetDisc: Mesh | null) => void;
    resetAvatarMovement: () => void;
    AVATAR_BOUNDARY_LIMIT: number;
    CAMERA_TARGET_HEAD_OFFSET: number;
};
export {};
