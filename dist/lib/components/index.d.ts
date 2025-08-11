/**
 * MyRoom Library Components
 *
 * This module exports the main React components for the MyRoom library.
 * These components provide ready-to-use interfaces for 3D room functionality.
 */
export { MyRoom } from './MyRoom';
export type { MyRoomProps, MyRoomRef } from '../types';
/**
 * Component Usage Examples:
 *
 * ```tsx
 * import { MyRoom, initializeMyRoomConfig } from '@myroom/react';
 *
 * // Initialize with your API key
 * initializeMyRoomConfig({
 *   apiKey: 'your-api-key-here'
 * });
 *
 * // Simple mode - 3D scene only
 * <MyRoom
 *   roomConfig={{ roomResourceId: 'living-room' }}
 *   avatarConfig={{ gender: 'female' }}
 *   onSceneReady={(scene) => console.log('Scene ready', scene)}
 * />
 *
 * // Full mode - with UI controls
 * <MyRoom
 *   showControls={true}
 *   initialRoom="bedroom"
 *   showAvatarOverlay={true}
 *   onAvatarChange={(avatar) => console.log('Avatar changed', avatar)}
 *   onRoomChange={(room) => console.log('Room changed', room)}
 * />
 * ```
 */
