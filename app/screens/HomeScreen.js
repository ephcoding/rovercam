import React from "react";
import {
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import BackgroundImage from "../components/BackgroundImage";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to reposition bgImg
 */

const HomeScreen = ({ navigation }) => {
	const handleOnPressNav = screen => navigation.navigate(screen);
	return (
		<SafeAreaView style={S.safeArea}>
			<BackgroundImage
				opacity={0.5}
				imgSrc={require("../../assets/mars-glowing.jpg")}
			>
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
				<Text style={{ color: "#fff" }}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</Text>
				<View style={S.btns}>
					<Pressable
						style={S.btn}
						onPress={() => handleOnPressNav("Curiosity")}
					>
						<Text style={{ color: "#fff", alignSelf: "center" }}>
							Curiosity
						</Text>
					</Pressable>
					<Pressable
						style={S.btn}
						onPress={() => handleOnPressNav("Opportunity")}
					>
						<Text style={{ color: "#fff", alignSelf: "center" }}>
							Opportunity
						</Text>
					</Pressable>
					<Pressable
						style={S.btn}
						onPress={() => handleOnPressNav("Perseverance")}
					>
						<Text style={{ color: "#fff", alignSelf: "center" }}>
							Perseverance
						</Text>
					</Pressable>
					<Pressable style={S.btn} onPress={() => handleOnPressNav("Spirit")}>
						<Text style={{ color: "#fff", alignSelf: "center" }}>Spirit</Text>
					</Pressable>
				</View>
			</BackgroundImage>
		</SafeAreaView>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	btn: {
		borderColor: "#fff",
		borderRadius: 10,
		borderWidth: 2,
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 150,
	},
	btns: {
		alignItems: "center",
		flex: 1,
		justifyContent: "space-evenly",
	},
	safeArea: {
		backgroundColor: "#000",
		flex: 1,
	},
});
