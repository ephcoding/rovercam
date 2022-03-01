import { useQuery } from "react-query";
import { useFetchPhotosByParam } from ".";
import { getPhotosByDate, getPhotosBySOL } from "../api";
import { fetchLatestPhotos } from "../api/fetchLatestPhotos";
import { fetchPhotosBySOL } from "../api/fetchPhotosBySOL";
import { QUERY_PARAMS } from "../constants";

export const useFetchPhotos = (rover, queryType, optParamValue = undefined) => {
	const API_QUERY_MAP = {
		latest: ({ rover }) => fetchLatestPhotos(rover),
		by_param: ({ rover, queryType, optParamValue }) =>
			useFetchPhotosByParam(rover, queryType, optParamValue),
	};

	if (paramType === QUERY_PARAMS.sol) {
		return useQuery("photosBySOL", () => getPhotosBySOL(rover, value));
	}
	if (paramType === QUERY_PARAMS.earth_date) {
		return useQuery("photosByDate", () => getPhotosByDate(rover, value));
	}
	return new Error("Invalid paramType at useFetchPhotosByParam()");
};
