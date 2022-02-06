// >> CORE Components
import { StyleSheet, View } from "react-native";
// >> MDX Components
import Btn_Navigation from "./Btn_Navigation";

const List_NavigationBtns = ({ btnLabels, screen, styleMods }) => {
	console.log(Object.values(btnLabels));

	if (!btnLabels) return;

	return (
		<View style={[S.base, styleMods]}>
			{btnLabels &&
				Object.entries(btnLabels).map(([key, labelValue]) => {
					console.log(">> NAV BTNS LIST >>", labelValue);
					return (
						<Btn_Navigation
							key={labelValue}
							label={labelValue}
							screen={screen}
						/>
					);
				})}
		</View>
	);
};

export default List_NavigationBtns;

const S = StyleSheet.create({
	base: {
		flex: 1,
	},
});
