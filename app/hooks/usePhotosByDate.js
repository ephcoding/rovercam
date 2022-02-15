import { getPhotosByDate } from "../api";
import { useQuery } from "react-query";

export const usePhotosbyDate = (rover, date) => {
	console.log(">> date >>\n", date);
	return useQuery("photosByDate", () => getPhotosByDate(rover, date));
};
