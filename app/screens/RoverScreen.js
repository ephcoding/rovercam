import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { SEARCH_PARAMS, IMG_PATHS } from "../constants/rovers";
import { useFetchManifest } from "../hooks";
import { Image, FlatList, StyleSheet, View } from "react-native";
import { Button, Card, FAB, Text } from "react-native-elements";
import { COLORS, SIZES } from "../styles";
// ----
import List_Cameras from "../components/List_Cameras";
import NavButton from "../components/shared/Btn_Navigation";
import RoverContext from "../context/rover-context";
import RoverCard from "../components/RoverCard";
import Text_Title from "../components/shared/Text_Title";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";

const RoverInfoScreen = ({ navigation, route }) => {
	const { data } = useFetchManifest("curiosity");
	// console.log(">> RoverInfoScreen >>: \n", data);
	const { rover } = route.params;
	const img_source = IMG_PATHS[rover.toLowerCase()];

	const handleOnPress = screen => navigation.navigate(screen, { rover: rover });

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				<Text h1>{rover.toUpperCase()}</Text>

				<View>
					<Text>Status:</Text>
					<Text>Launch Date:</Text>
					<Text>Landing Date:</Text>
					<Text>Last Active SOL:</Text>
					<Text>Last Active Earth Date:</Text>
					<Text>Photo Count:</Text>
				</View>

				<View style={S.row_wrap_between}>
					{SEARCH_PARAMS.map(btn => (
						<Button
							buttonStyle={S.btnStyle}
							key={btn.title}
							onPress={() => handleOnPress(btn.screen)}
							title={btn.title}
						/>
					))}
				</View>

				<NavHomeFAB navigation={navigation} />
			</ImageBackground>
		</SafeAreaView>
	);
};

export default RoverInfoScreen;

const S = StyleSheet.create({
	btnStyle: {
		minWidth: "40%",
	},
	row_wrap_between: {
		alignContent: "center",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
});
