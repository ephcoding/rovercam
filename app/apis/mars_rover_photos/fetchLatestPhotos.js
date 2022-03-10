import { HEROKU_CONFIG as API } from "./config";

export const fetchLatestPhotos = async rover => {
	const res = await API.get(`/rovers/${rover}/latest_photos`);
	return res.data;
};
