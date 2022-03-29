import React from "react";
import { Box, Button } from "native-base";

const NB_Button = ({ label, navigation }) => {
	const handlePress = () => {
		navigation.navigate(label);
	};

	return (
		<Box alignItems='center'>
			<Button onPress={() => handlePress()}>{label}</Button>
		</Box>
	);
};

export default NB_Button;
