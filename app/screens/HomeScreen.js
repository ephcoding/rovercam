import { useEffect } from "react";
import { ROVER_NAMES as ROVERS } from "../constants";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import RoverCard from "../components/RoverCard";
import { useRoverManifests } from "../hooks";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover for cool camera selection option
 */

const HomeScreen = ({ navigation }) => {
	const manifests = useRoverManifests();
	// console.log(manifests);

	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				source={require("../../assets/img/mars-glowing.jpg")}
				style={S.imgBg}
			>
				{manifests &&
					manifests.map(manifest => {
						const { name, landing_date, launch_date, max_date, photos } =
							manifest.data.photo_manifest;
						return (
							<RoverCard
								key={manifest.data.photo_manifest.name}
								landed={manifest.data.photo_manifest.landing_date}
								launched={manifest.data.photo_manifest.launch_date}
								maxDate={manifest.data.photo_manifest.max_date}
								navigation={navigation}
								photos={manifest.data.photo_manifest.photos}
								rover={manifest.data.photo_manifest.name.toLowerCase()}
							/>
						);
					})}
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
