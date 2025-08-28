export interface BackendAvatarPart {
    id: string;
    name: string;
    description?: string;
    resourceId: string;
    gender: 'MALE' | 'FEMALE';
    partType: 'HAIR' | 'TOP' | 'BOTTOM' | 'SHOES' | 'ACCESSORY' | 'FULLSET' | 'BODY';
    s3Url: string;
    isPremium: boolean;
    isFree: boolean;
}
export interface BackendAvatarCategory {
    id: string;
    name: string;
    description?: string;
    categoryType: string;
    level: number;
    path: string;
    children?: BackendAvatarCategory[];
}
export interface BackendRoom {
    id: string;
    name: string;
    description?: string;
    s3Url: string;
    resourceId: string;
    roomTypeId: string;
    isPremium: boolean;
    isFree: boolean;
    status: string;
}
export interface OrganizedAvatarParts {
    male: {
        [key: string]: BackendAvatarPart[];
    };
    female: {
        [key: string]: BackendAvatarPart[];
    };
}
export interface BackendDataState {
    avatarCategories: BackendAvatarCategory[];
    avatarParts: OrganizedAvatarParts;
    rooms: BackendRoom[];
    isLoadingAvatarCategories: boolean;
    isLoadingAvatarParts: boolean;
    isLoadingRooms: boolean;
    avatarCategoriesError: string | null;
    avatarPartsError: string | null;
    roomsError: string | null;
    avatarCategoriesLoaded: boolean;
    avatarPartsLoaded: boolean;
    roomsLoaded: boolean;
}
/**
 * Hook to manage backend data loading for avatar parts and rooms
 * Provides centralized data management with caching and error handling
 */
export declare const useBackendData: () => {
    isAllDataLoaded: boolean;
    isAnyLoading: boolean;
    hasAnyError: string | null;
    loadAvatarCategories: () => Promise<void>;
    loadAvatarParts: () => Promise<void>;
    loadRooms: () => Promise<void>;
    refreshAvatarCategories: () => Promise<void>;
    refreshAvatarParts: () => Promise<void>;
    refreshRooms: () => Promise<void>;
    refreshAll: () => Promise<void>;
    initializeData: () => Promise<void>;
    getAvatarPartsByGenderAndType: (gender: "male" | "female", partType: string) => BackendAvatarPart[];
    getAvatarPartByResourceId: (resourceId: string) => BackendAvatarPart | null;
    getRoomByResourceId: (resourceId: string) => BackendRoom | null;
    avatarCategories: BackendAvatarCategory[];
    avatarParts: OrganizedAvatarParts;
    rooms: BackendRoom[];
    isLoadingAvatarCategories: boolean;
    isLoadingAvatarParts: boolean;
    isLoadingRooms: boolean;
    avatarCategoriesError: string | null;
    avatarPartsError: string | null;
    roomsError: string | null;
    avatarCategoriesLoaded: boolean;
    avatarPartsLoaded: boolean;
    roomsLoaded: boolean;
};
export default useBackendData;
