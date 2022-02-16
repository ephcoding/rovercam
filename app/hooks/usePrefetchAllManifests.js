import { useFetchAllManifests } from ".";

export const usePrefetchAllManifests = async queryClient => {
	return await queryClient.prefetchQuery("manifests", useFetchAllManifests);
};
