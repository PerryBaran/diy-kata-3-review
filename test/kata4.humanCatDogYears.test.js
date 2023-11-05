const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
	test('check number inputs', () => {
		expect(humanCatDogYears(0)).toStrictEqual([0, 0, 0]);
		expect(humanCatDogYears(1)).toStrictEqual([1, 15, 15]);
		expect(humanCatDogYears(2)).toStrictEqual([2, 24, 24]);
		expect(humanCatDogYears(3)).toStrictEqual([3, 28, 29]);
		expect(humanCatDogYears(4)).toStrictEqual([4, 32, 34]);
	});
});
