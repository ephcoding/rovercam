import { MARS_PHOTOS_HEROKU as API } from "./api";

export const fetchPhotosByParam = async (rover, query_param, param_value) => {
	const res = await API.get(
		`/rovers/${rover}/photos?${query_param}=${param_value}`
	);
	return res.data;
};
