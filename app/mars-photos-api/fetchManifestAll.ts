import { fetchManifest } from "./fetchManifest";

/**
 *
 * @param {string} rover - rover name
 * @returns {Array.<Promise>} - resolved Rover photo_manifest
 */

export const fetchManifestAll = async rover => {
	try {
		const res = await Promise.all([
			fetchManifest("curiosity"),
			fetchManifest("opportunity"),
			fetchManifest("perseverance"),
			fetchManifest("spirit"),
		]);
		return res;
	} catch (error) {
		throw new Error(">> [ fetchManifestAll.js ] >>\n", error);
	}
};
