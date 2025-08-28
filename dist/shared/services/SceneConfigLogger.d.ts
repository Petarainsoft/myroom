import { ManifestConfig } from '../types/ManifestConfig';
import { AvatarConfig } from '../types/AvatarTypes';
import { LoadedItem } from '../types/LoadedItem';
import { Room } from '../types/RoomTypes';
interface SceneChangeEvent {
    type: "room" | "avatar" | "items" | "full_scene";
    timestamp: number;
    config: ManifestConfig;
    changeDetails?: {
        previousValue?: any;
        newValue?: any;
        action?: string;
    };
}
declare class SceneConfigLogger {
    private static instance;
    private logHistory;
    private maxLogEntries;
    private constructor();
    static getInstance(): SceneConfigLogger;
    /**
     * Tạo cấu hình scene từ các thành phần hiện tại
     */
    private createSceneConfig;
    /**
     * Log thay đổi room
     */
    logRoomChange(previousRoom: Room | null, newRoom: Room, avatarConfig: AvatarConfig, loadedItems: LoadedItem[]): void;
    /**
     * Log thay đổi avatar
     */
    logAvatarChange(previousAvatar: AvatarConfig | null, newAvatar: AvatarConfig, room: Room, loadedItems: LoadedItem[]): void;
    /**
     * Log thay đổi items
     */
    logItemsChange(previousItems: LoadedItem[], newItems: LoadedItem[], room: Room, avatarConfig: AvatarConfig, action?: string): void;
    /**
     * Log toàn bộ scene config (khi load manifest hoặc khởi tạo)
     */
    logFullSceneConfig(room: Room, avatarConfig: AvatarConfig, loadedItems: LoadedItem[], action?: string): void;
    /**
     * Thêm log entry và quản lý giới hạn
     */
    private addLogEntry;
    /**
     * Lấy lịch sử log
     */
    getLogHistory(): SceneChangeEvent[];
    /**
     * Xóa lịch sử log
     */
    clearLogHistory(): void;
    /**
     * Lấy config hiện tại mà không log
     */
    getCurrentConfig(room: Room, avatarConfig: AvatarConfig, loadedItems: LoadedItem[]): ManifestConfig;
}
export { SceneConfigLogger };
export declare const sceneConfigLogger: SceneConfigLogger;
export type { SceneChangeEvent };
