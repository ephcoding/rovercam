import { StyleSheet, View } from "react-native";
import Btn_Navigation from "./Btn_Navigation";

const List_NavigationBtns = ({ labelsArr, screen, styleMods }) => {
	if (!labelsArr) return;

	return (
		<View style={[S.base, styleMods]}>
			{labelsArr &&
				labelsArr.map(label => (
					<Btn_Navigation key={label} label={label} screen={screen} />
				))}
		</View>
	);
};

export default List_NavigationBtns;

const S = StyleSheet.create({
	base: {
		flex: 1,
	},
});
