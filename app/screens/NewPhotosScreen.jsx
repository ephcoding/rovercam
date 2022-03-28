import { Image, StyleSheet, Text, View } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import { fetchLatestPhotosAll, fetchManifestAll } from "../mars-photos-api";

// QUESTION
// is RN navigation screen lifecycle screwing up getting pre-fetched react-query data?
// - do I need make a func that calls getQueryData() when the screen is focused?

const NewPhotosScreen = () => {
	const { data: manifests } = useQuery("manifests", fetchManifestAll, {
		staleTime: "Infinity",
	});
	const { data: latestPhotos } = useQuery(
		"latestPhotos",
		fetchLatestPhotosAll,
		{
			staleTime: "Infinity",
		}
	);

	// if (manifests) {
	// 	console.log(manifests[0]);
	// }
	let imgSRC;
	if (latestPhotos) {
		imgSRC = latestPhotos[0].latest_photos[0].img_src;

		console.log(
			">> LATEST PHOTOS >>\n",
			latestPhotos[0].latest_photos[0].img_src
		);
	}

	return (
		<View style={S.view}>
			<Text>{manifests ? manifests[0].photo_manifest.name : null}</Text>
			<Image source={{ uri: imgSRC }} style={S.image} />
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
