import Axios from "./config";

export const getRoverManifest = async rover => {
	const res = await Axios.get(`/manifests/${rover}`);
	return res.data;
};
