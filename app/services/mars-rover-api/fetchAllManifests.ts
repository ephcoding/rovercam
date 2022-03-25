import { HEROKU_CONFIG as MarsAPI } from "./config";
import { fetchRoverManifest } from "./fetchRoverManifest";

export const fetchAllManifests = async rover => {
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
