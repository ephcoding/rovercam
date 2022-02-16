import { useQuery } from "react-query";
import { usePhotosByDate, usePhotosBySOL } from "../hooks";
import { getPhotosByDate, getPhotosBySOL } from "../api";
import { PARAMS } from "../constants";

export const useSearchPhotos = (rover, paramType, value) => {
	// if (paramType === PARAMS.sol) return usePhotosBySOL(rover, value);
	// if (paramType === PARAMS.earth_date) return usePhotosByDate(rover, value);
	if (paramType === PARAMS.sol) {
		return useQuery("photosBySOL", () => getPhotosBySOL(rover, value));
	}
	if (paramType === PARAMS.earth_date) {
		return useQuery("photosByDate", () => getPhotosByDate(rover, value));
	}
	return new Error("Invalid paramType at useSearchPhotos()");
};
