import { StyleSheet, Text, View } from "react-native";

const NewPhotosScreen = () => {
	return (
		<View style={S.view}>
			<Text>Photos Screen</Text>
		</View>
	);
};

const S = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#96f",
	},
});

export default NewPhotosScreen;
