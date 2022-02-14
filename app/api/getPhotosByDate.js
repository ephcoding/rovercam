import Axios from "./config";

export const getPhotosByDate = async (rover, date) => {
	const res = await Axios.get(`/rovers/${rover}/photos?earth_date=${date}`);
	return res.data;
};
