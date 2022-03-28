import { fetchManifest } from "../api";
import { useQuery } from "react-query";

export const useFetchManifest = rover => {
	return useQuery(["manifest", rover], () => fetchManifest(rover));
};
