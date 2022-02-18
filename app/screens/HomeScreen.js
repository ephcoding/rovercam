import { useEffect } from "react";
import { ROVER_NAMES } from "../constants";
import {
	ImageBackground,
	LogBox,
	SafeAreaView,
	StyleSheet,
	View,
} from "react-native";
import { Text } from "react-native-elements";
import RoverCard from "../components/RoverCard";
import { useQuery } from "react-query";
import { SIZES } from "../styles";
const imgBgSrc = require("../../assets/img/mars-glowing.jpg");

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
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.bgImgStyle}
				resizeMode='cover'
				source={imgBgSrc}
				style={S.bgStyle}
			>
				<Text h3 style={S.introCTA}>
					Pick a Rover and go explore Mars. Rover style!
				</Text>

				<View style={S.roverCards}>
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
	bgStyle: {
		flex: 1,
	},
	bgImgStyle: {
		// opacity: 0.7,
	},
	introCTA: {
		textAlign: "center",
	},
	introText: {
		marginVertical: SIZES[2],
		textAlign: "center",
	},
	introTextView: {
		padding: SIZES[3],
	},
	roverCards: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "space-around",
	},
	safeAreaView: {
		backgroundColor: "#000",
		flex: 1,
		justifyContent: "space-evenly",
	},
});
