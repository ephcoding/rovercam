import { fetchRoverManifest } from "../services/mars_rover_photos";
import { useQuery } from "react-query";

export const useFetchRoverManifest = rover => {
	return useQuery(["manifest", rover], () => fetchRoverManifest(rover));
};
