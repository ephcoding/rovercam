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
import { COLORS, SIZE } from "../theme";
import FullScreenModal from ".//FullScreenModal";
import PhotosListItem from "./PhotosListItem";
import ExpandedPhotoModal from ".//ExpandedPhotoModal";

const PhotosList = ({ photos }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [imgSource, setModalImageSource] = useState("");

	const handlePhotoTap = imgSrc => {
		setModalImageSource(imgSrc);
		setIsVisible(true);
	};
	const toggleModal = () => setIsVisible(!isVisible);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={photos}
				keyExtractor={photo => photo.id}
				numColumns={2}
				PlaceholderContext={<Text>FlatList Loading...</Text>}
				style={S.flatList_style}
				renderItem={({ item, index }) => {
					const photoURI = { uri: item.img_src };

					return (
						<PhotosListItem
							expandPhoto={() => handlePhotoTap(photoURI)}
							key={item.id}
							photoObj={item}
						/>
					);
				}}
			/>

			<ExpandedPhotoModal
				imgSource={imgSource}
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
