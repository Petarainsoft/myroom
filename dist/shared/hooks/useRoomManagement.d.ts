import { AvatarConfig } from '../types/AvatarTypes';
import { LoadedItem } from '../types/LoadedItem';
import { Room } from '../types/RoomTypes';
export declare const useRoomManagement: () => {
    availableRooms: Room[];
    selectedRoom: Room;
    setSelectedRoom: import('react').Dispatch<import('react').SetStateAction<Room>>;
    roomsLoaded: boolean;
    isLoadingRooms: boolean;
    currentRoom: Room;
    isLoading: boolean;
    changeRoom: (roomId: string) => void;
    refreshRooms: () => Promise<void>;
    getRoomDetails: (resourceId: string) => import('./useBackendData').BackendRoom | null;
    backendRooms: import('./useBackendData').BackendRoom[];
    backendRoomsLoaded: boolean;
    logRoomChange: (avatarConfig: AvatarConfig, loadedItems: LoadedItem[]) => void;
    loadRooms: () => Promise<void>;
};
