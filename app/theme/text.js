import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { SIZE } from "./sizing";

const TEXT = StyleSheet.create({
	body_sm: {
		fontSize: SIZE[3],
	},
	body_md: {
		fontSize: SIZE[4],
	},
	body_lg: {
		fontSize: SIZE[5],
	},
	body_dim: {
		colors: COLORS.text.dim,
		fontSize: SIZE[4],
	},
	heading_sm: {
		fontSize: SIZE[5],
		fontWeight: "bold",
	},
	heading_md: {
		fontSize: SIZE[7],
		fontWeight: "bold",
	},
	heading_lg: {
		fontSize: SIZE[8],
		fontWeight: "bold",
	},
});
