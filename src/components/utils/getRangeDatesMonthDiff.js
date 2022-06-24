import dayjs from "dayjs";

export const getRangeDatesMonthDiff = async datesArr => {
	const startDate = await datesArr[0];
	const lastDate = await datesArr.slice(-1)[0];
	const diffMonths = await lastDate.diff(startDate, "month");

	console.log(startDate);
	console.log(lastDate);
	console.log(diffMonths);
	return { startDate, lastDate, diffMonths };
};
