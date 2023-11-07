const { getEmployerRole } = require('../src');

const employees = [];
describe('getEmployerRole', () => {
	test('check if anyone is employed', () => {
		expect(getEmployerRole('Stuart', employees)).toBe('No one works here!');
	});
	test('check founder', () => {
		employees.push({ name: 'Stuart', role: 'Founder' });
		expect(getEmployerRole('Stuart', employees)).toBe('Founder');
	});
	test('check someone that does not work here', () => {
		expect(getEmployerRole('James', employees)).toBe(
			'James does not work here!'
		);
	});
	test('check randoms', () => {
		employees.push(
			{ name: 'Satti', role: 'Developer' },
			{ name: 'Jenny', role: 'Sales Associate' },
			{ name: 'Javid', role: 'Human Recommended Reading Assistant' }
		);
		expect(getEmployerRole('Satti', employees)).toBe('Developer');
		expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate');
		expect(getEmployerRole('Javid', employees)).toBe(
			'Human Recommended Reading Assistant'
		);
	});
	test('check duplicates', () => {
		employees.push({ name: 'Satti', role: 'Admin' });
		expect(getEmployerRole('Satti', employees)).toBe('Developer Admin');
		employees.push({ name: 'Satti', role: 'Cleaner' });
		expect(getEmployerRole('Satti', employees)).toBe('Developer Admin Cleaner');
	});
});
