import { createContext, useReducer } from "react";
import { RoverReducer } from "./rover-reducer";

export default RoverContext = createContext();

export const RoverProvider = ({ children }) => {
	const [state, dispatch] = useReducer(RoverReducer, {});

	const setRover = rover => {
		dispatch({
			payload: rover,
			type: rover.toUpperCase(),
		});
	};

	return (
		<RoverContext.Provider value={{ state, setRover }}>
			{children}
		</RoverContext.Provider>
	);
};
