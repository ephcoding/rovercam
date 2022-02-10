import { COLORS, SIZES } from "./app/styles";

const MDX_THEME = {
	Text: {
		style: {
			color: "#fff",
			fontSize: 16,
		},
		h1Style: {
			color: "red",
		},
		h3Style: {
			color: "yellow",
		},
	},
	Button: {
		buttonStyle: {
			backgroundColor: COLORS.backgroundDK,
			borderColor: COLORS.line,
			borderWidth: SIZES[0],
		},
		containerStyle: {
			height: "15%",
		},
	},
};

export default MDX_THEME;
