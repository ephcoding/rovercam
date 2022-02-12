import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Img_Background from "../components/shared/Img_Background";
import Text_Title from "../components/shared/Text_Title";
import SafeAreaView from "../components/shared/SafeAreaView";
import { COLORS } from "../styles";
import Axios from "../services/mars-photo-api/axios-config";

const SearchPhotosScreen = ({ navigation, route }) => {
	console.log(">> NAVIGATION >>\n", navigation);
	console.log(">> ROUTE >>\n", route);

	return (
		<SafeAreaView>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				style={S.imgContainer}
				source={route.params.img_url}
			>
				<Text>{JSON.stringify(route.params)}</Text>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SearchPhotosScreen;

const S = StyleSheet.create({
	imgContainer: { flex: 1 },
	imgStyle: {
		// flex: 1,
	},
	flatList: {
		display: "flex",
		// flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
	},
});
