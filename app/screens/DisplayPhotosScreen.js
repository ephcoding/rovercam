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
import { useFetchPhotos } from "../hooks/useFetchPhotos";
const img_source = require("../../assets/img/mars-rover-tracks.jpg");

// TODO: ------------------------------
// refactor DisplayScreen to only DISPLAY photos

// (ie. photos are prefetched in previous screen and then passed to DisplayPhotos screen)
// --------------------------------------

const DisplayPhotosScreen = ({ navigation, route }) => {
	/**
	 * @param {string} rover lowercase Rover name
	 * @param {string} queryParam latest, sol, earth_date
	 * @param {string} paramValue null (latest photos), sol #, yyyy-mm-dd
	 */
	const { rover, queryParam, paramValue } = route.params;
	const { isLoading, error, data } = useFetchPhotos(
		rover,
		queryParam,
		paramValue
	);

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
