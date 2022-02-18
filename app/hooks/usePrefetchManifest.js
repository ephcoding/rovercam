import { QueryClient } from "react-query";
import { getRoverManifest } from "../api";

const queryClient = new QueryClient();

export const usePrefetchManifest = async rover => {
	return await queryClient.prefetchQuery(["manifests", rover], () =>
		getRoverManifest(rover)
	);
};
