import {
	ImageBackground,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to reposition bgImg
 */

const HomeScreen = ({ navigation }) => {
	const handleOnPressNav = screen => navigation.navigate(screen);
	return (
		<SafeAreaView style={S.safeArea}>
			<ImageBackground
				source={require("../../assets/mars-glowing.jpg")}
				style={S.bgImg}
			>
				<View style={S.screen}>
					<Pressable style={S.btn} onPress={() => handleOnPressNav("Missions")}>
						<Text>Rover Missions</Text>
					</Pressable>
					<Pressable style={S.btn} onPress={() => handleOnPressNav("Options")}>
						<Text>Photos</Text>
					</Pressable>
				</View>
			</ImageBackground>
		</SafeAreaView>
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
	bgImg: {
		flex: 1,
		height: "100%",
		width: "100%",
		opacity: 0.7,
	},
	safeArea: {
		backgroundColor: "#000",
		flex: 1,
	},
	screen: {
		alignItems: "center",
		height: "100%",
		justifyContent: "space-evenly",
	},
});
