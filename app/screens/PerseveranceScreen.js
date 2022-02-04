import { StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";

const PerseveranceScreen = () => {
	return (
		<BackgroundImage
			imgSrc={require("../../assets/img/perseverance.jpg")}
		></BackgroundImage>
	);
};

export default PerseveranceScreen;

const styles = StyleSheet.create({});
