import { useEffect, useState } from "react";
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Axios from "../services/marsRoverApi/axios-config";
import {
	CURIOSITY,
	OPPORTUNITY,
	PERSEVERANCE,
	SPIRIT,
} from "../constants/rovers";

const MissionsScreen = () => {
	const [manifests, setManifests] = useState({});

	useEffect(() => {
		const fetchRoverManifests = async () => {
			try {
				// -- fetch ALL manifests >> [RESPONSE.data.photo_manifest]
				const response = await Promise.all([
					Axios.get(`/manifests/${CURIOSITY}`),
					Axios.get(`/manifests/${OPPORTUNITY}`),
					Axios.get(`/manifests/${PERSEVERANCE}`),
					Axios.get(`/manifests/${SPIRIT}`),
				]);

				// -- set manifest STATES (missions) with successfully resolved request Promises
				for await (const rover of await response) {
					const manifest = await rover.data.photo_manifest;

					setManifests(prevState => {
						return {
							...prevState,
							[manifest.name]: manifest,
						};
					});
				}

				// -- TODO: cache/re-cache manifest response if returned value is new OR updated
			} catch (error) {
				console.log(error);
			}
		};

		fetchRoverManifests();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={S.screen}>
				{Object.keys(manifests).map(roverManifest => (
					// <ImageBackground
					// 	source={require("../../assets/img/curiosity-01.jpg")}
					// 	key={manifests[roverManifest].name}
					// 	// source={img}
					// 	style={S.img}
					// >
					<View style={S.textWrapper}>
						<Text style={S.sectionTitle}>{manifests[roverManifest].name}</Text>
						<Text style={S.text}>
							Launched: {manifests[roverManifest].launch_date}
						</Text>
						<Text style={S.text}>
							Landed: {manifests[roverManifest].landing_date}
						</Text>
						<Text style={S.text}>
							Last Photo (earth date): {manifests[roverManifest].max_date}
						</Text>
						<Text style={S.text}>
							Last Photo (SOL): {manifests[roverManifest].max_sol}
						</Text>
					</View>
					// </ImageBackground>
				))}
			</View>
		</SafeAreaView>
	);
};

export default MissionsScreen;

const S = StyleSheet.create({
	img: {
		flex: 1,
		height: "100%",
		width: "100%",
		// resizeMode: "center",
	},
	screen: {
		flex: 1,
		height: "100%",
		justifyContent: "space-between",
	},
	screenTitle: {
		fontSize: 20,
	},
	sectionTitle: {
		color: "white",
		fontSize: 30,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	text: {
		color: "white",
		fontWeight: "bold",
	},
	textWrapper: {
		backgroundColor: "#000000c0",
		height: "100%",
	},
});
