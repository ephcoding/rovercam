import { FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import { QUERY_PARAMS } from "../constants";

// !HEADS UP! --> SOLs start at '0'

const SOLPicker = ({ navigation, rover, solsArr }) => {
	const handleSOLPick = sol => {
		navigation.navigate("DisplayPhotos", {
			rover: rover,
			query_param: QUERY_PARAMS.sol,
			param_value: sol,
		});
	};

	return (
		<FlatList
			columnWrapperStyle={S.columnWrapperStyle}
			data={solsArr}
			keyExtractor={ke => ke}
			numColumns={2}
			renderItem={({ item, index, separators }) => (
				<Button
					buttonStyle={S.btnBtnStyle}
					containerStyle={S.btnContainerStyle}
					onPress={() => handleSOLPick(item)}
					style={S.btnStyle}
					title={item || "0"}
				/>
			)}
		/>
	);
};

export default SOLPicker;

const S = StyleSheet.create({
	btnStyle: {
		borderColor: "#fff",
		borderWidth: 2,
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	btnBtnStyle: {
		backgroundColor: COLORS.backgroundDK,
		opacity: 0.7,
	},
	btnContainerStyle: {
		flex: 1,
		margin: SIZES[3],
	},
	columnWrapperStyle: {
		backgroundColor: COLORS.backgroundDK,
	},
});
