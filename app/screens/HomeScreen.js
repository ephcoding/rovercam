import { Text } from "react-native-elements";
import { ROVER_NAMES } from "../constants";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import RoverCard from "../components/RoverCard";
import { useFetchAllManifests } from "../hooks";
import { useQuery } from "react-query";
import { SIZES } from "../styles";
const backgroundImgUri = require("../../assets/img/mars-glowing.jpg");

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover for cool camera selection option
 * TODO: resolve undefined manifest.props on init app load
 */

/**
 *
 * TODO: pre-fetch manifest & all images for each Rover separately
 * (query manifest on nav to RoverScreen)
 * (query & filter photos on nav to DisplayPhotosScreen from SearchScreen)
 *
 */

const HomeScreen = ({ navigation }) => {
	// const { isLoading, error, data } = useQuery(
	// 	["manifests", rover],
	// 	() => getRoverManifest(rover),
	// 	{
	// 		placeholderData: () => {},
	// 	}
	// );
	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				source={backgroundImgUri}
				style={S.imgBg}
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
	imgBg: {
		flex: 1,
	},
	imgStyle: {
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
