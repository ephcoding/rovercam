import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListCard from "../components/ListCard";
import useRoverManifests from "../hooks/useRoverManifests";
import ROVER_API from "../api/mars_rover";
import RoverSection from "../components/RoverSection";

const SearchScreen = () => {
	const [manifests, errorMsg] = useRoverManifests();

	// console.log(">> SEARCH SCREEN >>");

	return (
		<View>
			{errorMsg ? <Text>{errorMsg}</Text> : null}
			{/* <View>
				<FlatList
					data={manifests}
					renderItem={({ item }) => <ListCard roverInfo={item} />}
					keyExtractor={item => item.name}
				/>
			</View> */}

			<RoverSection roverName='Curiosity' />
			<RoverSection roverName='Opportunity' />
			<RoverSection roverName='Perseverance' />
			<RoverSection roverName='Spirit' />
		</View>
	);
};

export default SearchScreen;

const S = StyleSheet.create({
	sections: {
		flex: 1,
	},
});
