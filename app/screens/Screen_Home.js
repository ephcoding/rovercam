import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import NavButton from "../components/shared/Btn_Navigation";
import Img_Background from "../components/shared/Img_Background";
import SafeAreaView from "../components/shared/SafeAreaView";
import Text_Body from "../components/shared/Text_Body";
import Text_Title from "../components/shared/Text_Title";
import Text_SubTitle from "../components/shared/Text_SubTitle";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";
import { NAMES as ROVERS } from "../constants";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover
 */

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
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

					<FlatList
						data={Object.values(ROVERS)}
						keyExtractor={rover => rover}
						renderItem={({ item: rover }) => (
							<NavButton label={rover} navParams={{ rover }} screen='Rover' />
						)}
						style={S.flatList}
					/>
				</View_ContentWrapper>
			</Img_Background>
		</SafeAreaView>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	flatList: {
		flex: 1,
	},
});
