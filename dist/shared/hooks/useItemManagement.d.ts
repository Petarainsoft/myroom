import { AvatarConfig } from '../types/AvatarTypes';
import { LoadedItem } from '../types/LoadedItem';
import { Room } from '../types/RoomTypes';
export declare const useItemManagement: () => {
    availableItems: import('..').Item[];
    loadedItems: LoadedItem[];
    selectedItem: any;
    selectedCategory: string | null;
    selectedItemPerCategory: {
        [category: string]: import('..').Item | null;
    };
    categories: any[];
    categoriesLoaded: boolean;
    isLoadingCategories: boolean;
    itemsByCategory: {
        [categoryId: string]: import('..').Item[];
    };
    loadingItemsForCategory: {
        [categoryId: string]: boolean;
    };
    itemsLoaded: boolean;
    isLoadingItems: boolean;
    gizmoMode: "position" | "scale" | "rotation";
    categoryNames: any[];
    filteredItems: import('..').Item[];
    setSelectedItem: import('react').Dispatch<any>;
    setSelectedCategory: import('react').Dispatch<import('react').SetStateAction<string | null>>;
    setSelectedItemPerCategory: import('react').Dispatch<import('react').SetStateAction<{
        [category: string]: import('..').Item | null;
    }>>;
    setLoadedItems: import('react').Dispatch<import('react').SetStateAction<LoadedItem[]>>;
    setGizmoMode: import('react').Dispatch<import('react').SetStateAction<"position" | "scale" | "rotation">>;
    loadCategories: () => Promise<void>;
    loadItems: () => Promise<void>;
    loadItemsByCategory: (categoryId: string, categoryName: string) => Promise<void>;
    addItem: () => void;
    handleAddItem: () => void;
    removeItem: (itemId: string) => void;
    clearAllItems: () => void;
    handleItemTransformChange: (itemId: string, transform: {
        position?: {
            x: number;
            y: number;
            z: number;
        };
        rotation?: {
            x: number;
            y: number;
            z: number;
        };
        scale?: {
            x: number;
            y: number;
            z: number;
        };
    }) => void;
    logItemsChange: (previousItems: LoadedItem[], selectedRoom: Room, avatarConfig: AvatarConfig) => void;
};
