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
	const [isFiltered, setIsFiltered] = useState(false);
	const [filteredPhotos, setFilteredPhotos] = useState([]);

	const handleFilterByCamera = cameraAbbr => {
		const photos = data.photos.filter(
			photo => photo.camera.name === cameraAbbr
		);

		setFilteredPhotos(photos);
		setIsFiltered(true);
		toggleOverlay();

		console.log(">> data.latest_photos.length >>\n", photos.length);
		console.log(">> filteredPhotos.length >>\n", photos.length);
	};

	const toggleOverlay = () => setIsVisible(!isVisible);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	});

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground
			// source={img_source}
			>
				{isFiltered
					? filteredPhotos && <PhotosList photos={filteredPhotos} />
					: data && <PhotosList photos={data.photos} />}
				<Overlay
					backdropStyle={S.overlay_backdropStyle}
					isVisible={isVisible}
					onBackdropPress={toggleOverlay}
					overlayStyle={S.overlay_overlayStyle}
				>
					<RoverCamerasList
						setFilteredPhotos={handleFilterByCamera}
						rover={route.params.rover}
					/>
				</Overlay>
				<View style={S.fabWrapper_view_style}>
					<NavHomeFAB navigation={navigation} />
					<CameraFAB setIsVisible={toggleOverlay} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DisplayPhotosScreen;

const S = StyleSheet.create({
	overlay_backdropStyle: {
		backgroundColor: COLORS.backgroundDK,
	},
	overlay_overlayStyle: {
		backgroundColor: "red",
		height: "80%",
		width: "80%",
	},
	fabWrapper_view_style: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});
