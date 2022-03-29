import Axios from "axios";
import { API_URLS } from "../constants";

// **************************************************
// ** CONFIGURATIONS **
// **************************************************
const DEFAULT_TIMEOUT = 5000;

const DEFAULT_API_CONFIG = Axios.create({
	baseURL: API_URLS.jsonplaceholder,
	timeout: DEFAULT_TIMEOUT,
});

// NASA URL:
// 1. doesn't allow CORS
// 2. requires API key
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

// **************************************************
// ** INSTANCE DEFINITION **
// **************************************************
export class Api {
	constructor(config = DEFAULT_API_CONFIG) {
		this.axios = Axios.create({ ...config });
	}

	get getApiConfig() {
		return this.config;
	}
}
