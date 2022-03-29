import { fetchManifest } from "../services";
import { useQuery } from "react-query";

export const useFetchManifest = rover => {
	return useQuery(["manifest", rover], () => fetchManifest(rover));
};
