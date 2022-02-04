import { Pressable, StyleSheet, Text, View } from "react-native";
import { withNavigation } from "react-navigation";

const NavBtn = ({ btnStyles, label, labelStyles, navigation, screen }) => {
	const handleOnPress = pressedLabel => {
		navigation.navigate(screen, { btnLabel: pressedLabel });
		console.log(">> NAV BTN >>", pressedLabel);
	};

	return (
		<Pressable
			key={label}
			onPress={() => handleOnPress(label)}
			style={[S.pressable, btnStyles]}
		>
			<Text style={[S.text, labelStyles]}>{label}</Text>
		</Pressable>
	);
};

export default withNavigation(NavBtn);

const S = StyleSheet.create({
	pressable: {
		borderColor: "#fff",
		borderRadius: 10,
		borderWidth: 2,
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 150,
	},
	text: {
		color: "#fff",
		alignSelf: "center",
	},
});
