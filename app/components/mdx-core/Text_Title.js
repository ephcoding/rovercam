import { StyleSheet, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../styles";

const ScreenTitle = ({ children, styleChanges = null }) => {
	return <Text style={[S.base, styleChanges]}>{children}</Text>;
};

export default ScreenTitle;

const S = StyleSheet.create({
	base: {
		color: COLORS.textLT,
		fontFamily: FONTS.primary,
		fontSize: SIZES[6],
	},
});
