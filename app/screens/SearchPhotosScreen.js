import { useState } from "react";
import { usePhotosBySOL } from "../hooks";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { Button, FAB, Overlay, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import { CAMERAS_BY_ROVER as ROVERS } from "../constants";
import DatePicker from "../components/DatePicker";
import SearchSwitch from "../components/SearchSwitch";
import SOLPicker from "../components/SOLPicker";

// NOTES:
// Switch onChange => (event)
// Switch onValueChange => returns (passed value)

const SearchPhotosScreen = ({ navigation, route }) => {
	const [isSwitched, setIsSwitched] = useState(false);
	const [isOverlayed, setIsOverlayed] = useState(false);
	// const [screen, setScreen] = useState();

	const earthDatesArr = route.params.photos.map(photo => photo.earth_date);
	const rover = route.params.rover;
	const solsArr = route.params.photos.map(photo => photo.sol);

	const handleSwitchOnChange = () => setIsSwitched(!isSwitched);
	const toggleOverlay = () => setIsOverlayed(!isOverlayed);

	return (
		<SafeAreaView style={S.safeArea}>
			<ImageBackground
				imageStyle={S.imgBgImgStyle}
				resizeMode='cover'
				source={route.params.img_url}
				style={S.imgBgStyle}
			>
				<View style={S.pickerView}>
					{isSwitched ? (
						<DatePicker
							earthDatesArr={earthDatesArr}
							navigation={navigation}
							rover={rover}
						/>
					) : (
						<SOLPicker navigation={navigation} rover={rover} sols={solsArr} />
					)}
				</View>
				<FAB
					color={COLORS.primary}
					icon={{ type: "font-awesome", name: "camera", color: "white" }}
					onPress={toggleOverlay}
					size='large'
				/>
				<Overlay
					isVisible={isOverlayed}
					onBackdropPress={toggleOverlay}
					overlayStyle={S.overlayStyle}
				>
					<Text style={S.text}>ROVER CAMERAS</Text>
					<View style={S.camerasView}>
						{ROVERS[rover.toLowerCase()].map(cameraArr => (
							<Button
								buttonStyle={S.btnStyle}
								containerStyle={S.containerStyle}
								key={cameraArr[1]}
								title={cameraArr[0]}
								titleStyle={S.btnTitleStyle}
							/>
						))}
					</View>
				</Overlay>
				<SearchSwitch
					onChangeHandler={handleSwitchOnChange}
					value={isSwitched}
				/>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SearchPhotosScreen;

const S = StyleSheet.create({
	btnStyle: {
		backgroundColor: COLORS.secondary,
	},
	btnTitleStyle: {
		color: COLORS.textLT,
	},
	camerasView: {
		flex: 1,
	},
	containerStyle: {
		backgroundColor: COLORS.primary,
		marginVertical: SIZES[2],
		padding: SIZES[2],
	},
	imgBgStyle: {
		flex: 1,
	},
	imgBgImgStyle: {
		flex: 1,
		opacity: 0.3,
	},
	overlayStyle: {
		height: "50%",
		// opacity: 0.5,
		width: "90%",
	},
	pickerView: {
		flex: 1,
	},
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
	text: {
		color: COLORS.textDK,
		fontSize: SIZES[5],
		fontWeight: "bold",
		textAlign: "center",
	},
});
