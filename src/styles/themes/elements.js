import { Platform } from "react-native";
import { COLORS, FONTS, SIZES } from "../../styles";

export const RNE_THEME = {
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
			color: "#ff0",
			fontWeight: "bold",
		},
	},
	CardFeaturedTitle: {
		style: {
			color: "#fff",
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
			color: COLORS.textLT,
			marginHorizontal: 15,
		},
	},
};
