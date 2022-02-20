import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { SEARCH_PARAMS, IMG_PATHS } from "../constants/rovers";
import { useFetchManifest } from "../hooks";
import { useEffect } from "react";
import { Image, FlatList, StyleSheet, View } from "react-native";
import { Button, Card, FAB, Text } from "react-native-elements";
import { COLORS, SIZES } from "../styles";
// ----
import RoverCamerasList from "../components/RoverCamerasList";
import RoverCard from "../components/RoverCard";

const RoverInfoScreen = ({ navigation, route }) => {
	const { rover } = route.params;
	const { isLoading, error, data } = useFetchManifest(rover);
	const img_source = IMG_PATHS[rover.toLowerCase()];

	const handleOnPress = (screen, param = "") =>
		navigation.navigate(screen, { rover, photos: data.photo_manifest.photos });

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>ERROR: {error.message}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				<View>
					<View style={S.row_nowrap_between}>
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
					<View style={S.row_nowrap_between}>
						<Text h3 style={{ color: COLORS.primary }}>
							Launched:
						</Text>
						<Text style={{ fontSize: SIZES[5] }}>
							{data && data.photo_manifest.launch_date}
						</Text>
					</View>
					<View style={S.row_nowrap_between}>
						<Text h3 style={{ color: COLORS.primary }}>
							Landed:
						</Text>
						<Text style={{ fontSize: SIZES[5] }}>
							{data && data.photo_manifest.landing_date}
						</Text>
					</View>
					<View style={S.row_nowrap_between}>
						<Text h3 style={{ color: COLORS.primary }}>
							Last Photo:
						</Text>
						<Text style={{ fontSize: SIZES[5] }}>
							{data && data.photo_manifest.max_date}
						</Text>
					</View>
					<View style={S.row_nowrap_between}>
						<Text h3 style={{ color: COLORS.primary }}>
							Photos:
						</Text>
						<Text style={{ fontSize: SIZES[5] }}>
							{data && data.photo_manifest.total_photos}
						</Text>
					</View>
				</View>

				<View style={S.row_wrap_between}>
					{SEARCH_PARAMS.map(param => (
						<View key={param.title} style={S.row_nowrap}>
							<Text style={{ flex: 1, textAlign: "center" }}>
								{param.description}
							</Text>
							<Button
								buttonStyle={S.btnStyle}
								containerStyle={S.containerStyle}
								key={param.title}
								onPress={() => handleOnPress(param.screen, param.query_param)}
								title={param.title}
								titleStyle={{ fontSize: SIZES[4] }}
							/>
						</View>
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
		backgroundColor: COLORS.secondary,
		borderColor: COLORS.backgroundLT,
		borderWidth: SIZES[0],
		marginLeft: SIZES[3],
	},
	centered: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
	containerStyle: {
		width: 150,
	},
	row_nowrap: {
		flexDirection: "row",
		maxWidth: "100%",
	},
	row_nowrap_between: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	row_wrap_between: {
		alignItems: "center",
		alignContent: "space-around",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
});
