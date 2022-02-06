// >> CORE Components
import { StyleSheet, View } from "react-native";
// >> MDX Components
import Btn_Navigation from "./Btn_Navigation";

// TODO: change btnLabels from Object[] to String[]

const List_NavigationBtns = ({ btnLabels, screen, styleMods }) => {
	if (!btnLabels) return;

	return (
		<View style={[S.base, styleMods]}>
			{btnLabels &&
				Object.entries(btnLabels).map(([key, value]) => (
					<Btn_Navigation key={value} label={value} screen={screen} />
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
