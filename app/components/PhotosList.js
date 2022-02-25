import { useState } from "react";
import {
	FlatList,
	Image,
	ImageBackground,
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
	const [overlayImgSrc, setOverlayImgSrc] = useState("");

	const displayOverlay = imgSrc => {
		setOverlayImgSrc(imgSrc);
		setIsVisible(true);
	};
	const toggleOverlayIsVisible = () => setIsVisible(!isVisible);

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
						<Photo onPress={displayOverlay} photoURI={{ uri: item.img_src }} />
					);
				}}
			/>
			{/* <Overlay
				backdropStyle={S.overlay_backdropStyle}
				// fullScreen
				isVisible={isVisible}
				onBackdropPress={toggleOverlayIsVisible}
				overlayStyle={S.overlay_overlayStyle}
			>
				<Button
					containerStyle={S.overlayClostBtn_btn_containerStyle}
					icon={{
						type: "font-awesome",
						name: "home",
						color: "white",
					}}
					onPress={toggleOverlayIsVisible}
				/>
				<Image
					resizeMode='cover'
					source={{ uri: overlayImgSrc }}
					style={S.overlayImage_image_style}
				/>
				<ImageBackground resizeMode='cover' source={{ uri: overlayImgSrc }} />
			</Overlay> */}
		</View>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	// -- FLATLIST --

	flatListStyle: {
		flex: 1,
		backgroundColor: "red",
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
});
