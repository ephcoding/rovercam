import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/mdx-core/ImgBackground";
import { CURIOSITY, CAMERAS } from "../constants/rovers";
import { useFetchManifest } from "../hooks/use-manifest";
import CamerasList from "../components/CamerasList";
import RoverStats from "../components/RoverStats";

const RoverScreen = ({ navigation }) => {
	const rover = navigation.getParam("rover");
	console.log(">> ROVER SCREEN >>", rover);
	const { manifest } = useFetchManifest(rover);

	if (!manifest) return;

	let { name, launch_date, landing_date, max_date, total_photos } = manifest;

	return (
		<ImgBackground
			imgSrc={require("../../assets/img/curiosity-02.jpg")}
			opacity={0.5}
		>
			<View style={S.screen}>
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
				<CamerasList />
				<View style={S.cameras}>
					{CAMERAS.Curiosity.map(camera => (
						<View key={camera[1]} style={S.camera}>
							<Text style={{ color: "#fff" }}>{camera[0]}</Text>
						</View>
					))}
				</View>
			</View>
		</ImgBackground>
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
