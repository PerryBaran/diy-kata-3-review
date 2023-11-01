const numberToReversedDigits = (number) => {
  const newArray = String(number).split("").map(Number);
  const newReversedArray = newArray.reverse();

  return newReversedArray;
};

module.exports = numberToReversedDigits;
