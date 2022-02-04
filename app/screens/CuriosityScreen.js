import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";

const CuriosityScreen = () => {
	return (
		<BackgroundImage
			imgSrc={require("../../assets/img/curiosity-02.jpg")}
			opacity={0.5}
		></BackgroundImage>
	);
};

export default CuriosityScreen;

const styles = StyleSheet.create({});
