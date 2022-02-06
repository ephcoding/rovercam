import { createContext, useReducer } from "react";
import { RoverReducer } from "./rover-reducer";
import { NAMES } from "../constants";

const RoverContext = createContext();

export const RoverProvider = ({ children }) => {
	const [roverState, dispatch] = useReducer(RoverReducer, {});

	const setRover = () => {};

	return (
		<RoverContext.Provider value={(roverState, setRover)}>
			{children}
		</RoverContext.Provider>
	);
};
