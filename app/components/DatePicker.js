import { RNC_THEME } from "../styles/themes";
import { StyleSheet, View } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import { FAB, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import { QUERY_PARAMS } from "../constants";
import { createMarkedDatesObj } from "./utils/createMarkedDatesObj";
import { getRangeDatesMonthDiff } from "./utils/getRangeDatesMonthDiff";
import dayjs from "dayjs";

const DatePicker = ({ earthDatesArr, navigation, rover }) => {
	const startDate = dayjs(earthDatesArr[0]);
	const lastDate = dayjs(earthDatesArr.slice(-1)[0]);
	const diffMonths = lastDate.diff(startDate, "month");

	const markedDatesStyles = {
		customStyles: {
			container: {
				justifyContent: "center",
				backgroundColor: COLORS.secondary,
				height: SIZES[7],
				width: SIZES[7],
			},
			text: {
				color: COLORS.textDK,
			},
		},
	};
	const markedDates = createMarkedDatesObj(earthDatesArr, markedDatesStyles);

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
				futureScrollRange={diffMonths}
				markedDates={markedDates}
				markingType={"custom"}
				onDayPress={date => handleEarthDatePick(date.dateString)}
				pastScrollRange={0}
				style={S.style}
				theme={RNC_THEME}
			/>
		</>
	);
};

export default DatePicker;

const S = StyleSheet.create({
	style: {
		backgroundColor: "#000",
	},
	calendarStyle: {
		backgroundColor: "#000",
		color: "#fff",
	},
});
