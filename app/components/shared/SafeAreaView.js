import { SafeAreaView as MDXSafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../../styles";

const SafeAreaView = ({ children }) => {
	return <MDXSafeAreaView style={S.default}>{children}</MDXSafeAreaView>;
};

export default SafeAreaView;

const S = StyleSheet.create({
	default: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});
