import { useEffect, useState } from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles";
import PhotosList from "../components/PhotosList";
import { useFetchPhotosByParam } from "../hooks";
import {
	CameraFAB,
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { Overlay } from "react-native-elements/dist/overlay/Overlay";
import RoverCamerasList from "../components/RoverCamerasList";
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
	const [isVisible, setIsVisible] = useState(false);
	const [filteredPhotos, setFilteredPhotos] = useState([]);

	const handleCameraSelect = e => console.log(">> SELECTED CAMERA >>", e);
	const toggleOverlay = () => setIsVisible(!isVisible);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	});

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				{data && <PhotosList photos={data.photos} />}
				<Overlay
					isVisible={isVisible}
					onBackdropPress={toggleOverlay}
					overlayStyle={S.overlayStyle}
				>
					<RoverCamerasList
						setFilteredPhotos={handleCameraSelect}
						rover={route.params.rover}
					/>
				</Overlay>
				<View style={S.row_between}>
					<NavHomeFAB navigation={navigation} />
					<CameraFAB setIsVisible={toggleOverlay} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DisplayPhotosScreen;

const S = StyleSheet.create({
	overlayStyle: {
		height: "80%",
		width: "80%",
	},
	row_between: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});
