import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RoverOptionCard = ({ label }) => {
	return (
		<View style={S.container}>
			<Text>{label}</Text>
		</View>
	);
};

export default RoverOptionCard;

const S = StyleSheet.create({
	container: {
		borderColor: "#0066ff",
		borderWidth: 2,
	},
});
