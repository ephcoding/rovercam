import { StyleSheet, Text, View } from "react-native";
import NavBtn from "./NavBtn";

const NavBtnList = ({
	btnLabels,
	btnStyles,
	labelStyles,
	listStyles,
	screen,
}) => {
	if (!btnLabels) return;

	return (
		<View style={[S.list, listStyles]}>
			{btnLabels.map(label => (
				<NavBtn
					label={label}
					btnStyles={btnStyles}
					labelStyles={labelStyles}
					screen={screen}
				/>
			))}
		</View>
	);
};

export default NavBtnList;

const S = StyleSheet.create({
	list: {},
});
