import {
	Button,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
} from "react-native";
import BackgroundImage from "../components/mdx-core/ImgBackground";
import NavBtnList from "../components/NavBtnList";
import ScreenTitle from "../components/mdx-core/TextTitle";
import { ROVER_NAMES } from "../constants/rovers";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 */

const HomeScreen = ({ navigation }) => {
	const handleOnPress = rover => {
		// console.log(navigation.navigate("Rover", { rover: "Curiosity" }));
		navigation.navigate("Rover", { rover: rover });
	};

	return (
		<SafeAreaView style={S.safeArea}>
			<BackgroundImage
				opacity={0.5}
				imgSrc={require("../../assets/mars-glowing.jpg")}
			>
				<Button title='Test Nav' onPress={handleOnPress} />

				<ScreenTitle text='ROVERCAM' />

				<Text style={{ color: "#fff" }}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</Text>

				<NavBtnList
					btnLabels={ROVER_NAMES}
					btnStyles={S.navBtn}
					labelStyles={S.navBtnLabel}
					listStyles={S.navBtns}
					navFunc={handleOnPress}
				/>
			</BackgroundImage>
		</SafeAreaView>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	navBtn: {
		borderColor: "#fff",
		borderRadius: 10,
		borderWidth: 2,
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 150,
	},
	navBtnLabel: {
		color: "#fff",
		alignSelf: "center",
	},
	navBtns: {
		alignItems: "center",
		flex: 1,
		justifyContent: "space-evenly",
	},
	safeArea: {
		backgroundColor: "#000",
		flex: 1,
	},
});
