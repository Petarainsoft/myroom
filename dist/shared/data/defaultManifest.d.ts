import { ManifestConfig } from '../types/ManifestConfig';
/**
 * Hardcoded default manifest configuration
 * This manifest is used when 'default-manifest' is requested to avoid backend API calls
 * and ensure immediate loading of the default scene configuration.
 */
export declare const DEFAULT_HARDCODED_MANIFEST: ManifestConfig;
export default DEFAULT_HARDCODED_MANIFEST;
