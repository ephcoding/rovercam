import { MARS_PHOTOS_HEROKU as MarsAPI } from "./api";

export const fetchLatestPhotos = async rover => {
	const res = await MarsAPI.get(`/rovers/${rover}/latest_photos`);
	return res.data;
};
