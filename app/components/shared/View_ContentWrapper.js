import { StyleSheet, Text, View } from "react-native";
import { SIZES } from "../../styles";

const View_ContentWrapper = ({ children }) => {
	return <View style={S.base}>{children}</View>;
};

export default View_ContentWrapper;

const S = StyleSheet.create({
	base: {
		flex: 1,
		padding: SIZES[5],
	},
});
