import { getPhotosBySOL } from "../services";
import { useQuery } from "react-query";

export const usePhotosbySOL = (rover, sol) => {
	return useQuery("photosBySOL", () => getPhotosBySOL(rover, sol));
};
