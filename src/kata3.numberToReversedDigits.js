const numberToReversedDigits = (number) => {
  const arr = Array.from(String(number), Number);
  return arr.reverse();
};

module.exports = numberToReversedDigits;
