import { RNC_THEME } from "../styles/themes";
import { StyleSheet } from "react-native";
import { CalendarList } from "react-native-calendars";
import { Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";

const DatePicker = ({ earthDatesArr, rover }) => {
	const startDate = earthDatesArr[0];
	// LEFT OFF: calculate # of months between 1st & last photo day to set Calendar pastScrollRange
	// TODO: mark calendar days that have photos & disable calendar days that don't
	console.log(
		new Date(earthDatesArr[earthDatesArr.length - 1]) -
			new Date(earthDatesArr[0])
	);

	const handleEarthDatePick = () => {};

	return (
		<CalendarList
			calendarStyle={S.calendarStyle}
			current={earthDatesArr[0]}
			futureScrollRange={20}
			pastScrollRange={0}
			style={S.style}
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
