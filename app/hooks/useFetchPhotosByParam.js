import { useQuery } from "react-query";
import { fetchPhotosByDate, fetchPhotosBySOL } from "../api";
import { QUERY_PARAMS } from "../constants";

export const useFetchPhotosByParam = (rover, paramType, value) => {
	if (paramType === QUERY_PARAMS.sol) {
		return useQuery("photosBySOL", () => fetchPhotosBySOL(rover, value));
	}
	if (paramType === QUERY_PARAMS.earth_date) {
		return useQuery("photosByDate", () => fetchPhotosByDate(rover, value));
	}
	return new Error("Invalid paramType at useFetchPhotosByParam()");
};
