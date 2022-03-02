import { RNC_THEME } from "../styles/themes";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";
import { FAB, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import { QUERY_PARAMS } from "../constants";
import { createMarkedDatesObj } from "./utils/createMarkedDatesObj";

/**
 * Calendar days are disabledByDefault={true}
 * days are then disabled: false when creating markedDates
 * this avoids having to create another 'disabledDates' func
 */

const DatePicker = ({ earthDatesArr, navigation, rover }) => {
	const startDate = earthDatesArr[0];
	const lastDate = earthDatesArr.slice(-1)[0];
	const markedDatesStyles = {
		customStyles: {
			container: {
				backgroundColor: COLORS.secondary,
			},
			text: {
				color: COLORS.textDK,
			},
		},
	};
	const markedDates = createMarkedDatesObj(earthDatesArr, markedDatesStyles);

	// TODO: calculate # of months between 1st & last photo day to set Calendar pastScrollRange

	const handleEarthDatePick = date => {
		navigation.navigate("DisplayPhotos", {
			rover: rover,
			query_param: QUERY_PARAMS.earth_date,
			param_value: date,
		});
	};

	return (
		<>
			<CalendarList
				calendarStyle={S.calendarStyle}
				current={earthDatesArr[0]}
				disableAllTouchEventsForDisabledDays={true}
				disabledByDefault
				futureScrollRange={20}
				markingType={"custom"}
				markedDates={markedDates}
				onDayPress={date => handleEarthDatePick(date.dateString)}
				pastScrollRange={0}
				style={S.calendarList_style}
				theme={RNC_THEME}
			/>
		</>
	);
};

export default DatePicker;

const S = StyleSheet.create({
	calendarList_style: {
		backgroundColor: "#000",
		marginVertical: 10,
	},
	calendarStyle: {
		backgroundColor: "#000",
		color: "#fff",
	},
});
