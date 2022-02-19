import { useEffect } from "react";
import { ROVER_NAMES } from "../constants";
import {
	LogBox,
	SafeAreaView,
	ImageBackground,
	View,
	StyleSheet,
} from "react-native";
import { Text } from "react-native-elements";
import { useQuery } from "react-query";
import { SIZES } from "../styles";
import RoverCard from "../components/RoverCard";
import TestComponent from "../components/TEST";
const ibSource = require("../../assets/img/mars-glowing.jpg");

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
		<SafeAreaView style={S.sav_style}>
			<ImageBackground
				imageStyle={S.ib_imageStyle}
				resizeMode='cover'
				source={ibSource}
				style={S.ib_style}
			>
				<TestComponent />
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
	sav_style: {
		backgroundColor: "#000",
		flex: 1,
	},
	ib_imageStyle: {
		opacity: 0.7,
	},
	ib_style: {
		flex: 1,
	},
	txt_h2_style: {
		textAlign: "center",
	},
	row_wrap_between: {
		alignContent: "center",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
});
