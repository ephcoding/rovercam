import { FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";

// !HEADS UP! --> SOLs start at '0'

const SOLPicker = ({ handler, sols }) => {
	return (
		<FlatList
			data={sols}
			keyExtractor={ke => ke}
			numColumns={2}
			renderItem={({ item, index, separators }) => (
				<Button
					buttonStyle={S.btnBtnStyle}
					containerStyle={S.btnContainerStyle}
					onPress={() => handler(index)}
					title={item}
				/>
			)}
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
		margin: SIZES[3],
		opacity: 0.5,
	},
	flColWrapStyle: {},
});
