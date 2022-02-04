import { StyleSheet, Text, View } from "react-native";
import NavBtn from "./NavBtn";

const NavBtnList = ({
	btnLabels,
	btnStyles,
	labelStyles,
	listStyles,
	screen,
}) => {
	const handleOnPress = () => {
		console.log(navigation.state);
		console.log(">> NAV BTN onPress() >>", navigation.navigate("RoverScreen"));
	};

	if (!btnLabels) return;

	return (
		<View style={[S.list, listStyles]}>
			{btnLabels.map(label => (
				<NavBtn
					btnStyles={btnStyles}
					key={label}
					label={label}
					labelStyles={labelStyles}
					onPress={() => handleOnPress()}
				/>
			))}
		</View>
	);
};

export default NavBtnList;

const S = StyleSheet.create({
	list: {},
});
