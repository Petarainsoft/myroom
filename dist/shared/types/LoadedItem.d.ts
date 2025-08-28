export interface LoadedItem {
    id: string;
    name: string;
    path: string;
    category: string;
    position: {
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
    resourceId?: string;
    resourcePath?: string | null;
}
