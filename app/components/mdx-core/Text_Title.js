import { StyleSheet, Text } from "react-native";

const ScreenTitle = ({ text }) => {
	return <Text style={S.BASE}>{text}</Text>;
};

export default ScreenTitle;

const S = StyleSheet.create({
	BASE: {
		color: "#fff",
		fontSize: 40,
		fontWeight: "bold",
	},
});
