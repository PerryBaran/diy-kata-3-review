const fizzBuzz = (number) => {
  const dividesBy3 = (number % 3) === 0;
  const dividesBy5 = (number % 5) === 0;

  if (dividesBy3 && dividesBy5) {
      return 'FizzBuzz'
  }
  if (dividesBy3){
      return 'Fizz'
  }
  if (dividesBy5) {
      return 'Buzz'
  }
  return number 
};
    
module.exports = fizzBuzz;
