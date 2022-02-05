import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImgBackground from "../components/mdx-core/Img_Background";
import TextTitle from "../components/mdx-core/Text_Title";

const Screen_CameraPhotos = () => {
	return (
		<SafeAreaView>
			<ImgBackground imgSrc={require("../../assets/mars-rover-tracks.jpg")}>
				<TextTitle>CAMERA NAME GOES HERE</TextTitle>
			</ImgBackground>
		</SafeAreaView>
	);
};

export default Screen_CameraPhotos;

const styles = StyleSheet.create({});
