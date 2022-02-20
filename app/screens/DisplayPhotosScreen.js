import { useEffect } from "react";
import { LogBox, Text } from "react-native";
import { COLORS } from "../styles";
import PhotosList from "../components/PhotosList";
import { useFetchPhotosByParam } from "../hooks";
import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
const img_source = require("../../assets/img/mars-rover-tracks.jpg");

/**
 *
 * QUERY PARAM TYPES:
 * sol
 * earth_date
 * camera
 *
 */

const DisplayPhotosScreen = ({ navigation, route }) => {
	const { isLoading, error, data } = useFetchPhotosByParam(
		route.params.rover,
		route.params.paramType,
		route.params.value
	);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	});

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	// console.clear();
	// console.log(">> DisplayPhotosScreen DATA >>", data.photos);

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				{data && <PhotosList photos={data.photos} />}
				<NavHomeFAB navigation={navigation} />
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DisplayPhotosScreen;
