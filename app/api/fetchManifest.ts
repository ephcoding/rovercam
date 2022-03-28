import { HEROKU_CONFIG as MarsAPI } from "./config";

export const fetchManifest = async rover => {
	try {
		const res = await MarsAPI.get(`/manifests/${rover}`);
		return res.data;
	} catch (error) {
		console.log(">> [ fetchRoverManifest.js ] >>\n", error);
	}
};
