import Axios from "./config";

export const fetchRoverManifest = async rover => {
	try {
		const res = await Axios.get(`/manifests/${rover}`);
		return res.data;
	} catch (error) {
		throw new Error(">> GET ROVER MANIFEST ERROR >>", error);
	}
};
