import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import NavButton from "../components/shared/Btn_Navigation";
import Img_Background from "../components/shared/Img_Background";
import SafeAreaView from "../components/shared/SafeAreaView";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";
import { ROVER_NAMES } from "../constants/rovers";
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
					{/* <Text h1>ROVERCAM</Text>
					<Text h3>Mars Photos. Rover Style.</Text>

					<Text>
						Explore photos of the Red Planet through the eyes of the Mars
						Rovers: Curiosity, Opportunity, Perseverance and Spirit.
					</Text> */}

					<FlatList
						data={Object.values(ROVER_NAMES)}
						keyExtractor={roverName => roverName}
						renderItem={({ item: roverName }) => (
							// <NavButton label={roverName} navParams={{ roverName }} screen='Rover' />
							<Button
								onPress={() => navigation.navigate("Rover")}
								title={roverName}
							/>
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
