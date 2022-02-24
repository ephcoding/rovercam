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
				backgroundColor: COLORS.primary,
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
			paramType: QUERY_PARAMS.earth_date,
			value: date,
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
				style={S.style}
				theme={RNC_THEME}
			/>
			<View>
				<FAB
					color={COLORS.primary}
					icon={{
						type: "font-awesome",
						name: "home",
						color: "white",
					}}
					onPress={() => navigation.navigate("Home")}
					size='large'
				/>
			</View>
		</>
	);
};

export default DatePicker;

const S = StyleSheet.create({
	style: {
		backgroundColor: "#000",
		marginVertical: 10,
	},
	calendarStyle: {
		backgroundColor: "#000",
		color: "#fff",
	},
	// columnWrapperStyle: {
	// 	backgroundColor: "#0000",
	// 	margin: 20,
	// },
	// contentContainerStyle: {
	// 	backgroundColor: "#0000",
	// 	margin: 20,
	// },
});
