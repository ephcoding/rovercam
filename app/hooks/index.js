import { useQuery } from "react-query";
import * as api from "../mars-photos-api/requests";

export const useManifest = rover => {
	return useQuery(["manifest", rover], () => api.fetchManifest(rover));
};
export const useLatestPhotos = rover => {
	return useQuery(["latestPhotos", rover], () => api.fetchLatestPhotos(rover));
};
export const usePhotosByParam = ({ rover, param, value }) => {
	return useQuery(["photos", rover], () =>
		api.fetchPhotosByParam(rover, param, value)
	);
};
