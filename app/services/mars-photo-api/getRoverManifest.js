import Axios from "./config";

export const getRoverManifest = async rover => {
	const res = await Axios.get(`/manifests/${rover}`).then(res => res.data);
	return res.data;
};
