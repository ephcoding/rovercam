import { useEffect, useState } from "react";
import { LogBox, Modal, StyleSheet, Text, View } from "react-native";
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
import { createUniqueObjectsArray } from "./utils/createUniqueObjectsArray";
import ExpandedPhotoModal from "../components/shared/ExpandedPhotoModal";
import RoverCamerasList from "../components/RoverCamerasList";
import FullScreenModal from "../components/shared/FullScreenModal";
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
	/**
	 * @param {string} rover - rover to fetch photos for
	 * @param {string} paramType - photo query param
	 * @param {string} value - photo query param value
	 */
	const { isLoading, error, data } = useFetchPhotosByParam(
		route.params.rover,
		route.params.paramType,
		route.params.value
	);

	const navState = navigation;
	console.log(navState);

	const [isVisible, setIsVisible] = useState(false);
	const [isFiltered, setIsFiltered] = useState(false);
	const [filteredPhotos, setFilteredPhotos] = useState([]);

	const toggleOverlay = () => setIsVisible(!isVisible);

	const filterPhotosByCamera = cameraAbbr => {
		const photos = data.photos.filter(
			photo => photo.camera.name === cameraAbbr
		);

		setFilteredPhotos(photos);
		setIsFiltered(true);
		toggleOverlay();
	};

	const removeCameraFilter = () => {
		setIsFiltered(false);
		toggleOverlay();
	};

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	}, []);

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	const cameras = createUniqueObjectsArray(data.photos, "camera", "name");

	return (
		<SafeAreaView>
			<ImageBackground
			// source={img_source}
			>
				{isFiltered
					? filteredPhotos && <PhotosList photos={filteredPhotos} />
					: data && <PhotosList photos={data.photos} />}

				<FullScreenModal isVisible={isVisible}>
					<RoverCamerasList
						cameraObjArr={cameras}
						setFilteredPhotos={filterPhotosByCamera}
						removeCameraFilter={removeCameraFilter}
					/>
				</FullScreenModal>

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
	// ----------------------------
	// -- CAMERA LIST MODAL
	// ----------------------------
	modal_imageBackground_container: {
		alignItems: "center",
		backgroundColor: "#000a",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	fabWrapper_view_style: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},

	// ----------------------------
	// -- OG OVERLAY
	// ----------------------------
	overlay_overlayStyle: {
		backgroundColor: "red",
		height: "80%",
		width: "80%",
	},
	overlay_backdropStyle: {
		backgroundColor: COLORS.backgroundDK,
	},
});
