import { useQuery } from "react-query";
import { usePhotosByDate, usePhotosBySOL } from "../hooks";
import { PARAMS } from "../constants";

export const useSearchPhotos = (rover, paramType, value) => {
	if (paramType === PARAMS.sol) return usePhotosBySOL(rover, value);
	if (paramType === PARAMS.earth_date) return usePhotosByDate(rover, value);
	return new Error("Invalid paramType at useSearchPhotos()");
};
