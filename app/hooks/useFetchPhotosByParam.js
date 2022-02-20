import { useQuery } from "react-query";
import { getPhotosByDate, getPhotosBySOL } from "../api";
import { QUERIES } from "../constants";

export const useFetchPhotosByParam = (rover, paramType, value) => {
	if (paramType === QUERIES.sol) {
		return useQuery("photosBySOL", () => getPhotosBySOL(rover, value));
	}
	if (paramType === QUERIES.earth_date) {
		return useQuery("photosByDate", () => getPhotosByDate(rover, value));
	}
	return new Error("Invalid paramType at useFetchPhotosByParam()");
};
