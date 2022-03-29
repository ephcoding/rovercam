import { Image, StyleSheet, Text, View } from "react-native";
import { useQuery, useQueryClient } from "react-query";
// -----
import { fetchManifest } from "../mars-photos-api";
import { NAMES } from "../constants";

const NewPhotosScreen = () => {
	const { data: curiosity } = useQuery(["manifest", NAMES.curiosity], () =>
		fetchManifest(NAMES.curiosity)
	);
	// const { data: latestPhotos } = useQuery(
	// 	"latestPhotos",
	// 	fetchLatestPhotosAll,
	// 	{
	// 		staleTime: "Infinity",
	// 	}
	// );

	// if (manifests) {
	// 	console.log(manifests[0]);
	// }
	let imgSRC;
	// if (latestPhotos) {
	// 	imgSRC = latestPhotos[0].latest_photos[0].img_src;

	// 	console.log(
	// 		">> LATEST PHOTOS >>\n",
	// 		latestPhotos[0].latest_photos[0].img_src
	// 	);
	// }

	return (
		<View style={S.view}>
			<Text>Photos Screen</Text>
		</View>
	);
};

const S = StyleSheet.create({
	image: {
		height: 100,
		width: 100,
	},
	view: {
		flex: 1,
		backgroundColor: "#96f",
	},
});

export default NewPhotosScreen;
