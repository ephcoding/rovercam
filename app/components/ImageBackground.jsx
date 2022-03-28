import { ImageBackground as RNImageBackground, StyleSheet } from "react-native";
import { COLORS, SIZE } from "../theme";

const ImageBackground = ({ children, source }) => {
	return (
		<RNImageBackground
			imageStyle={S.imgBg_imageStyle}
			resizeMode='cover'
			source={source}
			style={S.imgBg_style}
		>
			{children}
		</RNImageBackground>
	);
};

const S = StyleSheet.create({
	imgBg_imageStyle: {
		flex: 1,
	},
	imgBg_style: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
		padding: SIZE[3],
	},
});

export default ImageBackground;
