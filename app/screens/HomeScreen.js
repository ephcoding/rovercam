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

	let roverCards;

	if (manifests) {
		// console.log(manifests);
		roverCards = manifests.map(manifest => {
			const { name, landing_date, launch_date, photos } =
				manifest.data.photo_manifest;
			console.log(`>>>> ${name.toUpperCase()} >>>>`);
			console.log("LAUNCHED: ", launch_date);
			console.log("LANDED: ", landing_date);
			console.log("PHOTO COUNT: ", photos.length);
			console.log("FIRST SOL: ", photos[0].sol);
			return (
				<RoverCard
					key={name}
					landed={landing_date}
					launched={launch_date}
					navigation={navigation}
					photos={photos}
					rover={name.toLowerCase()}
				/>
			);
		});
	}

	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				source={require("../../assets/img/mars-glowing.jpg")}
				style={S.imgBg}
			>
				{roverCards}
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
