const numberToReversedDigits = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      throw new Error("Input is not a valid number");
    }
  
    if (number === 0) {
      return [0];
    }
  
    const digits = [];
    let num = Math.abs(number);
  
    while (num > 0) {
      const digit = num % 10;
      digits.push(digit);
      num = Math.floor(num / 10);
    }
  
    return digits;
  };
  
  module.exports = numberToReversedDigits;
  
