import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RoverStats = ({ roverInfo }) => {
	const { name, launch_date, landing_date, max_date, total_photos } = roverInfo;

	return (
		<View style={S.container}>
			<Text style={S.title}>{name}</Text>
			<Text>Launched: {launch_date}</Text>
			<Text>Landed: {landing_date}</Text>
			<Text>Last Transmission: {max_date}</Text>
			<Text>Pic Count: {total_photos}</Text>
		</View>
	);
};

export default RoverStats;

const S = StyleSheet.create({
	container: {
		borderColor: "#0066ff",
		borderWidth: 3,
		height: 250,
		padding: 20,
		margin: 25,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 15,
		textAlign: "center",
		textTransform: "uppercase",
	},
});
