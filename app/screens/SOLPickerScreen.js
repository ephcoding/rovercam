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

const SOLPickerScreen = ({ navigation, route }) => {
	const { rover, manifest_photos } = route.params;
	const solsArr = sols.map(sol => sol.sol);

	return (
		<SafeAreaView>
			<SOLPicker navigation={navigation} rover={rover} solsArr={solsArr} />
			<NavHomeFAB navigation={navigation} />
		</SafeAreaView>
	);
};

export default SOLPickerScreen;
