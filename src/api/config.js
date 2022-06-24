import axios from "axios";

export const HEROKU_CONFIG = axios.create({
	baseURL: "https://mars-photos.herokuapp.com/api/v1",
	timeout: 5000,
});

// NASA URL NOTES:
// 1. doesn't allow CORS
// 2. requires API key

// export const NASA_CONFIG = axios.create({
// 	baseURL: "https://api.nasa.gov/api/v1",
// 	params: {
// 		api_key: process.env.NASA_KEY,
// 	},
// 	timeout: 5000,
// });

// export const NASA_DEMO_CONFIG = axios.create({
// 	baseURL: "https://api.nasa.gov/api/v1",
// 	params: {
// 		api_key: "DEMO_KEY",
// 	},
// 	timeout: 5000,
// });
