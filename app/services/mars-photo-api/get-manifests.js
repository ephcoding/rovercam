import MarsAPI from "./axios-config";

export const getManifests = async () => {
	try {
		const response = await Promise.all([
			MarsAPI.get(`/manifests/curiosity`),
			MarsAPI.get(`/manifests/opportunity`),
			MarsAPI.get(`/manifests/perseverance`),
			MarsAPI.get(`/manifests/spirit`),
		]);

		return await response;
	} catch (error) {
		console.log(">> getManifests() >>", error);
	}
};
