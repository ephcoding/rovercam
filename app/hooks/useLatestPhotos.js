import { getLatestPhotos } from "../services/mars-photo-api/getLatestPhotos";
import { useQuery } from "react-query";

export const useLatestPhotos = rover => {
	return useQuery("latestPhotos", () => getLatestPhotos(rover));
};
