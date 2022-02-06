import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Img_Background from "../components/mdx-core/Img_Background";
import Text_Title from "../components/mdx-core/Text_Title";

const Screen_CameraPhotos = () => {
	return (
		<SafeAreaView>
			<Img_Background
				imgSrc={require("../../assets/img/mars-rover-tracks.jpg")}
			>
				<Text_Title>CAMERA NAME GOES HERE</Text_Title>
			</Img_Background>
		</SafeAreaView>
	);
};

export default Screen_CameraPhotos;

const styles = StyleSheet.create({});
