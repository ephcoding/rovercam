import { QueryClient } from "react-query";
import { getRoverManifest } from "../api";

const queryClient = new QueryClient();

export const usePrefetchManifest = async rover =>
	await queryClient.prefetchQuery(["manifests", rover], () =>
		getRoverManifest(rover)
	);
