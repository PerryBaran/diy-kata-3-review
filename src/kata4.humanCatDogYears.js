const humanCatDogYears = (number) => {
	if (number === 0) return [0, 0, 0];
	if (number === 1) return [1, 15, 15];
	const catYears = 24 + (number - 2) * 4;
	const dogYears = 24 + (number - 2) * 5;
	return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
