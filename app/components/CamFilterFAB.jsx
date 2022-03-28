import { FAB } from "react-native-elements";
import { COLORS } from "../../theme";

export const CamFilterFAB = ({ setIsVisible }) => {
	return (
		<FAB
			color={COLORS.secondary}
			icon={{
				type: "font-awesome",
				name: "filter",
				color: "white",
			}}
			size='large'
			onPress={setIsVisible}
			title='Camera Filter'
		/>
	);
};
