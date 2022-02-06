import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { RoverContext } from "../../context/rover-context";
import Text_Body from "./Text_Body";
import { withNavigation } from "react-navigation";
import { SIZES } from "../../styles";

const ctx = useContext(RoverContext);

const Btn_Navigation = ({ label, navigation, screen }) => {
	const handleOnPress = () => {
		ctx.setRover(label.toUpperCase());
		navigation.navigate(screen);
	};

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
