import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { useEffect, useState } from "react";
import { usePhotosBySOL } from "../hooks";
import { StyleSheet, View } from "react-native";
import { Button, FAB, Overlay, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import SOLPicker from "../components/SOLPicker";

export default SOLPickerScreen = ({ navigation, route }) => {
	const { rover, manifest_photos } = route.params;
	const solsArr = manifest_photos.map(sol => sol.sol);

	useEffect(() => {
		navigation.setOptions({
			title: solsArr.length + " SOLS",
		});
	}, []);

	return (
		<SafeAreaView>
			<SOLPicker navigation={navigation} rover={rover} solsArr={solsArr} />
			<View style={S.fab_view_style}>
				<NavHomeFAB navigation={navigation} />
			</View>
		</SafeAreaView>
	);
};

const S = StyleSheet.create({
	fab_view_style: {
		backgroundColor: "#fff0",
		flexDirection: "row",
		justifyContent: "space-evenly",
		position: "absolute",
		left: 0,
		bottom: 0,
		right: 0,
		marginBottom: SIZES[6],
	},
});
