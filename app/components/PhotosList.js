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
import PhotosListItem from "./PhotosListItem";

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
			<Modal transparent={true} visible={isVisible}>
				<View style={S.modal_imageBackground_container}>
					<ImageBackground
						source={modalImageSource}
						style={S.modal_imageBackground_style}
						imageStyle={S.modal_imageBackground_imageStyle}
						resizeMode='cover'
					>
						<Pressable onPress={toggleModal} style={S.modal_pressable_style}>
							<Icon color='#fff' name='compress' size={50} />
						</Pressable>
					</ImageBackground>
				</View>
			</Modal>
		</View>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	// ----------------------------
	// -- FLATLIST
	// ----------------------------
	flatList_style: {
		flex: 1,
		backgroundColor: "#222",
	},

	// ----------------------------
	// -- MODAL
	// ----------------------------
	modal_imageBackground_container: {
		alignItems: "center",
		backgroundColor: "#000a",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	modal_imageBackground_style: {
		borderColor: COLORS.backgroundLT,
		borderRadius: SIZES[5],
		borderWidth: 5,
		flex: 1,
		aspectRatio: 1,
	},
	modal_imageBackground_imageStyle: {
		borderRadius: SIZES[4],
		width: "100%",
		height: "100%",
	},
	modal_pressable_style: {
		position: "absolute",
		right: SIZES[5],
		bottom: SIZES[5],
		backgroundColor: COLORS.primary,
		borderRadius: 10,
		padding: 10,
		zIndex: 10,
	},
});
