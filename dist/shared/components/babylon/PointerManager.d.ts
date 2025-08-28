import { default as React } from 'react';
import { Scene, ArcRotateCamera, Vector3, TransformNode, Mesh } from '@babylonjs/core';
interface PointerManagerProps {
    scene: Scene;
    camera: ArcRotateCamera;
    avatarRef: React.MutableRefObject<TransformNode | null>;
    selectedMeshRef: React.MutableRefObject<TransformNode | null>;
    highlightDiscRef: React.MutableRefObject<Mesh | null>;
    highlightDiscCircles: Mesh[];
    highlightCirclesRef: React.MutableRefObject<Mesh[] | null>;
    canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
    targetDisc: Mesh;
    moveAvatarToPosition: (targetPosition: Vector3, targetDisc: Mesh | null) => void;
    onSelectItem?: (item: any) => void;
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
    cameraFollowStateRef: React.MutableRefObject<any>;
    isRightMouseDownRef: React.MutableRefObject<boolean>;
    groundSize: number;
}
export declare class PointerManager {
    private scene;
    private camera;
    private avatarRef;
    private selectedMeshRef;
    private isDraggingRef;
    private isRotatingByDiscRef;
    private highlightDiscRef;
    private highlightDiscCircles;
    private highlightCirclesRef;
    private canvasRef;
    private targetDisc;
    private moveAvatarToPosition;
    private onSelectItem?;
    private onItemTransformChange?;
    private cameraFollowStateRef;
    private isRightMouseDownRef;
    private groundHalfSize;
    private isAvatarVisible;
    private dragStartPoint;
    private initialMeshPosition;
    private lastClickTime;
    private readonly doubleClickThreshold;
    private lastPointerX;
    private deltaX;
    private readonly rotationSpeed;
    private readonly SNAP_STEP_RAD;
    private accumulatedRotation;
    constructor(props: PointerManagerProps);
    private initializePointerObservable;
    private rayPlaneIntersection;
    private findRootItem;
    private clampPositionToGround;
    private setAvatarVisibility;
    private scaleHighlightDisc;
    private setHighlightDiscPosition;
    private setHighlightDiscRotation;
    private toggleHighlightDisc;
    private deselectItem;
    private notifyTransformChange;
    dispose(): void;
    handleDeselectItem(): void;
}
export {};
