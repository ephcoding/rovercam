import { Platform } from "react-native";
import { COLORS, FONTS, SIZES } from "./app/styles";

const MDX_THEME = {
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
	Card: {
		containerStyle: {
			backgroundColor: "#000",
			borderWidth: 3,
			flex: 1,
			padding: 0,
		},
	},
	CardFeaturedSubtitle: {
		style: {
			color: "#f60",
		},
	},
	CardFeaturedTitle: {
		style: {
			color: "#fff",
		},
	},
	Switch: {
		ios_backgroundColor: "#777",
		thumbColor: COLORS.backgroundLT,
		trackColor: {
			false: "#777",
			true: "#f60",
		},
	},
	Text: {
		style: {
			color: "#fff",
			fontSize: 16,
		},
		h1Style: {},
		h2Style: {},
		h3Style: {},
		h4Style: {
			color: "#f0f",
		},
	},
};

export default MDX_THEME;
