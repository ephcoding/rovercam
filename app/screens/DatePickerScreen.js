import {
	ImageBackground,
	NavHomeFAB,
	SafeAreaView,
} from "../components/shared";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import { useFetchManifest } from "../hooks";
import DatePicker from "../components/DatePicker";
import { IMG_PATHS } from "../constants";
import { COLORS } from "../styles";

const DatePickerScreen = ({ navigation, route }) => {
	const img_source = IMG_PATHS[route.params.rover.toLowerCase()];
	const { rover } = route.params;

	// const earthDatesArr = route.params.photos.map(photo => photo.earth_date);
	// const rover = route.params.rover;
	// const { isLoading, error, data } = useFetchManifest(rover);

	// if (isLoading) return <Text>Loading...</Text>;
	// if (error) return <Text>ERROR >> {error.message}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				<View style={S.pickerView}>
					<DatePicker
						earthDatesArr={["2012-08-12", "2012-10-12"]}
						// earthDatesArr={earthDatesArr}
						navigation={navigation}
						rover={rover}
					/>
				</View>
				<NavHomeFAB navigation={navigation} />
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DatePickerScreen;

const S = StyleSheet.create({
	pickerView: {
		flex: 1,
	},
});
