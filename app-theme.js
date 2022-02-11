import { COLORS, SIZES } from "./app/styles";

const MDX_THEME = {
	Card: {
		containerStyle: {
			backgroundColor: "#f00",
			flex: 1,
			padding: 4,
		},
	},
	CardTitle: {
		style: {
			color: "#0f0",
		},
	},
	CardFeaturedTitle: {
		style: {
			color: "#0ff",
		},
	},
	CardFeaturedSubtitle: {
		style: {
			color: "#f0f",
		},
	},
	Text: {
		style: {
			color: "#fff",
			fontSize: 16,
		},
	},
	Button: {
		buttonStyle: {
			backgroundColor: "tan",
		},
		containerStyle: {
			backgroundColor: "yellow",
			padding: 1,
			alignSelf: "center",
			width: "75%",
		},
	},
};

export default MDX_THEME;
