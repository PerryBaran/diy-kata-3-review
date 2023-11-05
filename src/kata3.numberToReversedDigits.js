const numberToReversedDigits = (number) => {
	return number
		.toString()
		.split('')
		.reverse()
		.map((item) => Number(item));
};

module.exports = numberToReversedDigits;
