import { CAMERAS, IMG_PATHS, NAMES } from "../constants";

export const RoverReducer = (state, action) => {
	switch (action.type) {
		case "CURIOSITY":
			console.log(">> ROVER REDUCER >>", "CURIOSITY");
			return action.payload;
		case "OPPORTUNITY":
			console.log(">> ROVER REDUCER >>", "OPPORTUNITY");
		case "PERSEVERANCE":
			console.log(">> ROVER REDUCER >>", "PERSEVERANCE");
		case "SPIRIT":
			console.log(">> ROVER REDUCER >>", "SPIRIT");
		default:
			return ">> default state >>";
	}
};
