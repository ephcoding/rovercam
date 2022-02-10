import MarsAPI from "./axios-config";

export const getManifests = async () => {
	try {
		const res = await Promise.all([
			MarsAPI.get(`/manifests/curiosity`),
			MarsAPI.get(`/manifests/opportunity`),
			MarsAPI.get(`/manifests/perseverance`),
			MarsAPI.get(`/manifests/spirit`),
		]);

		return res;
	} catch (error) {
		console.log(error);
	}
};
