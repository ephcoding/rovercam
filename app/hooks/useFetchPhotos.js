import { useQuery } from "react-query";
import { fetchLatestPhotos, fetchPhotosByParam } from "../api";
import { QUERY_PARAMS as PARAM } from "../constants";

/**
 *
 * @param {string} rover rover to fetch photo for
 * @param {string} queryType latest_photos, earth_date, sol
 * @param {string} param_value earth_date/sol value
 * @returns {object[]}
 */

export const useFetchPhotos = (rover, query_param, param_value = undefined) => {
	if (param_value) {
		console.log("useFetchPhotos.js\n", query_param);
		return useQuery(`photos_by_${query_param}`, () =>
			fetchPhotosByParam(rover, query_param, param_value)
		);
	} else if (query_param === PARAM.latest_photos) {
		return useQuery(PARAM.latest_photos, () => fetchLatestPhotos(rover));
	} else {
		throw new Error("[ useFetchPhotos.js ] >> Invalid argument used.");
	}
};
