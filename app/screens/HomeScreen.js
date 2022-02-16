import { Text } from "react-native-elements";
import { ROVER_NAMES } from "../constants";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import RoverCard from "../components/RoverCard";
import { useFetchAllManifests } from "../hooks";
import { useQuery } from "react-query";
const backgroundImgUri = require("../../assets/img/mars-glowing.jpg");

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover for cool camera selection option
 * TODO: resolve undefined manifest.props on init app load
 */

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				source={backgroundImgUri}
				style={S.imgBg}
			>
				{Object.values(ROVER_NAMES).map(rover => (
					<RoverCard key={rover} navigation={navigation} rover={rover} />
				))}
			</ImageBackground>
		</SafeAreaView>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	imgBg: {
		flex: 1,
	},
	imgStyle: {
		opacity: 0.3,
	},
	safeAreaView: {
		backgroundColor: "#000",
		flex: 1,
		justifyContent: "space-evenly",
	},
});
