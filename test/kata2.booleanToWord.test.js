const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
	test('check boolean returns correct string', () => {
		expect(booleanToWord(true)).toBe('Yes');
		expect(booleanToWord(false)).toBe('No');
	});
});
