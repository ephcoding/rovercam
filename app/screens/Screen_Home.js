import { Button, Pressable, SafeAreaView, StyleSheet } from "react-native";
import Img_Background from "../components/mdx-core/Img_Background";
import List_NavigationBtns from "../components/List_NavigationBtns";
import Text_Body from "../components/mdx-core/Text_Body";
import Text_Title from "../components/mdx-core/Text_Title";
import Text_SubTitle from "../components/mdx-core/Text_SubTitle";
import View_ContentWrapper from "../components/mdx-core/View_ContentWrapper";
import { ROVER_NAMES } from "../site-data";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 */

const Screen_Home = ({ navigation }) => {
	const handleOnPress = rover => {
		// console.log(navigation.navigate("Rover", { rover: "Curiosity" }));
		navigation.navigate("Rover", { rover: rover });
	};

	return (
		<SafeAreaView style={S.safeArea}>
			<Img_Background
				opacity={0.5}
				imgSrc={require("../../assets/img/mars-glowing.jpg")}
			>
				<View_ContentWrapper>
					<Text_Title>ROVERCAM</Text_Title>
					<Text_SubTitle>Sub Title</Text_SubTitle>

					<Text_Body>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s.
					</Text_Body>

					<List_NavigationBtns
						btnLabels={ROVER_NAMES}
						btnStyles={S.navBtn}
						labelStyles={S.navBtnLabel}
						listStyles={S.navBtns}
						navFunc={handleOnPress}
					/>
				</View_ContentWrapper>
			</Img_Background>
		</SafeAreaView>
	);
};

export default Screen_Home;

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
