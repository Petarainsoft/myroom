import { AvatarConfig } from '../types/AvatarTypes';
import { LoadedItem } from '../types/LoadedItem';
interface UseResourcePreloaderProps {
    avatarConfig?: AvatarConfig;
    loadedItems?: LoadedItem[];
    enabled?: boolean;
    domainConfig?: any;
}
interface PreloadingStats {
    avatarPartsPreloaded: number;
    animationsPreloaded: number;
    itemsPreloaded: number;
    totalPreloaded: number;
}
export declare const useResourcePreloader: ({ avatarConfig, loadedItems, enabled, domainConfig }: UseResourcePreloaderProps) => {
    isPreloading: boolean;
    isPreloaded: (resourceId: string) => boolean;
    getStats: () => PreloadingStats;
    preloadAvatarData: (config: AvatarConfig, domainConfig?: any) => Promise<void>;
    preloadItemData: (items: LoadedItem[]) => Promise<void>;
};
export {};
