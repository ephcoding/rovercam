import { getLatestPhotos } from "../api";
import { useQuery } from "react-query";

export const useLatestPhotos = rover => {
	return useQuery("latestPhotos", () => getLatestPhotos(rover));
};
