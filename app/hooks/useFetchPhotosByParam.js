import { useQuery } from "react-query";
import { getPhotosByDate, getPhotosBySOL } from "../api";
import { PARAMS } from "../constants";

export const useSearchPhotos = (rover, paramType, value) => {
	if (paramType === PARAMS.sol) {
		return useQuery("photosBySOL", () => getPhotosBySOL(rover, value));
	}
	if (paramType === PARAMS.earth_date) {
		return useQuery("photosByDate", () => getPhotosByDate(rover, value));
	}
	return new Error("Invalid paramType at useSearchPhotos()");
};
