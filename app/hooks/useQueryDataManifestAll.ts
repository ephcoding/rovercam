import { useQueryClient } from "react-query";

export const useQueryDataManifestAll = async () => {
	const queryClient = useQueryClient();
	return await queryClient.getQueryData("manifests");
};
