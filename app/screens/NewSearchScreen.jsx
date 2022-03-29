import { StyleSheet, Text, View } from "react-native";
import NB_Button from "../components/NBButton";

const NewSearchScreen = ({ navigation }) => {
	return (
		<View style={S.view}>
			<NB_Button />
		</View>
	);
};

const S = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#f00",
	},
});

export default NewSearchScreen;
