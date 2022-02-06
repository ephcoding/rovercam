import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Img_Background from "../components/mdx-core/Img_Background";
import { CURIOSITY, CAMERAS } from "../site-data";
import { useFetchRoverManifest } from "../hooks/use-manifest";
import List_Cameras from "../components/List_Cameras";
import RoverStats from "../components/RoverStats";
import View_ContentWrapper from "../components/mdx-core/View_ContentWrapper";

const RoverScreen = ({ navigation }) => {
	const rover = navigation.getParam("rover");
	console.log(">> ROVER SCREEN >>", rover);
	const { manifest } = useFetchRoverManifest(rover);

	if (!manifest) return;

	let { name, launch_date, landing_date, max_date, total_photos } = manifest;

	return (
		<Img_Background
			imgSrc={require("../../assets/img/curiosity-up-close.jpg")}
			opacity={0.5}
		>
			<View_ContentWrapper>
				<Text
					style={{
						color: "#fff",
						fontSize: 40,
						textTransform: "uppercase",
						fontWeight: "bold",
						paddingBottom: 20,
					}}
				>
					{name}
				</Text>
				<RoverStats
					roverInfo={{
						name,
						launch_date,
						landing_date,
						max_date,
						total_photos,
					}}
				/>
				<List_Cameras />
				<View style={S.cameras}>
					{CAMERAS.Curiosity.map(camera => (
						<View key={camera[1]} style={S.camera}>
							<Text style={{ color: "#fff" }}>{camera[0]}</Text>
						</View>
					))}
				</View>
			</View_ContentWrapper>
		</Img_Background>
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
	roverStats: {
		paddingBottom: 15,
	},
});
