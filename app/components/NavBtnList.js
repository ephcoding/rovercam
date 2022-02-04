import { StyleSheet, Text, View } from "react-native";
import NavBtn from "./NavBtn";

const NavBtnList = ({
	btnLabels,
	btnStyles,
	labelStyles,
	listStyles,
	navigation,
	screen,
}) => {
	const handleOnPress = pressedLabel => {
		// navigation.navigate(screen, { btnLabel: pressedLabel });
		navigation.navigate("RoverScreen");
		console.log(">> NAV BTN >>", navigation);
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
					onPress={() => {
						navigation.navigate("RoverScreen");
					}}
				/>
			))}
		</View>
	);
};

export default NavBtnList;

const S = StyleSheet.create({
	list: {},
});
