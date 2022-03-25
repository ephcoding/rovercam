import { HEROKU_CONFIG as API } from "./config";

export const fetchAllManifests = async rover => {
	try {
		const res = await Promise.all([
			API.get("/manifests/curiosity"),
			API.get("/manifests/opportunity"),
			API.get("/manifests/perseverance"),
			API.get("/manifests/spirit"),
		]);
		return res.data;
	} catch (error) {
		throw new Error(">> [ fetchAllManifests.js ] >>\n", error);
	}
};
