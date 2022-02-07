import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles";
import { CAMERAS, IMG_PATHS } from "../constants";
import { useFetchRoverManifest } from "../hooks/use-manifest";
import Img_Background from "../components/shared/Img_Background";
import List_Cameras from "../components/List_Cameras";
import RoverContext from "../context/rover-context";
import RoverInfo from "../components/RoverInfo";
import SafeAreaView from "../components/shared/SafeAreaView";
import Text_Title from "../components/shared/Text_Title";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";

const RoverScreen = ({ navigation }) => {
	const rover = navigation.getParam("rover");
	console.log(rover);
	const { manifest } = useFetchRoverManifest(rover);

	if (!manifest) return;

	return (
		<SafeAreaView>
			<Img_Background imgSrc={IMG_PATHS[rover.toLowerCase()]} opacity={0.5}>
				<View_ContentWrapper>
					<RoverInfo manifest={manifest} />
					<List_Cameras rover={rover} />
				</View_ContentWrapper>
			</Img_Background>
		</SafeAreaView>
	);
};

export default RoverScreen;

const S = StyleSheet.create({
	camera: {
		borderColor: "#fff",
		borderWidth: 2,
		padding: 10,
		marginVertical: 15,
	},
	cameras: {
		alignItems: "center",
	},
	screen: {
		flex: 1,
		padding: 15,
	},
	RoverInfo: {
		paddingBottom: 15,
	},
});
