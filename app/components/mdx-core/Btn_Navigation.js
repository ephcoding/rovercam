// >> CORE Components
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
// >> MDX Components
import Text_Body from "./Text_Body";
// >> Utils
import { withNavigation } from "react-navigation";
import { SIZES } from "../../styles";

const Btn_Navigation = (
	{ label, navPayload = {}, navigation, screen },
	{ ...props }
) => {
	navPayload.label = label;

	const handleOnPress = () => navigation.navigate(screen, navPayload);

	return (
		<TouchableOpacity onPress={() => handleOnPress()} style={S.touchOpac}>
			<Text_Body styleMods={S.label}>{label}</Text_Body>
		</TouchableOpacity>
	);
};

export default withNavigation(Btn_Navigation);

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
