/**
 * Avatar part interface for API responses and catalog browsing
 */
export interface AvatarPart {
    id: string;
    name: string;
    gender: 'male' | 'female' | 'unisex';
    partType: string;
    url?: string;
    resourceId?: string;
    metadata?: Record<string, any>;
    s3Key?: string;
    s3Url?: string;
    fileName?: string | null;
}
/**
 * Avatar category interface for organizing parts
 */
export interface AvatarCategory {
    id: string;
    name: string;
    description?: string;
    gender?: 'male' | 'female' | 'unisex';
    partType?: string;
    metadata?: Record<string, any>;
}
export interface ActiveMovement {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
    turnLeft: boolean;
    turnRight: boolean;
    jump: boolean;
    run: boolean;
    wave: boolean;
    dance: boolean;
}
export interface TouchMovement {
    x: number;
    y: number;
    isMoving: boolean;
    durationBoost?: number;
}
export interface PartItem {
    name: string;
    fileName: string | null;
    resourceId?: string;
}
export interface GenderSelectableParts {
    hair: PartItem[];
    top: PartItem[];
    bottom?: PartItem[];
    shoes?: PartItem[];
    accessory?: PartItem[];
    fullset?: PartItem[];
}
export interface GenderFixedParts {
    body: PartItem;
}
export interface GenderData {
    fixedParts: GenderFixedParts;
    selectableParts: GenderSelectableParts;
}
export interface AvailableParts {
    male: GenderData;
    female: GenderData;
}
export interface AvatarPartPaths {
    body: string | null;
    hair: string | null;
    top: string | null;
    bottom?: string | null;
    shoes?: string | null;
    fullset?: string | null;
    accessory?: string | null;
    [key: string]: string | null | undefined;
}
export type Gender = keyof AvailableParts;
export interface AvatarConfig {
    gender: Gender;
    parts: AvatarPartPaths;
    resourceIds?: AvatarPartPaths;
    url?: string;
}
