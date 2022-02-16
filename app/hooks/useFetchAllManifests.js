import { getRoverManifest } from "../api";
import { useQueries } from "react-query";
import { ROVER_NAMES as NAMES } from "../constants";

export const useFetchAllManifests = () => {
	return useQueries([
		{
			queryKey: ["manifests", NAMES.curiosity],
			queryFn: () => getRoverManifest(NAMES.curiosity),
			placeholderData: () => [],
		},
		{
			queryKey: ["manifests", NAMES.opportunity],
			queryFn: () => getRoverManifest(NAMES.opportunity),
			placeholderData: () => [],
		},
		{
			queryKey: ["manifests", NAMES.perseverance],
			queryFn: () => getRoverManifest(NAMES.perseverance),
			placeholderData: () => [],
		},
		{
			queryKey: ["manifests", NAMES.spirit],
			queryFn: () => getRoverManifest(NAMES.spirit),
			placeholderData: () => [],
		},
	]);
};
