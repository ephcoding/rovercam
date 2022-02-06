import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Img_Background from "../components/mdx-core/Img_Background";
import Text_Title from "../components/mdx-core/Text_Title";
import { COLORS } from "../styles";

const Screen_CameraPhotos = ({ navigation }) => {
	const camera = navigation.getParam("payload");

	console.log(">> PHOTOS SCREEN >>", camera);

	return (
		<SafeAreaView style={S.safeArea}>
			<Img_Background
				imgSrc={require("../../assets/img/mars-rover-tracks.jpg")}
			>
				<Text_Title>CAMERA NAME GOES HERE</Text_Title>
			</Img_Background>
		</SafeAreaView>
	);
};

export default Screen_CameraPhotos;

const S = StyleSheet.create({
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});
