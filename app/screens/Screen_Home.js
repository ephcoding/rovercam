// >> CORE Components
import { Button, Pressable, SafeAreaView, StyleSheet } from "react-native";
// >> MDX Components
import Img_Background from "../components/mdx-core/Img_Background";
import List_NavigationBtns from "../components/mdx-core/List_NavigationBtns";
import Text_Body from "../components/mdx-core/Text_Body";
import Text_Title from "../components/mdx-core/Text_Title";
import Text_SubTitle from "../components/mdx-core/Text_SubTitle";
import View_ContentWrapper from "../components/mdx-core/View_ContentWrapper";
// >> Utils
import { ROVER_NAMES } from "../site-data";
// >> Styles
import { COLORS } from "../styles";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 */

const Screen_Home = ({ navigation }) => {
	const handleOnPress = rover => {
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
						screen='Rover'
						styleMods={S.listMods}
					/>
				</View_ContentWrapper>
			</Img_Background>
		</SafeAreaView>
	);
};

export default Screen_Home;

const S = StyleSheet.create({
	listMods: {
		justifyContent: "space-evenly",
	},
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});
