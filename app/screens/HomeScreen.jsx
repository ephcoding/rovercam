import { useEffect } from "react";
import { ImageBackground, SafeAreaView } from "../components/_shared";
import { ROVER_NAMES } from "../constants";
import { LogBox, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useQuery, QueryClient } from "react-query";
import { SIZES } from "../theme";
import {
	fetchManifestAll,
	fetchManifest,
} from "../mars-photos-api/mars-rover-api";
import RoverCard from "../components/RoverCard";
const img_source = require("../../assets/img/mars-glowing.jpg");

export default HomeScreen = ({ navigation }) => {
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
					{Object.values(ROVER_NAMES).map(rover => (
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
