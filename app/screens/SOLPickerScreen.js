import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { useState } from "react";
import { usePhotosBySOL } from "../hooks";
import { StyleSheet, View } from "react-native";
import { Button, FAB, Overlay, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import { ROVER_CAMERAS as ROVERS } from "../constants";
import SOLPicker from "../components/SOLPicker";

// NOTES:
// Switch onChange => (event)
// Switch onValueChange => returns (passed value)

const SOLPickerScreen = ({ navigation, route }) => {
	const rover = route.params.rover;
	// const solsArr = route.params.photos.map(photo => photo.sol);

	return (
		<SafeAreaView>
			<ImageBackground source={route.params.img_url}>
				<View style={S.pickerView}>
					{/* <SOLPicker navigation={navigation} rover={rover} sols={solsArr} /> */}
				</View>
				<NavHomeFAB navigation={navigation} />
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SOLPickerScreen;

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
	pickerView: {
		flex: 1,
	},
	text: {
		color: COLORS.textDK,
		fontSize: SIZES[5],
		fontWeight: "bold",
		textAlign: "center",
	},
});
