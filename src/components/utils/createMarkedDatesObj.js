export const createMarkedDatesObj = (
	datesToMark = [],
	markedDateStyles = {}
) => {
	const markedDates = {};

	datesToMark.forEach(date => {
		markedDates[date] = {
			disabled: false,
			...markedDateStyles,
		};
	});

	return markedDates;
};
