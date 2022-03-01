import { useQuery } from "react-query";
import { fetchLatestPhotos } from "../api/fetchLatestPhotos";
import { fetchPhotosByParam } from "../api/fetchPhotosByParam";
import { QUERY_PARAMS as PARAM } from "../constants";

/**
 *
 * @param {string} rover rover to fetch photo for
 * @param {string} queryType latest_photos, earth_date, sol
 * @param {string} paramValue earth_date/sol value
 * @returns {object[]}
 */

export const useFetchPhotos = (rover, queryType, paramValue = undefined) => {
	if (paramValue) {
		return useQuery(`photos_by_${queryType}`, () =>
			fetchPhotosByParam(rover, queryType, paramValue)
		);
	} else if (queryType === PARAM.latest) {
		return useQuery(PARAM.latest, () => fetchLatestPhotos(rover));
	} else {
		throw new Error("[ useFetchPhotos.js ] >> Invalid argument used.");
	}
};
