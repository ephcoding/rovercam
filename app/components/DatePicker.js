import { RNC_THEME } from "../styles/themes";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";
import { FAB, Text } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../styles";
import { PARAMS } from "../constants";

const DatePicker = ({ earthDatesArr, navigation, rover }) => {
	const startDate = earthDatesArr[0];
	// create styled photoDays Object
	// TODO: make this a func
	const photoDays = {};
	const photoDayStyles = {
		customStyles: {
			container: {
				backgroundColor: COLORS.primary,
			},
		},
	};
	earthDatesArr.forEach(date => {
		photoDays[date] = { ...photoDayStyles };
	});

	// create date array to determine disabledDays
	// const dateArray = (startDate, endDate) => {
	// 	console.log(startDate.slice(), endDate.slice());
	// };
	// dateArray(earthDatesArr[0], earthDatesArr[earthDatesArr.length - 1]);

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
		<>
			<CalendarList
				calendarStyle={S.calendarStyle}
				current={earthDatesArr[0]}
				futureScrollRange={20}
				markingType={"custom"}
				markedDates={photoDays}
				onDayPress={date => handleEarthDatePick(date.dateString)}
				// onDayPress={date => console.log(date.dateString)}
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
