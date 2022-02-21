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
const img_source = require("../../assets/img/mars-rover-tracks.jpg");

// TODO: use [manifest] & [photos] to dyno-gen camera labels & names

const DisplayLatestPhotosScreen = ({ navigation, route }) => {
	const { isLoading, error, data } = useLatestPhotos(route.params.rover);
	const [isVisible, setIsVisible] = useState(false);
	const lcRover = route.params.rover.toLowerCase();

	const toggleOverlay = () => setIsVisible(!isVisible);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	}, []);

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	return (
		<SafeAreaView>
			{/* <ImageBackground source={img_source}> */}
			{data && <PhotosList photos={data.latest_photos} />}
			<Overlay isVisible={isVisible} onBackdropPress={toggleOverlay}>
				{ROVER_CAMERAS[lcRover].map(camera => (
					<Text key={camera[0]}>{camera[1]}</Text>
				))}
			</Overlay>
			<View style={S.row_between}>
				<NavHomeFAB navigation={navigation} />
				<CameraFAB setIsVisible={toggleOverlay} />
			</View>
			{/* </ImageBackground> */}
		</SafeAreaView>
	);
};

export default DisplayLatestPhotosScreen;

const S = StyleSheet.create({
	row_between: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});
