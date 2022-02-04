import { StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import { SPIRIT, CAMERAS } from "../constants/rovers";

const SpiritScreen = () => {
	return (
		<BackgroundImage
			imgSrc={require("../../assets/img/spirit.jpg")}
		></BackgroundImage>
	);
};

export default SpiritScreen;

const styles = StyleSheet.create({});
