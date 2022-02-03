import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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

				// -- cache/re-cache manifest response if returned value is new OR updated
			} catch (error) {
				console.log(error);
			}
		};

		fetchRoverManifests();
	}, []);

	return (
		<View style={S.screen}>
			<View>
				{Object.keys(manifests).map(roverManifest => (
					<View key={manifests[roverManifest].name}>
						<Text>Rover: {manifests[roverManifest].name}</Text>
						<Text>Launched: {manifests[roverManifest].launch_date}</Text>
						<Text>Landed: {manifests[roverManifest].landing_date}</Text>
						<Text>
							Last Photo (earth date): {manifests[roverManifest].max_date}
						</Text>
						<Text>Last Photo (SOL): {manifests[roverManifest].max_sol}</Text>
					</View>
				))}
			</View>
		</View>
	);
};

export default MissionsScreen;

const S = StyleSheet.create({
	screen: {
		height: "100%",
		justifyContent: "space-between",
		padding: 20,
	},
	screenTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
