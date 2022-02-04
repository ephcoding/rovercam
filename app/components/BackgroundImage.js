import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BackgroundImage = ({ children, opacity, imgSrc }) => {
	return (
		<View style={{ flex: 1 }}>
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

const styles = StyleSheet.create({});
