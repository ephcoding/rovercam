import { Image, Text, View } from "react-native";
import React from "react";

const BackgroundImage = ({
	bgColor = "#000",
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

export default BackgroundImage;
