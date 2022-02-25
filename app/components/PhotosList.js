import { useState } from "react";
import {
	FlatList,
	Image,
	ImageBackground,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Tile, Overlay } from "react-native-elements";
import { QueryCache } from "react-query";
import { COLORS, SIZES } from "../styles";
import Photo from "./Photo";

const PhotosList = ({ photos }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [modalImgBgSrc, setModalImgBgSrc] = useState("");

	const displayZoomModal = imgSrc => {
		setIsVisible(true);
		setModalImgBgSrc(imgSrc);
	};
	const toggleModal = () => setIsVisible(!isVisible);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={photos}
				keyExtractor={photo => photo.id}
				numColumns={2}
				PlaceholderContext={<Text>FlatList Loading...</Text>}
				style={S.flatListStyle}
				renderItem={({ item, index }) => {
					return (
						<Photo
							displayZoomModal={() => displayZoomModal({ uri: item.img_src })}
							key={item.id}
							photoURI={{ uri: item.img_src }}
						/>
					);
				}}
			/>
			<Modal visible={isVisible}>
				<ImageBackground
					resizeMode='cover'
					source={modalImgBgSrc}
					style={S.modal_imgBg_style}
				>
					<Icon.Button
						color='#f60'
						name='compress'
						onPress={toggleModal}
						size={50}
					/>
				</ImageBackground>
			</Modal>
			{/* <Overlay
				backdropStyle={S.overlay_backdropStyle}
				// fullScreen
				isVisible={isVisible}
				onBackdropPress={toggleModal}
				overlayStyle={S.overlay_overlayStyle}
			>
				<ImageBackground
					resizeMode='cover'
					source={{ uri: zoomedPhotoSource }}
					style={S.overlayImage_image_style}
				>
					<Button
						containerStyle={S.overlayClostBtn_btn_containerStyle}
						icon={{
							type: "font-awesome",
							name: "home",
							color: "white",
						}}
						onPress={toggleModal}
					/>
				</ImageBackground>
			</Overlay> */}
		</View>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	// -- FLATLIST --

	flatListStyle: {
		flex: 1,
		backgroundColor: "#222",
	},

	// -- PHOTO TILE --

	photo_tile_containerStyle: {
		borderColor: "red",
		backgroundColor: "red",
		borderWidth: SIZES[0],
		flex: 1,
		marginHorizontal: SIZES[2],
		marginVertical: SIZES[2],
		height: 150,
		padding: 5,
	},
	photo_tile_imageContainerStyle: {
		aspectRatio: 1,
		borderColor: "blue",
		// backgroundColor: "blue",
		borderWidth: SIZES[0],
		height: "100%",
		width: "100%",
	},
	photo_tile_overlayContainerStyle: {
		borderWidth: SIZES[0],
		borderColor: "limegreen",
		// backgroundColor: "limegreen",
		padding: 0,
		// height: "100%",
		// width: "100%",
	},
	photo_tile_iconContainerStyle: {
		borderWidth: SIZES[0],
		borderColor: "yellow",
		backgroundColor: "yellow",
	},

	// -- EXPANDED PHOTO MODAL --

	modal_imgBg_style: {
		alignItems: "center",
		aspectRatio: 1,
		justifyContent: "center",
		// height: "100%",
		// width: "100%",
	},
});
