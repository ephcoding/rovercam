import { getRoverManifest } from "../api";
import { useQueries } from "react-query";
import { ROVER_NAMES as NAMES } from "../constants";

export const useRoverManifests = () => {
	return useQueries([
		{
			queryKey: ["manifests", NAMES.curiosity],
			queryFn: () => getRoverManifest(NAMES.curiosity),
		},
		{
			queryKey: ["manifests", NAMES.opportunity],
			queryFn: () => getRoverManifest(NAMES.opportunity),
		},
		{
			queryKey: ["manifests", NAMES.perseverance],
			queryFn: () => getRoverManifest(NAMES.perseverance),
		},
		{
			queryKey: ["manifests", NAMES.spirit],
			queryFn: () => getRoverManifest(NAMES.spirit),
		},
	]);
};
