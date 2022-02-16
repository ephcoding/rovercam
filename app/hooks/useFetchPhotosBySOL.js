import { getPhotosBySOL } from "../api";
import { useQuery } from "react-query";

export const usePhotosbySOL = (rover, sol) => {
	return useQuery("photosBySOL", () => getPhotosBySOL(rover, sol));
};
