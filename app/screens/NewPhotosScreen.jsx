import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { QueryClient } from "react-query";

const NewPhotosScreen = () => {
	// const test = async () => {
	// 	const curiosityManifest = await qc.getQueryData("curiosity");

	// 	console.log("NewPhotosScreen", curiosityManifest);
	// };

	// useEffect(() => {
	//   const qc = new QueryClient();
	// 	test();
	// });

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
