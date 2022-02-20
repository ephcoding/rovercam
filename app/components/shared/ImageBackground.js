import { ImageBackground as RNImageBackground, StyleSheet } from "react-native";
import { SIZES } from "../../styles";

export const ImageBackground = ({ children, source }) => {
	return (
		<RNImageBackground
			imageStyle={S.imageStyle}
			resizeMode='cover'
			source={source}
			style={S.style}
		>
			{children}
		</RNImageBackground>
	);
};

const S = StyleSheet.create({
	imageStyle: {
		flex: 1,
		opacity: 0.3,
	},
	style: {
		flex: 1,
		padding: SIZES[3],
	},
});
