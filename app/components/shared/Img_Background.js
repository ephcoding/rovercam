import { Image, Text, View } from "react-native";
import { COLORS } from "../../styles";

const Img_Background = ({
	bgColor = COLORS.backgroundDK,
	children,
	imgSrc,
	opacity = 0.5,
}) => {
	return (
		<View style={{ backgroundColor: bgColor, flex: 1 }}>
			<Image
				source={imgSrc}
				style={{
					height: "100%",
					opacity: opacity,
					position: "absolute",
					width: "100%",
					zIndex: 0,
				}}
			/>
			{children}
		</View>
	);
};

export default Img_Background;
