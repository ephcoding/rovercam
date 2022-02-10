import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import NavButton from "../components/shared/Btn_Navigation";
import Img_Background from "../components/shared/Img_Background";
import SafeAreaView from "../components/shared/SafeAreaView";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";
import { NAMES as ROVERS } from "../constants";
// -- REACT NATIVE ELEMENTS
import { Button, Header, Text } from "react-native-elements";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover
 */

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Img_Background
				opacity={0.9}
				imgSrc={require("../../assets/img/mars-glowing.jpg")}
			>
				<View_ContentWrapper>
					<Text h1>ROVERCAM</Text>
					<Text h3>Mars Photos. Rover Style.</Text>

					<Text>
						Explore photos of the Red Planet through the eyes of the Mars
						Rovers: Curiosity, Opportunity, Perseverance and Spirit.
					</Text>

					<Button title='RAISED' />
					<Button disabled title='DISABLED' />

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
