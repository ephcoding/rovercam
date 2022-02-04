import { StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import { CURIOSITY, CAMERAS } from "../constants/rovers";

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
