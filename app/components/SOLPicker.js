import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";

// !HEADS UP! --> SOLs start at '0'

const SOLPicker = () => {
	const [btnIndex, setBtnIndex] = useState(0);
	const TEST_SOLS = [];

	for (let i = 0; i < 50; i++) {
		TEST_SOLS.push(`${i}`);
	}

	const handleBtnOnPress = index => setBtnIndex(index);

	return (
		<FlatList
			data={TEST_SOLS}
			keyExtractor={ke => ke}
			renderItem={({ item, index, separators }) => (
				<Button
					buttonStyle={S.btnBtnStyle}
					containerStyle={S.btnContainerStyle}
					onPress={() => console.log(index, separators)}
					title={item}
				/>
			)}
			numColumns={2}
		/>
	);
};

export default SOLPicker;

const S = StyleSheet.create({
	btnBtnStyle: {
		backgroundColor: COLORS.backgroundDK,
	},
	btnContainerStyle: {
		flex: 1,
		margin: 10,
		opacity: 0.5,
	},
	flColWrapStyle: {},
});
