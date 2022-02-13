import { getLatestPhotos } from "../services";
import { useQuery } from "react-query";

export const useLatestPhotos = rover => {
	return useQuery("latestPhotos", () => getLatestPhotos(rover));
};
