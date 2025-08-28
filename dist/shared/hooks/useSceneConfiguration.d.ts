import { AvatarConfig } from '../types/AvatarTypes';
import { LoadedItem } from '../types/LoadedItem';
import { Room } from '../types/RoomTypes';
interface UseSceneConfigurationProps {
    availableRooms: Room[];
    setSelectedRoom: (room: Room) => void;
    setAvatarConfig: (config: AvatarConfig) => void;
    setLoadedItems: (items: LoadedItem[]) => void;
    selectedRoom: Room;
    avatarConfig: AvatarConfig;
    loadedItems: LoadedItem[];
    setIsLoadingManifest: (loading: boolean) => void;
    getCurrentSceneConfig?: () => any;
}
export declare const useSceneConfiguration: ({ availableRooms, setSelectedRoom, setAvatarConfig, setLoadedItems, selectedRoom, avatarConfig, loadedItems, setIsLoadingManifest, getCurrentSceneConfig, }: UseSceneConfigurationProps) => {
    getCurrentConfig: () => any;
    loadDefaultScene: () => Promise<any>;
    handleManifestSelect: (manifestId: string, manifestName?: string) => Promise<null | undefined>;
    saveManifest: (name: string) => Promise<void>;
    deleteManifest: (manifestId: string) => Promise<void>;
    logFullSceneConfig: (action?: string) => void;
    saveAvatar: () => void;
    loadAvatar: (event: React.ChangeEvent<HTMLInputElement>) => void;
    currentManifestId: string | null;
    setCurrentManifestId: import('react').Dispatch<import('react').SetStateAction<string | null>>;
};
export {};
