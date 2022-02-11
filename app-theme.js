import { COLORS, SIZES } from "./app/styles";

const MDX_THEME = {
	Card: {
		containerStyle: {
			backgroundColor: "#000",
			borderWidth: 3,
			flex: 1,
			padding: 0,
		},
	},
	CardFeaturedTitle: {
		style: {
			color: "#fff",
		},
	},
	CardFeaturedSubtitle: {
		style: {
			color: "#f60",
		},
	},
	Text: {
		style: {
			color: "#ff0",
			fontSize: 16,
		},
	},
	Button: {
		buttonStyle: {
			borderColor: "#fff",
			borderWidth: 2,
			paddingHorizontal: 5,
			paddingVertical: 10,
		},
		containerStyle: {
			alignSelf: "center",
			width: "90%",
		},
		titleStyle: {
			color: "#fff",
		},
	},
};

export default MDX_THEME;
