import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Button, FAB } from "react-native-elements";
import { ROVER_CAMERAS as CAMERAS, IMG_PATHS } from "../constants";
import { COLORS, SIZES } from "../styles";

const CameraPickerScreen = ({ navigation, route }) => {
	const { rover } = route.params;
	const imgSrc = IMG_PATHS[rover.toLowerCase()];

	return (
		<SafeAreaView style={S.safeAreaView}>
			<ImageBackground
				imageStyle={S.bgImgStyle}
				resizeMode='cover'
				source={imgSrc}
				style={S.bgStyle}
			>
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
				<FAB
					color={COLORS.secondary}
					icon={{
						type: "font-awesome",
						name: "home",
						color: "white",
					}}
					onPress={() => navigation.navigate("Home")}
					size='large'
				/>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default CameraPickerScreen;

const S = StyleSheet.create({
	safeAreaView: {
		backgroundColor: "#000",
		flex: 1,
	},
	bgImgStyle: {
		flex: 1,
		opacity: 0.6,
	},
	bgStyle: {
		flex: 1,
	},
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
