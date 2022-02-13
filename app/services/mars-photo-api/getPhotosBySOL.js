import Axios from "./config";

export const getPhotosBySOL = async (rover, sol) => {
	const res = await Axios.get(`/rovers/${rover}/photos?earth_date=${sol}`);
	return res.data;
};
