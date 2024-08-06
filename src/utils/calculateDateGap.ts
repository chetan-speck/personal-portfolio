// -------------------------------------------------------------------------------------------

const calculateDateGap = (startDate: Date, endDate: Date): string => {
	const diffInMs = endDate.getTime() - startDate.getTime();
	const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
	const diffInYears = diffInMs / millisecondsInYear;

	return parseFloat(diffInYears.toFixed(1)).toString();
};

// -------------------------------------------------------------------------------------------

export default calculateDateGap;

// -------------------------------------------------------------------------------------------
