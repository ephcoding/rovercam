import { StyleSheet, Text, View } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import { fetchManifestAll } from "../services/mars-rover-api";

// QUESTION
// is RN navigation screen lifecycle screwing up getting pre-fetched react-query data?
// - do I need make a func that calls getQueryData() when the screen is focused?

const NewPhotosScreen = () => {
	const { data: manifests } = useQuery("manifests", fetchManifestAll);
	console.log(manifests[0]);

	return (
		<View style={S.view}>
			<Text>{manifests ? manifests[0].photo_manifest.name : null}</Text>
		</View>
	);
};

const S = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#96f",
	},
});

export default NewPhotosScreen;
