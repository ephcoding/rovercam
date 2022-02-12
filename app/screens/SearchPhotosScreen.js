import DatePicker from "../components/DatePicker";
import SOLPicker from "../components/SOLPicker";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { ButtonGroup, Switch, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";

const SearchPhotosScreen = ({ navigation, route }) => {
	const [isSwitched, setIsSwitched] = useState(false);
	// whats the diff...
	const handleSwitchOnChange = () => setIsSwitched(!isSwitched);
	// const handleSwitchOnValueChange = curVal => console.log(curVal);

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
				<View style={S.switchRowStyle}>
					<Text h4>Martian SOL</Text>
					<Switch
						onChange={() => handleSwitchOnChange()}
						// onValueChange={curVal => handleSwitchOnValueChange(curVal)}
						value={isSwitched}
					/>
					<Text h4>Earth Date</Text>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SearchPhotosScreen;

const S = StyleSheet.create({
	imgBgStyle: {
		// alignItems: "center",
		flex: 1,
	},
	imgBgImgStyle: {
		flex: 1,
		opacity: 0.5,
	},
	pickerView: {
		flex: 1,
	},
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
	switchLabel: {},
	switchRowStyle: {
		flexDirection: "row",
		marginBottom: SIZES[6],
		justifyContent: "center",
	},
});