import { StyleSheet, Text, View } from "react-native";

const NewSearchScreen = () => {
	return (
		<View style={S.view}>
			<Text>Search Screen</Text>
		</View>
	);
};

const S = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#f00",
	},
});

export default NewSearchScreen;
