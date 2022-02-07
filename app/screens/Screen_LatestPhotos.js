import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Img_Background from "../components/shared/Img_Background";
import Text_Title from "../components/shared/Text_Title";
import SafeAreaView from "../components/shared/SafeAreaView";
import { COLORS } from "../styles";
import Axios from "../services/mars-photo-api/axios-config";

const LatestPhotosScreen = ({ label, navigation }) => {
	const [photos, setPhotos] = useState([]);
	const type = navigation.getParam("type");
	const rover = navigation.getParam("rover");

	const getLatestPhotos = async () => {
		const res = await Axios(`/rovers/${rover}/latest_photos`);
		const latest_photos = await res.data.latest_photos;
		setPhotos(latest_photos);
	};

	useEffect(async () => {
		getLatestPhotos();
	}, []);

	console.log(">> PHOTOS SCREEN STATE >>", photos);

	return (
		<SafeAreaView>
			<Img_Background
				imgSrc={require("../../assets/img/mars-rover-tracks.jpg")}
			>
				<Text_Title>{`${rover.toUpperCase()}: ${type}`}</Text_Title>
				{photos && (
					<FlatList
						data={photos}
						keyExtractor={photo => photo.id}
						renderItem={({ item: photo }) => (
							<Image source={{ uri: photo.img_src }} style={S.img} />
						)}
						style={S.flatList}
					/>
				)}
			</Img_Background>
		</SafeAreaView>
	);
};

export default LatestPhotosScreen;

const S = StyleSheet.create({
	flatList: {
		display: "flex",
		flex: 1,
		flexDirection: "row",
	},
	img: {
		borderWidth: 5,
		borderColor: "red",
		height: 150,
		margin: 10,
		width: 150,
	},
});
