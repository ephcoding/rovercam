import { StyleSheet, View } from "react-native";
import NavButton from "../components/shared/Btn_Navigation";
import Img_Background from "../components/shared/Img_Background";
import SafeAreaView from "../components/shared/SafeAreaView";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";
import { useManifests } from "../hooks/use-manifests";
import { ROVER_NAMES } from "../constants/rovers";
// -- REACT NATIVE ELEMENTS
import { Card, Header, Text } from "react-native-elements";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover
 */

const HomeScreen = ({ navigation }) => {
	const res = useManifests();
	console.log(">> MANIFESTS >>", res);

	// const roverCards = Object.values(ROVER_NAMES).map(roverName => (
	// 	<Button
	// 		key={roverName}
	// 		title={roverName}
	// 		onPress={() => navigation.navigate("Rover", { rover: roverName })}
	// 	/>
	// ));

	return (
		<SafeAreaView>
			<Img_Background
				opacity={0.9}
				imgSrc={require("../../assets/img/mars-glowing.jpg")}
			>
				<View_ContentWrapper>
					{/* <View style={S.roverCards}>{roverCards}</View> */}
				</View_ContentWrapper>
			</Img_Background>
		</SafeAreaView>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	roverCards: {
		flex: 1,
		justifyContent: "space-evenly",
	},
});
