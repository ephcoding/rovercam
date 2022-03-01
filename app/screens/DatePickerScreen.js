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
import { COLORS } from "../styles";

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
			<NavHomeFAB navigation={navigation} />
		</SafeAreaView>
	);
};
