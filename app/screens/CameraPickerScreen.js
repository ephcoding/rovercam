import { StyleSheet, Text, View } from "react-native";
import { Button, FAB } from "react-native-elements";
import { ROVER_CAMERAS as CAMERAS, IMG_PATHS } from "../constants";
import { COLORS, SIZES } from "../styles";
import {
	NavHomeFAB,
	ImageBackground,
	SafeAreaView,
} from "../components/shared";

export default CameraPickerScreen = ({ navigation, route }) => {
	const { rover } = route.params;
	const img_source = IMG_PATHS[rover.toLowerCase()];

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				<View style={S.camerasView}>
					{CAMERAS[rover.toLowerCase()].map(cameraArr => (
						<Button
							buttonStyle={S.btnStyle}
							containerStyle={S.btnContainer}
							key={cameraArr[1]}
							title={cameraArr[0]}
							titleStyle={S.btnTitleStyle}
						/>
					))}
				</View>
				<NavHomeFAB navigation={navigation} />
			</ImageBackground>
		</SafeAreaView>
	);
};

const S = StyleSheet.create({
	camerasView: {
		alignItems: "center",
		flex: 1,
		justifyContent: "space-evenly",
	},
	btnStyle: {},
	btnContainer: {
		width: "80%",
	},
	btnTitleStyle: {
		fontSize: SIZES[3],
	},
});
