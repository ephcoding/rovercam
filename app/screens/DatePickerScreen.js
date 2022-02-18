import { StyleSheet, Text, View } from "react-native";
import DatePicker from "../components/DatePicker";

const DatePickerScreen = ({ navigation, route }) => {
	const earthDatesArr = route.params.photos.map(photo => photo.earth_date);
	const rover = route.params.rover;

	return (
		<SafeAreaView style={S.safeArea}>
			<ImageBackground
				imageStyle={S.imgBgImgStyle}
				resizeMode='cover'
				source={route.params.img_url}
				style={S.imgBgStyle}
			>
				<View style={S.pickerView}>
					<DatePicker
						earthDatesArr={earthDatesArr}
						navigation={navigation}
						rover={rover}
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DatePickerScreen;

const styles = StyleSheet.create({});
