// >> CORE Components
import { StyleSheet, View } from "react-native";
// >> MDX Components
import Btn_Navigation from "./Btn_Navigation";

const List_NavigationBtns = ({ btnLabels, screen, styleMods }) => {
	if (!btnLabels) return;

	return (
		<View style={[S.base, styleMods]}>
			{btnLabels &&
				Object.keys(btnLabels).map(label => (
					<Btn_Navigation
						key={btnLabels[label]}
						label={label}
						screen={screen}
					/>
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
