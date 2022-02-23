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
import SOLPicker from "../components/SOLPicker";

// NOTES:
// Switch onChange => (event)
// Switch onValueChange => returns (passed value)

const SOLPickerScreen = ({ navigation, route }) => {
	const { photos: sols, rover } = route.params;
	const solsArr = sols.map(sol => sol.sol);

	return (
		<SafeAreaView>
			<ImageBackground source={route.params.img_url}>
				<SOLPicker navigation={navigation} rover={rover} solsArr={solsArr} />
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
	text: {
		color: COLORS.textDK,
		fontSize: SIZES[5],
		fontWeight: "bold",
		textAlign: "center",
	},
});
