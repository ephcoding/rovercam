import axios from "axios";
import { NASA_KEY } from "@env";

export default axios.create({
	baseURL: "https://api.nasa.gov/mars-photos/api/v1",
	params: {
		api_key: NASA_KEY,
	},
});
