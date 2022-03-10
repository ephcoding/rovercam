import { HEROKU_CONFIG as API } from "./config";

export const fetchRoverManifest = async rover => {
	try {
		const res = await API.get(`/manifests/${rover}`);
		return res.data;
	} catch (error) {
		throw new Error(">> [ fetchRoverManifest.js ] >>\n", error);
	}
};
