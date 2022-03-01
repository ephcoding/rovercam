import Axios from "./config";

export const fetchPhotosBySOL = async (rover, sol) => {
	const res = await Axios.get(`/rovers/${rover}/photos?sol=${sol}`);
	return res.data;
};
