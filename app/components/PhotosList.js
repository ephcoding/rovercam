import { useState } from "react";
import {
	FlatList,
	Image,
	ImageBackground,
	Modal,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Tile, Overlay } from "react-native-elements";
import { QueryCache } from "react-query";
import { COLORS, SIZES } from "../styles";
import FullScreenModal from "./shared/FullScreenModal";
import PhotosListItem from "./PhotosListItem";
import ExpandedPhotoModal from "./shared/ExpandedPhotoModal";

const PhotosList = ({ photos }) => {
	const [isVisible, setModalIsVisible] = useState(false);
	const [modalImageSource, setModalImageBackgroundSource] = useState("");

	const handlePhotoTap = imgSrc => {
		setModalIsVisible(true);
		setModalImageBackgroundSource(imgSrc);
	};
	const toggleModal = () => setModalIsVisible(!isVisible);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={photos}
				keyExtractor={photo => photo.id}
				numColumns={2}
				PlaceholderContext={<Text>FlatList Loading...</Text>}
				style={S.flatList_style}
				renderItem={({ item, index }) => {
					const imgSrc = { uri: item.img_src };

					return (
						<PhotosListItem
							expandPhoto={() => handlePhotoTap(imgSrc)}
							key={item.id}
							photoURI={imgSrc}
						/>
					);
				}}
			/>
			<ExpandedPhotoModal
				imgSource={modalImageSource}
				isVisible={isVisible}
				toggleModal={toggleModal}
			/>
		</View>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	flatList_style: {
		flex: 1,
		backgroundColor: "#222",
	},
});
