import { UtilityLayerRenderer, Mesh } from '@babylonjs/core';
interface ItemManipulatorProps {
    gizmoMode?: "position" | "rotation" | "scale";
    selectedItem?: any;
    utilityLayerRef: React.MutableRefObject<UtilityLayerRenderer | null>;
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
    onSelectItem?: (item: any) => void;
    loadedItemMeshesRef: React.MutableRefObject<any[]>;
    highlightDiscRef: React.MutableRefObject<Mesh | null>;
}
export declare const useItemManipulator: ({ gizmoMode, selectedItem, utilityLayerRef, onItemTransformChange, onSelectItem, loadedItemMeshesRef, highlightDiscRef, }: ItemManipulatorProps) => {
    selectItem: (mesh: any) => void;
    deselectItem: () => void;
    updateGizmo: (mesh: any) => void;
    updateItemTransform: (itemId: string, mesh: any, immediate?: boolean) => void;
};
export default useItemManipulator;
