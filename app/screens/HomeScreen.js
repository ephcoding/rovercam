import { useEffect } from "react";
import { ImageBackground, SafeAreaView } from "../components/shared";
import { ROVER_NAMES } from "../constants";
import { LogBox, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useQuery } from "react-query";
import { SIZES } from "../styles";
import RoverCard from "../components/RoverCard";
import TestComponent from "../components/TestComponent";
const img_source = require("../../assets/img/mars-glowing.jpg");

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover for cool camera selection option
 * TODO: resolve undefined manifest.props on init app load
 * * TODO: pre-fetch manifest & all images for each Rover separately
 * (query manifest on nav to RoverScreen)
 * (query & filter photos on nav to DisplayPhotosScreen from SearchScreen)
 */

const HomeScreen = ({ navigation }) => {
	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	});

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				{/* ---- TEST ---- */}
				<TestComponent />
				{/* ---- TEST ---- */}
				<Text h2 style={S.txt_h2_style}>
					Tap a Rover to start exploring!
				</Text>
				<View style={S.row_wrap_between}>
					{Object.values(ROVER_NAMES).map(rover => (
						<RoverCard key={rover} navigation={navigation} rover={rover} />
					))}
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	txt_h2_style: {
		textAlign: "center",
	},
	row_wrap_between: {
		alignContent: "center",
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
});
