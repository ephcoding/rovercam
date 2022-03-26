import { QueryClient } from "react-query";
import { fetchManifestAll } from "./fetchManifestAll";

const queryClient = new QueryClient();

export const prefetchManifestAll = async () => {
	await queryClient.prefetchQuery("manifests", fetchManifestAll);
};
