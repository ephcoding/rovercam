import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import { COLORS } from "../../styles";

export const NavHomeFAB = ({ navigation }) => {
	const handleOnPress = () => navigation.navigate("Home");

	return (
		<FAB
			color={COLORS.secondary}
			icon={{
				type: "font-awesome",
				name: "home",
				color: "white",
			}}
			onPress={handleOnPress}
			size='large'
		/>
	);
};

const styles = StyleSheet.create({});
