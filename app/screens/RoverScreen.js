import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { SEARCH_TYPE_BTNS, IMG_PATHS } from "../constants/rovers";
import { useFetchManifest } from "../hooks";
import { useEffect } from "react";
import { Image, FlatList, StyleSheet, View } from "react-native";
import { Button, Card, FAB, Text } from "react-native-elements";
import { COLORS, SIZES } from "../styles";
// ----
import RoverCamerasList from "../components/RoverCamerasList";
import RoverCard from "../components/RoverCard";

const RoverInfoScreen = ({ navigation, route }) => {
	// TODO: instead of passing photos as route.param, just call useFetchManifest() at <Picker>Screen
	const { rover } = route.params;
	const { isLoading, error, data } = useFetchManifest(rover);
	const img_source = IMG_PATHS[rover.toLowerCase()];

	const handleOnPress = (screen, param = "") =>
		navigation.navigate(screen, {
			rover,
			photos: data.photo_manifest.photos,
		});

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.message}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground
			// source={img_source}
			>
				<ImageBackground source={img_source}></ImageBackground>

				<View style={S.roverStats_view_style}>
					<View style={S.roverStat_view_style}>
						<Text h3 style={{ color: COLORS.primary }}>
							Mission Status:
						</Text>
						<Text
							h3
							style={{
								color:
									data.photo_manifest.status === "active" ? "#0f0" : "#888",
							}}
						>
							{data && data.photo_manifest.status}
						</Text>
					</View>
					<View style={S.roverStat_view_style}>
						<Text h3 style={{ color: COLORS.primary }}>
							Launched:
						</Text>
						<Text style={{ fontSize: SIZES[5] }}>
							{data && data.photo_manifest.launch_date}
						</Text>
					</View>
					<View style={S.roverStat_view_style}>
						<Text h3 style={{ color: COLORS.primary }}>
							Landed:
						</Text>
						<Text style={{ fontSize: SIZES[5] }}>
							{data && data.photo_manifest.landing_date}
						</Text>
					</View>
					<View style={S.roverStat_view_style}>
						<Text h3 style={{ color: COLORS.primary }}>
							Last Photo:
						</Text>
						<Text style={{ fontSize: SIZES[5] }}>
							{data && data.photo_manifest.max_date}
						</Text>
					</View>
					<View style={S.roverStat_view_style}>
						<Text h3 style={{ color: COLORS.primary }}>
							Photos:
						</Text>
						<Text style={{ fontSize: SIZES[5] }}>
							{data && data.photo_manifest.total_photos}
						</Text>
					</View>
				</View>

				<View style={S.searchBtns_view_style}>
					{SEARCH_TYPE_BTNS.map(param => (
						<View key={param.title} style={S.searchBtnWrapper_view_style}>
							<Button
								buttonStyle={S.searchBtn_btn_btnStyle}
								containerStyle={S.searchBtn_btn_containerStyle}
								onPress={() => handleOnPress(param.screen, param.query_param)}
								title={param.title}
								titleStyle={{ fontSize: SIZES[4] }}
							/>
						</View>
					))}
				</View>

				<View style={S.fabWrapper_view_style}>
					<NavHomeFAB navigation={navigation} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default RoverInfoScreen;

const S = StyleSheet.create({
	roverStats_view_style: {
		flex: 1,
	},
	roverStat_view_style: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	searchBtns_view_style: {
		flex: 1,
		justifyContent: "space-around",
	},
	searchBtnWrapper_view_style: {
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
	},
	searchBtn_btn_btnStyle: {
		backgroundColor: COLORS.secondary,
		borderColor: COLORS.backgroundLT,
		borderWidth: SIZES[0],
		marginLeft: SIZES[3],
	},
	searchBtn_btn_containerStyle: {
		width: "50%",
	},
	fabWrapper_view_style: {
		paddingVertical: SIZES[4],
	},
});
