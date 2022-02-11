import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Img_Background from "../components/shared/Img_Background";
import Text_Title from "../components/shared/Text_Title";
import SafeAreaView from "../components/shared/SafeAreaView";
import { COLORS } from "../styles";
import Axios from "../services/mars-photo-api/axios-config";

const SearchPhotosScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Img_Background
				imgSrc={require("../../assets/img/mars-rover-tracks.jpg")}
			>
				<Text>Search Photos Screen</Text>
			</Img_Background>
		</SafeAreaView>
	);
};

export default SearchPhotosScreen;

const S = StyleSheet.create({
	flatList: {
		display: "flex",
		// flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
	},
	img: {
		borderWidth: 5,
		borderColor: "red",
		height: 150,
		margin: 10,
		width: 150,
	},
});
