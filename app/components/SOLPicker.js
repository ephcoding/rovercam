import { useState } from "react";
import { ButtonGroup } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

// !HEADS UP! --> SOLs start at '0'

const SOLPicker = () => {
	const [btnIndex, setBtnIndex] = useState(0);

	const handleBtnOnPress = index => {
		setBtnIndex(index);
		console.log(">> BTN INDEX >>\n", index);
	};

	return (
		<ButtonGroup
			buttons={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
			onPress={btnIndex => handleBtnOnPress(btnIndex)}
			selectedIndex={btnIndex}
		/>
	);
};

export default SOLPicker;
