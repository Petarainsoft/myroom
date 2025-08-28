import { TransformNode, Scene, ShadowGenerator } from '@babylonjs/core';
import { LoadedItem } from '../../types/LoadedItem';
interface ItemLoaderProps {
    scene: Scene | null;
    loadedItems?: LoadedItem[];
    isSceneReady: boolean;
    itemsRef: React.MutableRefObject<TransformNode | null>;
    loadedItemMeshesRef: React.MutableRefObject<any[]>;
    shadowGeneratorRef: React.MutableRefObject<ShadowGenerator | null>;
}
export declare const useItemLoader: ({ scene, loadedItems, isSceneReady, itemsRef, loadedItemMeshesRef, shadowGeneratorRef, }: ItemLoaderProps) => void;
export default useItemLoader;
