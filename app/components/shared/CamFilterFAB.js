import { FAB } from "react-native-elements";
import { COLORS } from "../../styles";

export const CameraFAB = ({ setIsVisible }) => {
	return (
		<FAB
			color={COLORS.backgroundLT}
			icon={{
				type: "font-awesome",
				name: "camera",
				color: "black",
			}}
			onPress={setIsVisible}
		/>
	);
};
