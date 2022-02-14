import { getRoverManifest } from "../api";
import { useQuery } from "react-query";

export const useRoverManifest = rover => {
	return useQuery("manifest", () => getRoverManifest(rover));
};
