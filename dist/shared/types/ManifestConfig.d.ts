export interface ManifestConfig {
    version: string;
    timestamp: number;
    room: {
        name: string;
        path: string;
        resourceId: string;
    };
    avatar: {
        gender: "male" | "female";
        parts?: {
            body?: {
                path: string;
                resourceId: string;
            };
            hair?: {
                path: string;
                resourceId: string;
            };
            top?: {
                path: string;
                resourceId: string;
            };
            bottom?: {
                path: string;
                resourceId: string;
            };
            shoes?: {
                path: string;
                resourceId: string;
            };
            fullset?: {
                path: string;
                resourceId: string;
            } | null;
            accessory?: {
                path: string;
                resourceId: string;
            } | null;
        };
    };
    items: Array<{
        id: string;
        name: string;
        path: string;
        category: string;
        resourceId: string;
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
    }>;
    usage?: {
        description: string;
        instructions?: string[];
        when_using_backend?: string;
        when_using_local?: string;
    };
}
export interface ManifestApiResponse<T = any> {
    success: boolean;
    data: T;
    message?: string;
}
export interface ManifestWithMetadata extends ManifestConfig {
    id?: string;
    name?: string;
    description?: string;
    status?: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
    createdAt?: string;
    updatedAt?: string;
    projectId?: string;
}
export interface ManifestListResponse {
    manifests: ManifestWithMetadata[];
    total?: number;
    page?: number;
    limit?: number;
}
export type SingleManifestResponse = ManifestApiResponse<ManifestWithMetadata>;
export type ManifestListApiResponse = ManifestApiResponse<ManifestListResponse>;
export type ManifestConfigResponse = ManifestApiResponse<ManifestConfig>;
export default ManifestConfig;
