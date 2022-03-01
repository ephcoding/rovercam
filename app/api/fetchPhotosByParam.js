import Axios from "./config";

export const fetchPhotosByParam = async (rover, param, value) => {
	const res = await Axios.get(`/rovers/${rover}/photos?${param}=${value}`);
	return res.data;
};

// LEFT OFF:
// 1. only use 1 of fetch funcs: fetchLatestPhotos or fetchPhotosByParam
// 2. conditionally call 1 of these 2 inside useFetchPhotos based on query params sent passed to DisplayPhotosScreen via route params from RoverScreen
