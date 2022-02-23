import { useQuery } from "react-query";
import { getPhotosByDate, getPhotosBySOL } from "../api";
import { QUERY_PARAMS } from "../constants";

export const useFetchPhotosByParam = (rover, paramType, value) => {
	if (paramType === QUERY_PARAMS.sol) {
		return useQuery("photosBySOL", () => getPhotosBySOL(rover, value));
	}
	if (paramType === QUERY_PARAMS.earth_date) {
		return useQuery("photosByDate", () => getPhotosByDate(rover, value));
	}
	return new Error("Invalid paramType at useFetchPhotosByParam()");
};
