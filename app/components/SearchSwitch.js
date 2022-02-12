import { StyleSheet, View } from "react-native";
import { Switch, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";

const SearchSwitch = ({ onChangeHandler, value }) => {
	return (
		<View style={S.switchRowStyle}>
			<Text h4>Martian SOL</Text>
			<Switch onChange={onChangeHandler} value={value} />
			<Text h4>Earth Date</Text>
		</View>
	);
};

export default SearchSwitch;

const S = StyleSheet.create({
	switchLabel: {},
	switchRowStyle: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: SIZES[6],
	},
});
