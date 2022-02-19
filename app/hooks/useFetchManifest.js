import { getRoverManifest } from "../api";
import { useQuery } from "react-query";

export const useFetchManifest = rover => {
	return useQuery(["manifest", rover], () => getRoverManifest(rover));
};
