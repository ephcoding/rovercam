import { HEROKU_CONFIG as MarsAPI } from "./config";

export const fetchLatestPhotos = async rover => {
	const res = await MarsAPI.get(`/rovers/${rover}/latest_photos`);
	return res.data;
};
