import Axios from "axios";
import * as configs from "./configs";
import { NAMES } from "../constants";

const MARS_PHOTOS = configs.MARS_PHOTOS_HEROKU;

export const fetchManifest = async rover => {
	try {
		const res = await MARS_PHOTOS.get(`/manifests/${rover}`);
		return res.data;
	} catch (error) {
		console.log("[ api.js/fetchManifest ]", error);
	}
};
export const fetchManifestAll = async rover => {
	try {
		const res = await Promise.all(
			Object.values(NAMES).map(roverName => fetchManifest(roverName))
		);
		return res;
	} catch (error) {
		console.log("[ fetchManifestAll.js ]", error);
	}
};
export const fetchLatestPhotos = async rover => {
	try {
		const res = await MARS_PHOTOS.get(`/rovers/${rover}/latest_photos`);
		return res.data;
	} catch (error) {
		console.log("[ api.js/fetchLatestPhotos ]", error);
	}
};
export const fetchLatestPhotosAll = async rover => {
	try {
		const res = await Promise.all(
			Object.values(NAMES).map(roverName => fetchLatestPhotos(roverName))
		);
		return res;
	} catch (error) {
		console.log("[ api.js/fetchLatestPhotosAll() ]", error);
	}
};
export const fetchPhotosByParam = async (rover, query_param, param_value) => {
	try {
		const res = await API.get(
			`/rovers/${rover}/photos?${query_param}=${param_value}`
		);
		return res.data;
	} catch (error) {
		console.log("[ api.js/fetchPhotosByParam() ]", error);
	}
};
