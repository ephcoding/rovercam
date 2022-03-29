import { useEffect } from "react";
import { useQueries, QueryClient } from "react-query";
import { Image, LogBox, Text, View, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
// -----
import { SIZE } from "../theme";
import { NAMES } from "../constants";
import RoverView from "../components/RoverView";
import SafeAreaView from "../components/SafeAreaView";
import ImageBackground from "../components/ImageBackground";
import { fetchManifest, fetchLatestPhotos } from "../mars-photos-api/requests";
// -----
const img_source = require("../../assets/img/mars-glowing.jpg");

const HomeScreen = ({ navigation }) => {
	const rovers = useQueries(
		Object.values(NAMES).map(rover => {
			return {
				queryKey: ["manifest", rover],
				queryFn: () => fetchManifest(rover),
			};
		})
	);
	const latestPhotos = useQueries(
		Object.values(NAMES).map(rover => {
			return {
				queryKey: ["latestPhotos", rover],
				queryFn: () => fetchLatestPhotos(rover),
			};
		})
	);

	useEffect(() => {
		LogBox.ignoreLogs(["Setting a timer"]);
	});

	return (
		<SafeAreaView>
			{/* <ImageBackground source={img_source}> */}
			{/* <View style={S.row_wrap_between}> */}
			<PagerView>
				{Object.values(NAMES).map(rover => (
					<RoverView key={rover} navigation={navigation} rover={rover} />
				))}
			</PagerView>

			{/* </View> */}
			{/* </ImageBackground> */}
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
