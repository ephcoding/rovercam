import Axios from "axios";
import * as configs from "./configs";

const MARS_PHOTOS = configs.MARS_PHOTOS_HEROKU;

export const fetchManifest = async () => {
	try {
		const res = await MARS_PHOTOS.get(`/manifests/${rover}`);
		return res.data;
	} catch (error) {
		console.log("[ api.js/fetchManifest ]", error);
	}
};
export const fetchManifestAll = async rover => {
	try {
		const res = await Promise.all([
			fetchManifest("curiosity"),
			fetchManifest("opportunity"),
			fetchManifest("perseverance"),
			fetchManifest("spirit"),
		]);
		return res;
	} catch (error) {
		console.log("[ fetchManifestAll.js ]", error);
	}
};
export const fetchLatestPhotos = async () => {
	try {
		const res = await MARS_PHOTOS.get(`/rovers/${rover}/latest_photos`);
		return res.data;
	} catch (error) {
		console.log("[ api.js/fetchLatestPhotos ]", error);
	}
};
export const fetchLatestPhotosAll = async rover => {
	try {
		const res = await Promise.all([
			fetchLatestPhotos("curiosity"),
			fetchLatestPhotos("opportunity"),
			fetchLatestPhotos("perseverance"),
			fetchLatestPhotos("spirit"),
		]);
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
