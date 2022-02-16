import { Text } from "react-native-elements";
import { ROVER_NAMES as ROVERS } from "../constants";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import RoverCard from "../components/RoverCard";
import { useFetchManifest, useFetchAllManifests } from "../hooks";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover for cool camera selection option
 * TODO: resolve undefined manifest.props on init app load
 */

const HomeScreen = ({ navigation }) => {
	const {
		isLoading: cIsLoading,
		error: cError,
		data: cData,
	} = useFetchManifest(ROVERS.curiosity);

	if (cIsLoading) return <Text>Loading...</Text>;
	if (cError) return <Text>Error: {cError.message}</Text>;

	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				source={require("../../assets/img/mars-glowing.jpg")}
				style={S.imgBg}
			>
				<RoverCard
					key={cData.photo_manifest.name}
					landed={cData.photo_manifest.landing_date}
					launched={cData.photo_manifest.launch_date}
					maxDate={cData.photo_manifest.max_date}
					navigation={navigation}
					photos={cData.photo_manifest.photos}
					rover={cData.photo_manifest.name.toLowerCase()}
				/>
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
