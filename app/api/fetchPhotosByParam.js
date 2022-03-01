import { HEROKU_CONFIG as API } from "./config";

export const fetchPhotosByParam = async (rover, query_param, param_value) => {
	const res = await API.get(
		`/rovers/${rover}/photos?${query_param}=${param_value}`
	);
	return res.data;
};

// LEFT OFF:
// 1. only use 1 of fetch funcs: fetchLatestPhotos or fetchPhotosByParam
// 2. conditionally call 1 of these 2 inside useFetchPhotos based on query params sent passed to DisplayPhotosScreen via route params from RoverScreen
