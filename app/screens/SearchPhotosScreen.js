import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { ButtonGroup, Switch, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import DatePicker from "../components/DatePicker";
import SearchSwitch from "../components/SearchSwitch";
import SOLPicker from "../components/SOLPicker";

// NOTES:
// Switch onChange => (event)
// Switch onValueChange => returns (passed value)

const SearchPhotosScreen = ({ navigation, route }) => {
	const [isSwitched, setIsSwitched] = useState(false);

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
					{isSwitched ? <DatePicker /> : <SOLPicker />}
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
