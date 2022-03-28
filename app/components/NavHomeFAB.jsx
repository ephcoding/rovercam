import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import { COLORS } from "../theme";

export const NavHomeFAB = ({ navigation }) => {
	const handleOnPress = () => navigation.navigate("Home");

	/**
	 * TODO: remove FAB background
	 */

	return (
		<FAB
			color={COLORS.primary}
			icon={{
				type: "font-awesome",
				name: "home",
				color: "white",
				size: 26,
			}}
			onPress={handleOnPress}
		/>
	);
};
