import { useState } from "react";
import { usePhotosBySOL } from "../hooks";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../styles";
import DatePicker from "../components/DatePicker";
import SearchSwitch from "../components/SearchSwitch";
import SOLPicker from "../components/SOLPicker";

// NOTES:
// Switch onChange => (event)
// Switch onValueChange => returns (passed value)

const SearchPhotosScreen = ({ navigation, route }) => {
	const [isSwitched, setIsSwitched] = useState(false);
	const [screen, setScreen] = useState();

	const earthDatesArr = route.params.photos.map(photo => photo.earth_date);
	const rover = route.params.rover;
	const solsArr = route.params.photos.map(photo => photo.sol);

	// SOL
	// 1. get number of SOLs from Rover's manifest
	// 2. pass SOL count to SOLPicker to display btns
	// 3. pass onPress handler to SOLPicker to set SOL number query param (0-indexed)
	// 4. when SOLPicker onPress, pass back index #
	// 5. query photos by Rover & selected SOL via usePhotosBySOL
	// 6. nav to DisplayPhotosScreen passing rover & SOL as route.params
	// 7. on nav - query photos by SOL via usePhotosBySOL

	// DATE
	// 1. get photo dates from Rover's manifest
	// 2. pass photo Calendar dates to CalendarPicker
	// 3. set calendar start & end dates to minimize resources
	// 4. 'disable' calendar days without photos
	// 5. pass onPress handler to CalendarPicker to set date query param
	// 6. when CalendarPicker onPress, pass back date
	// 7. nav to DisplayPhotosScreen passing rover & date as route.params
	// 8. on nav - query photos by date via usePhotosByDate

	// nav to DisplayPhotosScreen
	// send
	// handle date picked

	const handleSwitchOnChange = () => setIsSwitched(!isSwitched);

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
					{/* {isSwitched ? <DatePicker /> : <SOLPicker handler={handleSOLSelection} sols={}/>} */}
				</View>
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
	imgBgStyle: {
		flex: 1,
	},
	imgBgImgStyle: {
		flex: 1,
		opacity: 0.3,
	},
	pickerView: {
		flex: 1,
	},
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});
