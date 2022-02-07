import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Img_Background from "../components/shared/Img_Background";
import Text_Title from "../components/shared/Text_Title";
import { COLORS } from "../styles";
import Axios from "../services/mars-photo-api/axios-config";

const PhotosScreen = ({ navigation }) => {
	const [photos, setPhotos] = useState();
	const searchType = navigation.getParam("type");

	const getCameraPhotos = async () => {
		try {
			const res = await Axios.get(`/rovers/${rover}/photos?camera=${cameraSH}`);
			const photos = await res.data.photos;
			console.clear();
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCameraPhotos();
	});

	return (
		<SafeAreaView style={S.safeArea}>
			<Img_Background
				imgSrc={require("../../assets/img/mars-rover-tracks.jpg")}
			>
				<Text_Title>{cameraName}</Text_Title>
				{/* {photos} */}
			</Img_Background>
		</SafeAreaView>
	);
};

export default PhotosScreen;

const S = StyleSheet.create({
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});
