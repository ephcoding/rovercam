import { QueryClient } from "react-query";
import { fetchLatestPhotosAll } from "./fetchLatestPhotosAll";

const queryClient = new QueryClient();

export const prefetchLatestPhotosAll = async () => {
	await queryClient.prefetchQuery("latestPhotos", fetchLatestPhotosAll);
};
