import { RNC_THEME } from "../styles/themes";
import { StyleSheet } from "react-native";
import { CalendarList } from "react-native-calendars";
import { Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";

const DatePicker = ({ earthDatesArr, rover }) => {
	const handleEarthDatePick = () => {};
	return (
		<CalendarList
			style={S.style}
			calendarStyle={S.calendarStyle}
			theme={RNC_THEME}
		/>
	);
};

export default DatePicker;

const S = StyleSheet.create({
	style: {
		backgroundColor: "#0000",
		marginVertical: 10,
	},
	calendarStyle: {
		backgroundColor: "#0000",
		// margin: 10,
	},
	// columnWrapperStyle: {
	// 	backgroundColor: "#0000",
	// 	margin: 20,
	// },
	// contentContainerStyle: {
	// 	backgroundColor: "#0000",
	// 	margin: 20,
	// },
	// headerStyle: {
	// 	backgroundColor: "#0000",
	// 	margin: 20,
	// },
});
