import { useEffect } from "react";
import { Text } from "react-native-elements";
import { useQuery, QueryClient } from "react-query";
import { LogBox, View, StyleSheet } from "react-native";
// -----
import { SIZE } from "../theme";
import { NAMES } from "../constants";
import RoverCard from "../components/RoverCard";
import SafeAreaView from "../components/SafeAreaView";
import ImageBackground from "../components/ImageBackground";
// -----
const img_source = require("../../assets/img/mars-glowing.jpg");

const HomeScreen = ({ navigation }) => {
	// const { isLoading, error, data } = useQuery("curiosity");

	// console.log("isLoading", isLoading);
	// console.log("error", error);
	// console.log(data);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	});

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				<View style={S.row_wrap_between}>
					{Object.values(NAMES).map(rover => (
						<RoverCard key={rover} navigation={navigation} rover={rover} />
					))}
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

const S = StyleSheet.create({
	row_wrap_between: {
		alignContent: "center",
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
});

export default HomeScreen;
