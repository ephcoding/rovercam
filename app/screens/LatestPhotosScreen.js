import {
	CameraFAB,
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { useEffect, useState } from "react";
import { COLORS } from "../styles";
import { useQuery } from "react-query";
import { FAB, Overlay } from "react-native-elements";
import PhotosList from "../components/PhotosList";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationEvents } from "react-navigation";
import { useLatestPhotos } from "../hooks/useFetchLatestPhotos";
import { ROVER_CAMERAS } from "../constants";
import RoverCamerasList from "../components/RoverCamerasList";
const img_source = require("../../assets/img/mars-rover-tracks.jpg");

// TODO: use [manifest] & [photos] to dyno-gen camera labels & names

const DisplayLatestPhotosScreen = ({ navigation, route }) => {
	const { isLoading, error, data } = useLatestPhotos(route.params.rover);
	const [isVisible, setIsVisible] = useState(false);
	const [isFiltered, setIsFiltered] = useState(false);
	const [filteredPhotos, setFilteredPhotos] = useState([]);

	const handleFilterByCamera = cameraAbbr => {
		const photos = data.latest_photos.filter(
			photo => photo.camera.name === cameraAbbr
		);

		setFilteredPhotos(photos);
		setIsFiltered(true);
		toggleOverlay();

		console.log(">> data.latest_photos.length >>\n", data.latest_photos.length);
		console.log(">> filteredPhotos.length >>\n", photos.length);
	};

	const toggleOverlay = () => setIsVisible(!isVisible);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	}, []);

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground
			// source={img_source}
			>
				{isFiltered
					? filteredPhotos && <PhotosList photos={filteredPhotos} />
					: data && <PhotosList photos={data.latest_photos} />}
				<Overlay
					isVisible={isVisible}
					overlayStyle={S.overlayStyle}
					onBackdropPress={toggleOverlay}
				>
					<RoverCamerasList
						setFilteredPhotos={handleFilterByCamera}
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

export default DisplayLatestPhotosScreen;

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
