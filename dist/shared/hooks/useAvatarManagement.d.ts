import { AvatarConfig, ActiveMovement, TouchMovement } from '../types/AvatarTypes';
import { LoadedItem } from '../types/LoadedItem';
import { Room } from '../types/RoomTypes';
export declare const useAvatarManagement: () => {
    avatarConfig: AvatarConfig;
    activeMovement: ActiveMovement;
    touchMovement: TouchMovement;
    setAvatarConfig: import('react').Dispatch<import('react').SetStateAction<AvatarConfig>>;
    setActiveMovement: import('react').Dispatch<import('react').SetStateAction<ActiveMovement>>;
    setTouchMovement: import('react').Dispatch<import('react').SetStateAction<TouchMovement>>;
    handleGenderChange: (newGender: "male" | "female") => void;
    handlePartChange: (partType: string, resourceId: string | null) => void;
    handleColorChange: (_partType: string, _color: string) => void;
    saveAvatarConfig: (selectedRoom: Room, loadedItems: LoadedItem[]) => void;
    loadAvatarConfig: (file: File, availableRooms: Room[], setSelectedRoom: (room: Room) => void, setLoadedItems: (items: LoadedItem[]) => void) => void;
    logAvatarChange: (selectedRoom: Room, loadedItems: LoadedItem[]) => void;
};
