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
								style={S.thumbImgStyle}
							/>
							{/* <Text>{item.img_src}</Text> */}
						</Pressable>
					);
				}}
				style={S.flatListStyle}
			/>
			<Overlay isVisible={isVisible} overlayStyle={S.overlayStyle}>
				<Button
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
					style={S.overlayImgStyle}
				/>
			</Overlay>
		</View>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	flatListStyle: {
		// backgroundColor: "#0f0",
		flex: 1,
	},
	overlayStyle: {
		height: "100%",
		justifyContent: "center",
		width: "100%",
	},
	overlayImgStyle: {
		aspectRatio: 1,
	},
	pressable: {
		flex: 1,
	},
	thumbImgStyle: {
		aspectRatio: 1,
		borderRadius: 50,
		flex: 1,
		margin: 10,
	},
});
