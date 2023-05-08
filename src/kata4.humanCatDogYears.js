const humanCatDogYears = (number) => {
  const humanCatYears = 15 + 9 + (number - 2) * 4;
  const humanDogYears = 15 + 9 + (number - 2) * 5;
  return [number, humanCatYears, humanDogYears];
};

module.exports = humanCatDogYears;
