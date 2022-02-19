import { useEffect } from "react";
import { useQuery } from "react-query";
import {
	FlatList,
	ImageBackground,
	StyleSheet,
	Text,
	View,
	LogBox,
} from "react-native";
import { Image } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { COLORS } from "../styles";
import PhotosList from "../components/PhotosList";
import { useSearchPhotos } from "../hooks";
import { SafeAreaView } from "../components/shared";

// TODO: use [manifest] & [photos] to dyno-gen camera labels & names

const DisplayPhotosScreen = ({ navigation, route }) => {
	const { isLoading, error, data } = useSearchPhotos(
		route.params.rover,
		route.params.paramType,
		route.params.value
	);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	}, []);

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.messge}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground
				imageStyle={S.componentStyle}
				resizeMode='cover'
				source={require("../../assets/img/mars-rover-tracks.jpg")}
				style={S.imgStyle}
			>
				{data && <PhotosList photos={data.photos} />}
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DisplayPhotosScreen;

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
