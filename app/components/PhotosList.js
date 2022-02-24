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
import { COLORS } from "../styles";

const PhotosList = ({ photos }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [overlayImgSrc, setOverlayImgSrc] = useState("");

	const displayOverlay = imgSrc => {
		setOverlayImgSrc(imgSrc);
		setIsVisible(true);
	};
	const closeOverlay = () => setIsVisible(false);

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
							style={S.pressable}
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
				fullScreen
				isVisible={isVisible}
				overlayStyle={S.overlay_overlayStyle}
			>
				<Button
					containerStyle={S.overlay_btn_containerStyle}
					icon={{
						type: "font-awesome",
						name: "home",
						color: "white",
					}}
					onPress={closeOverlay}
				/>
				<Image
					resizeMode='cover'
					source={{ uri: overlayImgSrc }}
					style={S.overlayImage_image_style}
				/>
			</Overlay>
		</View>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	flatListStyle: {
		flex: 1,
	},
	overlay_btn_containerStyle: {
		height: 56,
		position: "absolute",
		top: 0,
		right: 0,
		width: 56,
	},
	overlay_backdropStyle: {
		backgroundColor: "blue",
	},
	overlay_overlayStyle: {
		backgroundColor: "red",
		justifyContent: "center",
		position: "relative",
	},
	overlayImage_image_style: {
		// aspectRatio: 1,
		height: 150,
		width: 150,
		padding: 10,
	},
	pressable: {
		flex: 1,
	},
	photoList_image_style: {
		aspectRatio: 1,
		borderRadius: 50,
		flex: 1,
		margin: 10,
	},
});
