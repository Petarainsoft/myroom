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
 * // Basic usage
 * <MyRoom
 *   roomConfig={{ initialRoom: "room1" }}
 *   avatarConfig={{ defaultGender: "female" }}
 *   sceneConfig={{ enableShadows: true }}
 *   onSceneReady={(scene) => console.log("Scene ready:", scene)}
 * />
 *
 * // With UI controls and overlays
 * <MyRoom
 *   showAvatarOverlay={true}
 *   showRoomOverlay={true}
 *   roomConfig={{ initialRoom: "room1" }}
 *   avatarConfig={{ defaultGender: "female" }}
 *   sceneConfig={{ enableShadows: true }}
 *   onSceneReady={(scene) => console.log("Scene ready:", scene)}
 *   onAvatarChange={(avatar) => console.log("Avatar changed:", avatar)}
 *   onRoomChange={(room) => console.log("Room changed:", room)}
 *   onItemAdd={(item) => console.log("Item added:", item)}
 *   onItemRemove={(itemId) => console.log("Item removed:", itemId)}
 * />
 * ```
 */
