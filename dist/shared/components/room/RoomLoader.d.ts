import { default as React } from 'react';
import { TransformNode, Scene } from '@babylonjs/core';
interface RoomLoaderProps {
    scene: Scene | null;
    roomPath?: string;
    roomResourceId?: string | null;
    isSceneReady: boolean;
    roomRef: React.MutableRefObject<TransformNode | null>;
}
export declare const useRoomLoader: ({ scene, roomPath, roomResourceId, isSceneReady, roomRef, }: RoomLoaderProps) => void;
export default useRoomLoader;
