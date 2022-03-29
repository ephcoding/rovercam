import Axios from "axios";
import { API_URLS } from "../constants";

const DEFAULT_TIMEOUT = 5000;

export const TEST_CONFIG = Axios.create({
	baseURL: API_URLS.jsonplaceholder,
	timeout: DEFAULT_TIMEOUT,
});

// *****************************************
// ** NASA URL >> no CORS, requires API key
// *****************************************
export const MARS_PHOTOS_HEROKU = Axios.create({
	baseURL: API_URLS.MarsRoverPhotos.heroku,
	timeout: DEFAULT_TIMEOUT,
});

export const MARS_PHOTOS_NASA = Axios.create({
	baseURL: API_URLS.MarsRoverPhotos.nasa,
	params: {
		api_key: process.env.NASA_KEY,
	},
	timeout: DEFAULT_TIMEOUT,
});
