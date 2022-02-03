import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ROVER_SECTION_OPTIONS } from "../app_data";
import RoverOptionCard from "../components/RoverOptionCard";

const RoverSection = ({ roverName }) => {
	return (
		<View>
			<Text style={S.roverTitle}>{roverName}</Text>
			<FlatList
				horizontal
				data={ROVER_SECTION_OPTIONS}
				renderItem={({ item }) => <RoverOptionCard label={item} />}
				extractorKey={item => item}
			/>
		</View>
	);
};

export default RoverSection;

const S = StyleSheet.create({
	roverTitle: {
		fontSize: 30,
		fontWeight: "bold",
	},
});
