import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { COLORS, SIZE } from "../theme";

const PhotosListItem = ({ expandPhoto, photoObj }) => {
	const { camera, img_src } = photoObj;

	return (
		<Pressable onPress={expandPhoto} style={S.pressable_style}>
			<ImageBackground source={{ uri: img_src }} style={S.photo_imgBg_style}>
				<View style={S.label_view}>
					<Text style={S.label_text}>{camera.name}</Text>
				</View>
			</ImageBackground>
		</Pressable>
	);
};

export default PhotosListItem;

const S = StyleSheet.create({
	pressable_style: {
		flex: 1,
		backgroundColor: "blue",
		height: 150,
		margin: 10,
	},
	photo_imgBg_style: {
		height: "100%",
		justifyContent: "flex-end",
		width: "100%",
	},
	label_text: {
		color: COLORS.textLT,
		fontSize: SIZE[3],
		fontWeight: "bold",
		textAlign: "center",
	},
	label_view: {
		// alignSelf: "flex-start",
		backgroundColor: "#0009",
		// borderTopRightRadius: SIZES[2],
		// borderBottomRightRadius: SIZES[2],
		// marginBottom: SIZES[2],
		paddingHorizontal: SIZE[2],
		paddingVertical: SIZE[1],
	},
});
