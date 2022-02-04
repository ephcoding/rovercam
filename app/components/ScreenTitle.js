import { StyleSheet, Text } from "react-native";

const ScreenTitle = ({ title }) => {
	return <Text>{title}</Text>;
};

export default ScreenTitle;

const styles = StyleSheet.create({
	BASE: {
		color: "#fff",
		fontSize: 40,
		fontWeight: "bold",
	},
});
