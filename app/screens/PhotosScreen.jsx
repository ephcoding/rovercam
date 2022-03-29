import { useEffect, useState } from "react";
import { LogBox, Modal, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../theme";
import PhotosList from "../components/PhotosList";
import CamFilterFAB from "../components/CamFilterFAB";
import ImageBackground from "../components/ImageBackground";
import SafeAreaView from "../components/SafeAreaView";
import NavHomeFAB from "../components/NavHomeFAB";
import { Overlay } from "react-native-elements/dist/overlay/Overlay";
import { createUniqueObjectsArray } from "./utils/createUniqueObjectsArray";
import ExpandedPhotoModal from "../components/ExpandedPhotoModal";
import RoverCamerasList from "../components/RoverCamerasList";
import FullScreenModal from "../components/FullScreenModal";
import * as api from "../mars-photos-api/requests";
import CameraFilterModal from "../components/CameraFilterModal";
const img_source = require("../../assets/img/mars-rover-tracks.jpg");

const PhotosScreen = ({ navigation, route }) => {
	// const [isVisible, setIsVisible] = useState(false);
	// const [isFiltered, setIsFiltered] = useState(false);
	// const [filteredPhotos, setFilteredPhotos] = useState([]);
	// const { rover, query_param, param_value, manifest_photos } = route.params;
	// const { isLoading, error, data } = api.usePhotosByParam(
	// 	rover,
	// 	query_param,
	// 	param_value
	// );
	// let photos_prop = param_value === undefined ? "photos" : "latest_photos";
	// if (isLoading) return <Text>Loading...</Text>;
	// if (error) return <Text>ERROR: {error.messge}</Text>;
	// const cameras = createUniqueObjectsArray(data[photos_prop], "camera", "name");

	// const toggleOverlay = () => setIsVisible(!isVisible);
	// const filterPhotosByCamera = cameraAbbr => {
	// 	const photos = data[photos_prop].filter(
	// 		photo => photo.camera.name === cameraAbbr
	// 	);

	// 	navigation.setOptions({
	// 		title: cameraAbbr,
	// 	});

	// 	setFilteredPhotos(photos);
	// 	setIsFiltered(true);
	// 	toggleOverlay();
	// };
	// const removeCameraFilter = () => {
	// 	setIsFiltered(false);
	// 	toggleOverlay();
	// };

	// useEffect(() => {
	// 	LogBox.ignoreLogs(["Setting a timer"]);
	// }, []);

	return (
		<SafeAreaView>
			<ImageBackground>
				{/* {isFiltered && filteredPhotos && <PhotosList photos={filteredPhotos} />}
				{data && !isFiltered && <PhotosList photos={data[photos_prop]} />}

				<CameraFilterModal
					cameras={cameras}
					isVisible={isVisible}
					removeFilter={removeCameraFilter}
					setFilter={filterPhotosByCamera}
				/>

				<View style={S.fab_view_style}>
					<NavHomeFAB navigation={navigation} />
					<CamFilterFAB setIsVisible={toggleOverlay} />
				</View> */}
			</ImageBackground>
		</SafeAreaView>
	);
};

export default PhotosScreen;

const S = StyleSheet.create({
	fab_view_style: {
		backgroundColor: "#fff0",
		flexDirection: "row",
		justifyContent: "space-evenly",
		position: "absolute",
		left: 0,
		bottom: 0,
		right: 0,
		marginBottom: SIZE[6],
	},
});
