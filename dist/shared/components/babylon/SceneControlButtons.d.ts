import { default as React } from 'react';
interface SceneControlButtonsProps {
    onReset: () => void;
    onToggleFullscreen: () => void;
    onToggleAvatarOverlay: () => void;
    onToggleRoomOverlay: () => void;
    isFullscreen: boolean;
    showAvatarOverlay: boolean;
    showRoomOverlay: boolean;
    enableAdvancedUI?: boolean;
}
declare const SceneControlButtons: React.FC<SceneControlButtonsProps>;
export default SceneControlButtons;
