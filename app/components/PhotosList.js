import { useState } from "react";
import {
	FlatList,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Button, Overlay } from "react-native-elements";
import { QueryCache } from "react-query";
import { COLORS, SIZES } from "../styles";
import { ImageBackground } from "./shared/ImageBackground";

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
				renderItem={({ item, index }) => {
					return (
						<Pressable
							onPress={() => displayOverlay(item.img_src)}
							style={S.photo_pressable_style}
						>
							<Image
								resizeMode='cover'
								source={{ uri: item.img_src }}
								style={S.photoList_image_style}
							/>
							{/* <Text>{item.img_src}</Text> */}
						</Pressable>
					);
				}}
				style={S.flatListStyle}
			/>
			<Overlay
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
				{/* <Image
					resizeMode='cover'
					source={{ uri: overlayImgSrc }}
					style={S.overlayImage_image_style}
				/> */}
				<ImageBackground resizeMode='cover' source={{ uri: overlayImgSrc }} />
			</Overlay>
		</View>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	flatListStyle: {
		flex: 1,
	},
	overlay_backdropStyle: {
		backgroundColor: "blue",
	},
	overlay_overlayStyle: {
		backgroundColor: "red",
		height: "50%",
		// justifyContent: "center",
		width: "100%",
	},
	overlayImage_image_style: {
		aspectRatio: 1,
		// width: "100%",
	},
	overlayClostBtn_btn_containerStyle: {
		height: 56,
		position: "absolute",
		top: 0,
		right: 0,
		width: 56,
	},
	photo_pressable_style: {
		flex: 1,
	},
	photoList_image_style: {
		aspectRatio: 1,
		borderRadius: 50,
		flex: 1,
		margin: SIZES[3],
	},
});
