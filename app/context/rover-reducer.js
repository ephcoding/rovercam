import { CAMERAS, IMG_PATHS, NAMES } from "../constants";

export const RoverReducer = (state, action) => {
	switch (action.type) {
		case 'CURIOSITY':
			return {
				...state,
			};
		case 'OPPORTUNITY':
			return {
				...state,
			};
		case 'PERSEVERANCE':
			return {
				...state,
			};
		case 'SPIRIT':
			return {
				...state,
			};
    default
      return state
	}
};
