import { RNC_THEME } from "../styles/themes";
import { StyleSheet } from "react-native";
import { CalendarList } from "react-native-calendars";
import { Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import { PARAMS } from "../constants";

const DatePicker = ({ earthDatesArr, navigation, rover }) => {
	const startDate = earthDatesArr[0];
	// create markedDates Object
	const photoDates = {};
	earthDatesArr.forEach(date => {
		photoDates[date] = {
			customStyles: {
				container: {
					backgroundColor: COLORS.primary,
				},
			},
		};
	});
	console.log(">> photoDates >>\n", photoDates);

	const photosDay = { container: { backgroundColor: COLORS.primary } };
	// LEFT OFF: calculate # of months between 1st & last photo day to set Calendar pastScrollRange
	// TODO: mark calendar days that have photos & disable calendar days that don't

	const handleEarthDatePick = date => {
		navigation.navigate("DisplayPhotos", {
			rover: rover,
			paramType: PARAMS.earth_date,
			value: date,
		});
	};

	return (
		<CalendarList
			calendarStyle={S.calendarStyle}
			current={earthDatesArr[0]}
			futureScrollRange={20}
			markingType={"custom"}
			markedDates={photoDates}
			onDayPress={date => handleEarthDatePick(date.dateString)}
			// onDayPress={date => console.log(date.dateString)}
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
