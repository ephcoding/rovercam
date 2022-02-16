import { useEffect } from "react";
import { useQuery } from "react-query";
import {
	FlatList,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	LogBox,
} from "react-native";
import { Image } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { COLORS } from "../styles";
import { useLatestPhotos } from "../hooks/useFetchLatestPhotos";
import PhotosList from "../components/PhotosList";

// TODO: use [manifest] & [photos] to dyno-gen camera labels & names

const DisplayLatestPhotosScreen = ({ navigation, route }) => {
	const { isLoading, error, data } = useLatestPhotos(route.params.rover);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	}, []);

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.componentStyle}
				resizeMode='cover'
				source={require("../../assets/img/mars-rover-tracks.jpg")}
				style={S.imgStyle}
			>
				{data && <PhotosList photos={data.latest_photos} />}
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
	imgStyle: {
		flex: 1,
	},
	safeAreaView: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});
