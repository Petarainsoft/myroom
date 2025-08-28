interface SaveManifestModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (name: string) => Promise<void>;
}
export declare function SaveManifestModal({ isOpen, onClose, onSave, }: SaveManifestModalProps): import("react/jsx-runtime").JSX.Element | null;
export {};
