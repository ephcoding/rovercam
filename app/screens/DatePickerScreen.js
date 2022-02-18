import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useFetchManifest } from "../hooks";
import DatePicker from "../components/DatePicker";
import { IMG_PATHS } from "../constants";

const DatePickerScreen = ({ navigation, route }) => {
	const imgSource = IMG_PATHS[route.params.rover.toLowerCase()];
	const { rover } = route.params;
	// const earthDatesArr = route.params.photos.map(photo => photo.earth_date);
	// const rover = route.params.rover;
	// const { isLoading, error, data } = useFetchManifest(rover);

	// if (isLoading) return <Text>Loading...</Text>;
	// if (error) return <Text>ERROR >> {error.message}</Text>;
	console.log(route.params.rover.toLowerCase());
	return (
		<SafeAreaView style={S.safeArea}>
			<ImageBackground
				imageStyle={S.bgImgStyle}
				resizeMode='cover'
				source={imgSource}
				style={S.bgStyle}
			>
				<View style={S.pickerView}>
					<DatePicker
						earthDatesArr={["2012-08-12", "2012-10-12"]}
						// earthDatesArr={earthDatesArr}
						navigation={navigation}
						rover={rover}
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DatePickerScreen;

const S = StyleSheet.create({
	bgImgStyle: { flex: 1, opacity: 0.5 },
	bgStyle: { flex: 1 },
	pickerView: { flex: 1 },
	safeArea: { flex: 1 },
});
