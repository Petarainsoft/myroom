import { default as React } from 'react';
import { MyRoomProps, MyRoomRef } from '../types';
/**
 * MyRoom - Unified 3D room and avatar integration component
 *
 * A comprehensive React component that provides 3D room visualization,
 * avatar customization, and item management capabilities using Babylon.js.
 * Supports both simple mode (3D scene only) and full mode (with UI overlays).
 */
export declare const MyRoom: React.ForwardRefExoticComponent<MyRoomProps & React.RefAttributes<MyRoomRef>>;
export default MyRoom;
