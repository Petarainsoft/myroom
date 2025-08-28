import { ManifestConfig } from '../types/ManifestConfig';
interface ManifestDropdownProps {
    onManifestSelect: (manifestId: string, manifestName?: string) => void;
    onManifestSave: (name: string, config: ManifestConfig) => Promise<void>;
    onManifestDelete?: (manifestId: string) => Promise<void>;
    currentConfig?: ManifestConfig;
    onGetCurrentConfig?: () => ManifestConfig | undefined;
    currentManifestId?: string | null;
    className?: string;
    onManifestChange?: (manifestName: string) => void;
}
export declare function ManifestDropdown({ onManifestSelect, onManifestSave, onManifestDelete, currentConfig, onGetCurrentConfig, currentManifestId, className, onManifestChange: _onManifestChange, }: ManifestDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
