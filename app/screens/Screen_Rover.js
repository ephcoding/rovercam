import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles";
import { CAMERAS, IMG_PATHS } from "../constants";
import { useFetchRoverManifest } from "../hooks/use-manifest";
import RoverContext from "../context/rover-context";
import Img_Background from "../components/mdx-core/Img_Background";
import List_Cameras from "../components/List_Cameras";
import RoverInfo from "../components/RoverInfo";
import Text_Title from "../components/mdx-core/Text_Title";
import View_ContentWrapper from "../components/mdx-core/View_ContentWrapper";

const Screen_Rover = ({ navigation }) => {
	const rover = navigation.getParam("label");
	const { manifest } = useFetchRoverManifest(rover);

	return (
		<SafeAreaView style={S.safeArea}>
			<Img_Background imgSrc={IMG_PATHS[rover.toLowerCase()]} opacity={0.5}>
				<View_ContentWrapper>
					<RoverInfo manifest={manifest} />
					<List_Cameras rover={rover} />
				</View_ContentWrapper>
			</Img_Background>
		</SafeAreaView>
	);
};

export default Screen_Rover;

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
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
	screen: {
		flex: 1,
		padding: 15,
	},
	RoverInfo: {
		paddingBottom: 15,
	},
});
