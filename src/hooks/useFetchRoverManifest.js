import { fetchRoverManifest } from "../api";
import { useQuery } from "react-query";

export const useFetchRoverManifest = rover => {
	return useQuery(["manifest", rover], () => fetchRoverManifest(rover));
};
