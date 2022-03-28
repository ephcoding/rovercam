import { fetchLatestPhotos } from "./fetchLatestPhotos";

/**
 *
 * @param {string} rover - rover name
 * @returns {Array.<Promise>} - resolved Rover photo_manifest
 */

export const fetchLatestPhotosAll = async rover => {
	try {
		const res = await Promise.all([
			fetchLatestPhotos("curiosity"),
			fetchLatestPhotos("opportunity"),
			fetchLatestPhotos("perseverance"),
			fetchLatestPhotos("spirit"),
		]);
		return res;
	} catch (error) {
		throw new Error(">> [ fetchLatestPhotosAll.js ] >>\n", error);
	}
};
