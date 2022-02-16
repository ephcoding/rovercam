import { createContext, useReducer } from "react";

export const createContext = (reducer, actions, initState) => {
	const Context = createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initState);

		return <Context.Provider value={{ state }}>{children}</Context.Provider>;
	};

	return { Context, Provider };
};
