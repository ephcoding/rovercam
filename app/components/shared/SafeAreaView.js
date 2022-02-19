import { SafeAreaView as RNSafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../../styles";

export const SafeAreaView = ({ children }) => {
	return <RNSafeAreaView style={S.style}>{children}</RNSafeAreaView>;
};

const S = StyleSheet.create({
	style: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});
