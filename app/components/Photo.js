import { ImageBackground, Pressable, StyleSheet, View } from "react-native";

const Photo = ({ displayOverlay, photoURI }) => {
	return (
		<Pressable onPress={displayOverlay} style={S.pressable_style}>
			<ImageBackground source={photoURI} style={S.photo_imgBg_style} />
		</Pressable>
	);
};

export default Photo;

const S = StyleSheet.create({
	pressable_style: {
		flex: 1,
		backgroundColor: "blue",
		height: 150,
		margin: 10,
	},
	photo_imgBg_style: {
		height: "100%",
		width: "100%",
	},
});
