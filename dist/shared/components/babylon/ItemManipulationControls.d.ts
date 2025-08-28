import { default as React } from 'react';
interface ItemManipulationControlsProps {
    gizmoMode?: "position" | "rotation" | "scale";
    onGizmoModeChange?: (mode: "position" | "rotation" | "scale") => void;
}
export declare const ItemManipulationControls: React.FC<ItemManipulationControlsProps>;
export {};
