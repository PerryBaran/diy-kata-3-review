const numberToReversedDigits = (number) => {
 const reversedDigits = String(number).split('').reverse();
 const result = reversedDigits.map((digitString)=> Number(digitString));
 return result 
};

module.exports = numberToReversedDigits;
