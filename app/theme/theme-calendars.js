import { Platform } from "react-native";
import { COLORS, FONTS, SIZE } from ".";

/**
 * styles specific to the photos day-search calendar
 */

export const RNC_THEME = {
	calendarBackground: COLORS.backgroundDK,
	// -- MONTH
	monthTextColor: COLORS.textLT,
	textMonthFontWeight: "bold",
	textMonthFontSize: SIZE[5],
	// -- DAY OF WEEK
	textSectionTitleColor: COLORS.textLT,
	textDayHeaderFontWeight: "bold",
	textDayHeaderFontSize: 14,
	// -- DAYS
	dayTextColor: COLORS.textLT,
	textDayFontWeight: "bold",
	textDayFontSize: 17,
};
