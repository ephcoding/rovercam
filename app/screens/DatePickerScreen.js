import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import { useFetchRoverManifest } from "../hooks";
import DatePicker from "../components/DatePicker";
import { IMG_PATHS } from "../constants";
import { COLORS, SIZES } from "../styles";

export default DatePickerScreen = ({ navigation, route }) => {
	const { rover, manifest_photos } = route.params;
	const earthDatesArr = manifest_photos.map(photo => photo.earth_date);

	return (
		<SafeAreaView>
			<DatePicker
				earthDatesArr={earthDatesArr}
				navigation={navigation}
				rover={rover}
			/>
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
