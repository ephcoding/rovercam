import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Axios from "../services/marsRoverApi/axios-config";

const MissionsScreen = () => {
	const [curiosityManifest, setCuriosityManifest] = useState({});
	const [opportunityManifest, setOpportunityManifest] = useState({});
	const [perseveranceManifest, setPerseveranceManifest] = useState({});
	const [spiritManifest, setSpiritManifest] = useState({});

	useEffect(() => {
		const fetchRoverManifests = async () => {
			try {
				const curiosityReq = await Axios.get("/manifests/curiosity");
				const opportunityReq = await Axios.get("/manifests/opportunity");
				const perseveranceReq = await Axios.get("/manifests/perseverance");
				const spiritReq = await Axios.get("/manifests/spirit");

				const C = await curiosityReq.data.photo_manifest;
				const O = await opportunityReq.data.photo_manifest;
				const P = await perseveranceReq.data.photo_manifest;
				const S = await spiritReq.data.photo_manifest;

				setCuriosityManifest({
					name: C.name,
					launch_date: C.launch_date,
					landing_date: C.landing_date,
					max_date: C.max_date,
					max_sol: C.max_sol,
				});
				setOpportunityManifest({
					name: O.name,
					launch_date: O.launch_date,
					landing_date: O.landing_date,
					max_date: O.max_date,
					max_sol: O.max_sol,
				});
				setPerseveranceManifest({
					name: P.name,
					launch_date: P.launch_date,
					landing_date: P.landing_date,
					max_date: P.max_date,
					max_sol: P.max_sol,
				});
				setSpiritManifest({
					name: S.name,
					launch_date: S.launch_date,
					landing_date: S.landing_date,
					max_date: S.max_date,
					max_sol: S.max_sol,
				});
			} catch (error) {
				console.log(error);
			}
		};

		fetchRoverManifests();
	}, [curiosityManifest]);

	return (
		<View style={S.screen}>
			<Text>Missions Screen</Text>

			<View>
				<Text>Rover: {curiosityManifest.name}</Text>
				<Text>Left Earth: {curiosityManifest.launch_date}</Text>
				<Text>Landed On Mars: {curiosityManifest.landing_date}</Text>
				<Text>Last Transmission Date: {curiosityManifest.max_date}</Text>
				<Text>Last Transmission SOL: {curiosityManifest.max_sol}</Text>
			</View>

			<View>
				<Text>Rover: {opportunityManifest.name}</Text>
				<Text>Left Earth: {opportunityManifest.launch_date}</Text>
				<Text>Landed On Mars: {opportunityManifest.landing_date}</Text>
				<Text>Last Transmission Date: {opportunityManifest.max_date}</Text>
				<Text>Last Transmission SOL: {opportunityManifest.max_sol}</Text>
			</View>
			<View>
				<Text>Rover: {perseveranceManifest.name}</Text>
				<Text>Left Earth: {perseveranceManifest.launch_date}</Text>
				<Text>Landed On Mars: {perseveranceManifest.landing_date}</Text>
				<Text>Last Transmission Date: {perseveranceManifest.max_date}</Text>
				<Text>Last Transmission SOL: {perseveranceManifest.max_sol}</Text>
			</View>
			<View>
				<Text>Rover: {spiritManifest.name}</Text>
				<Text>Left Earth: {spiritManifest.launch_date}</Text>
				<Text>Landed On Mars: {spiritManifest.landing_date}</Text>
				<Text>Last Transmission Date: {spiritManifest.max_date}</Text>
				<Text>Last Transmission SOL: {spiritManifest.max_sol}</Text>
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
});
