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
import Axios from "../services/mars-photo-api/axios-config";

// TODO: use [manifest] & [photos] to dyno-gen camera labels & names

const DisplayPhotosScreen = ({ route, navigation }) => {
	const rover = route.params.rover;
	const {
		isLoading,
		error,
		data: response,
	} = useQuery("latestPhotos", async () => {
		return await Axios.get(`/rovers/${rover}/latest_photos`);
	});

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>`>> ERROR >>: ${error}`</Text>;

	// console.log(response.data.latest_photos[0]);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	}, []);

	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				source={require("../../assets/img/mars-rover-tracks.jpg")}
				style={S.imgBg}
			>
				<FlatList
					data={response.data.latest_photos}
					keyExtractor={img => img.id}
					PlaceholderContext={<Text>Loading...</Text>}
					renderItem={({ item, index }) => (
						<Image
							resizeMode='cover'
							source={{ uri: item.img_src }}
							style={S.listImgStyle}
						/>
					)}
					style={S.flatListStyle}
				/>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DisplayPhotosScreen;

const S = StyleSheet.create({
	listImgStyle: {
		aspectRatio: 1,
		width: "100%",
		flex: 1,
	},
	flatListStyle: {
		flex: 1,
	},
	imgBg: {
		flex: 1,
	},
	imageStyle: {
		opacity: 0.3,
	},
	safeAreaView: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});
