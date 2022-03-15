import { fetchRoverManifest } from "../services/mars-rover-api";
import { useQuery } from "react-query";

export const useFetchRoverManifest = rover => {
	return useQuery(["manifest", rover], () => fetchRoverManifest(rover));
};
