import { StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import { PERSEVERANCE, CAMERAS } from "../constants/rovers";

const PerseveranceScreen = () => {
	return (
		<BackgroundImage
			imgSrc={require("../../assets/img/perseverance.jpg")}
		></BackgroundImage>
	);
};

export default PerseveranceScreen;

const styles = StyleSheet.create({});
