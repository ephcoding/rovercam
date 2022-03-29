import { Api, MARS_PHOTOS_HEROKU } from "./api";

class MarsPhotosApi extends Api {
	constructor(apiConfig) {
		super(apiConfig);
	}

	// get getAxiosConfig() {
	// 	return this.axios;
	// }

	// async fetchManifest(rover) {
	// 	try {
	// 		const res = await this.axios.get(`/manifests/${rover}`);
	// 		return res.data;
	// 	} catch (error) {
	// 		console.log(">> [ fetchRoverManifest.js ] >>\n", error);
	// 	}
	// }
}
