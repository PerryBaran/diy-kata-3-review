const fizzBuzz = (number) => {
	const divBy3 = number % 3 === 0;
	const divBy5 = number % 5 === 0;
	if (divBy3 && divBy5) return 'FizzBuzz';
	if (divBy3) return 'Fizz';
	if (divBy5) return 'Buzz';
	return number;
};

module.exports = fizzBuzz;
