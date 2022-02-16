import { useEffect } from "react";
import { Text } from "react-native-elements";
import { ROVER_NAMES as ROVERS } from "../constants";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import RoverCard from "../components/RoverCard";
import { useRoverManifest, useRoverManifests } from "../hooks";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover for cool camera selection option
 * TODO: resolve undefined manifest.props on init app load
 */

const HomeScreen = ({ navigation }) => {
	// const [
	// 	{
	// 		data: {
	// 			photo_manifest: {
	// 				name: cName,
	// 				landing_date: cLanded,
	// 				launch_date: cLaunched,
	// 				max_date: cMax,
	// 				photos: cPics,
	// 			},
	// 		},
	// 	},
	// 	{
	// 		data: {
	// 			photo_manifest: {
	// 				name: oName,
	// 				landing_date: oLanded,
	// 				launch_date: oLaunched,
	// 				max_date: oMax,
	// 				photos: oPics,
	// 			},
	// 		},
	// 	},
	// 	{
	// 		data: {
	// 			photo_manifest: {
	// 				name: pName,
	// 				landing_date: pLanded,
	// 				launch_date: pLaunched,
	// 				max_date: pMax,
	// 				photos: pPics,
	// 			},
	// 		},
	// 	},
	// 	{
	// 		data: {
	// 			photo_manifest: {
	// 				name: sName,
	// 				landing_date: sLanded,
	// 				launch_date: sLaunched,
	// 				max_date: sMax,
	// 				photos: sPics,
	// 			},
	// 		},
	// 	},
	// ] = useRoverManifests();

	// const mCuriosity = curiosity.data.photo_manifest;
	// const mOpportunity = opportunity.data.photo_manifest;
	// const mPerseverance = perseverance.data.photo_manifest;
	// const mSpirit = spirit.data.photo_manifest;

	const { data: C } = useRoverManifest(ROVERS.curiosity);

	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				source={require("../../assets/img/mars-glowing.jpg")}
				style={S.imgBg}
			>
				{
					// name && landing_date && launch_date && max_date && photos && (
					// 	<RoverCard
					// 		key={name}
					// 		landed={landing_date}
					// 		launched={launch_date}
					// 		maxDate={max_date}
					// 		navigation={navigation}
					// 		photos={photos}
					// 		rover={name.toLowerCase()}
					// 	/>
					// )
				}
				<Text>{JSON.stringify(C)}</Text>
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
