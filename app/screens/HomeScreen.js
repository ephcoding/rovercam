import {
	Image,
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
			{/* NOTE: <ImageBackground> styles get applied to kids - wtf 
			replacing with View/Image components
			TODO: make this a xcomp later
			*/}
			{/* <ImageBackground
				source={require("../../assets/mars-glowing.jpg")}
				style={S.bgImg}
			> */}
			<View style={{ flex: 1 }}>
				<Image
					source={require("../../assets/mars-glowing.jpg")}
					style={{
						height: "100%",
						width: "100%",
						position: "absolute",
						opacity: 0.5,
					}}
				/>
				<Text
					style={{
						color: "#fff",
						padding: 15,
						fontWeight: "bold",
						fontSize: 40,
					}}
				>
					ROVERCAM
				</Text>
				<View style={S.screen}>
					<Pressable style={S.btn} onPress={() => handleOnPressNav("Missions")}>
						<Text>Rover Missions</Text>
					</Pressable>
					<Pressable style={S.btn} onPress={() => handleOnPressNav("Options")}>
						<Text>Photos</Text>
					</Pressable>
				</View>
			</View>
			{/* </ImageBackground> */}
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
		opacity: 0.5,
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
