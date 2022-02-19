import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { FlatList, StyleSheet, Text, View, LogBox } from "react-native";
import { FAB, Image } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { COLORS } from "../styles";
import { useLatestPhotos } from "../hooks/useFetchLatestPhotos";
import PhotosList from "../components/PhotosList";
const img_source = require("../../assets/img/mars-rover-tracks.jpg");

// TODO: use [manifest] & [photos] to dyno-gen camera labels & names

const DisplayLatestPhotosScreen = ({ navigation, route }) => {
	const { isLoading, error, data } = useLatestPhotos(route.params.rover);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	}, []);

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				{data && <PhotosList photos={data.latest_photos} />}
				<NavHomeFAB navigation={navigation} />
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DisplayLatestPhotosScreen;

const S = StyleSheet.create({
	componentStyle: {
		flex: 1,
		opacity: 0.4,
	},
});
