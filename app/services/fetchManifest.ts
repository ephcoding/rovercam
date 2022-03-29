import { MARS_PHOTOS_HEROKU as MarsAPI } from "./api";

export const fetchManifest = async rover => {
	try {
		const res = await MarsAPI.get(`/manifests/${rover}`);
		return res.data;
	} catch (error) {
		console.log(">> [ fetchRoverManifest.js ] >>\n", error);
	}
};
