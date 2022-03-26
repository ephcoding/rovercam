import { useQueryClient } from "react-query";

export const useQueryDataLatestPhotosAll = async () => {
	const queryClient = useQueryClient();
	return await queryClient.getQueryData("manifests");
};
