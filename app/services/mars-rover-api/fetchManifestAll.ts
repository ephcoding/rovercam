import { fetchRoverManifest } from "./fetchManifest";

/**
 *
 * @param {string} rover - rover name
 * @returns {Array.<Promise>} - resolved Rover photo_manifest
 */

export const fetchManifestAll = async rover => {
	try {
		const res = await Promise.all([
			fetchRoverManifest("curiosity"),
			fetchRoverManifest("opportunity"),
			fetchRoverManifest("perseverance"),
			fetchRoverManifest("spirit"),
		]);
		return res;
	} catch (error) {
		throw new Error(">> [ fetchAllManifests.js ] >>\n", error);
	}
};
