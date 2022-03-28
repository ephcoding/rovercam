import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/_shared";
import { PHOTO_SEARCH_BTNS, IMG_PATHS } from "../constants/rovers";
import { useFetchManifest } from "../hooks";
import { useEffect } from "react";
import { Image, FlatList, StyleSheet, View } from "react-native";
import { Button, Card, FAB, Text } from "react-native-elements";
import { COLORS, SIZES } from "../theme";
// ----
import RoverCamerasList from "../components/RoverCamerasList";
import RoverStats from "../components/RoverStats";

export default RoverInfoScreen = ({ navigation, route }) => {
	const { rover } = route.params;
	const { isLoading, error, data } = useFetchManifest(rover);
	const img_source = IMG_PATHS[rover.toLowerCase()];

	const handleOnPress = (screen, query_param = "") => {
		if (screen === "DisplayPhotos") {
			navigation.navigate("DisplayPhotos", {
				rover,
				manifest_photos: data.photo_manifest.photos,
				query_param,
				param_value: undefined,
			});
		}
		if (screen === "DatePicker" || screen === "SOLPicker") {
			navigation.navigate(screen, {
				rover,
				manifest_photos: data.photo_manifest.photos,
			});
		}
	};

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.message}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground>
				{/* <ImageBackground source={img_source}></ImageBackground> */}

				<RoverStats data={data} />

				{/* TODO: create OptionButtonsList component
						USE FOR: RoverPhotoSearchBtn & RoverCameraList */}
				<View style={S.searchBtns_view_style}>
					{PHOTO_SEARCH_BTNS.map(button => (
						<View key={button.title} style={S.searchBtnWrapper_view_style}>
							<Button
								buttonStyle={S.searchBtn_btn_btnStyle}
								containerStyle={S.searchBtn_btn_containerStyle}
								onPress={() => handleOnPress(button.screen, button.query_param)}
								title={button.title}
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
