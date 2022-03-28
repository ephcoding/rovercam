import { SafeAreaView as RNSafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const SafeAreaView = ({ children }) => {
	return <RNSafeAreaView style={S.style}>{children}</RNSafeAreaView>;
};

const S = StyleSheet.create({
	style: {
		flex: 1,
	},
});
