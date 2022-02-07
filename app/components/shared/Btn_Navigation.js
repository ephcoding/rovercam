import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Text_Body from "./Text_Body";
import { withNavigation } from "react-navigation";
import { SIZES } from "../../styles";

const NavButton = ({ label, navParams, navigation, screen }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(screen, { ...navParams })}
			style={S.touchOpac}
		>
			<Text_Body>{label}</Text_Body>
		</TouchableOpacity>
	);
};

export default withNavigation(NavButton);

const S = StyleSheet.create({
	label: {
		marginVertical: 0,
		textAlign: "center",
	},
	touchOpac: {
		alignSelf: "center",
		borderColor: "#fff",
		borderRadius: SIZES[2],
		borderWidth: SIZES[0],
		paddingVertical: SIZES[3],
		width: "50%",
	},
});
