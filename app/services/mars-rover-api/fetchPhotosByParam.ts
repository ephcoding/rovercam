import { HEROKU_CONFIG as API } from "./config";

export const fetchPhotosByParam = async (rover, query_param, param_value) => {
	const res = await API.get(
		`/rovers/${rover}/photos?${query_param}=${param_value}`
	);
	return res.data;
};
