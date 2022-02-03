import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
	const handleOnPressNav = screen => navigation.navigate(screen);
	return (
		<View style={S.screen}>
			<Pressable style={S.btn} onPress={() => handleOnPressNav("Missions")}>
				<Text>Rover Missions</Text>
			</Pressable>
			<Pressable style={S.btn} onPress={() => handleOnPressNav("Options")}>
				<Text>Photos</Text>
			</Pressable>
		</View>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	btn: {
		borderColor: "black",
		borderWidth: 2,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	screen: {
		alignItems: "center",
		height: "100%",
		justifyContent: "space-evenly",
	},
});
