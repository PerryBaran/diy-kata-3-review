const humanCatDogYears = (number) => {
  const ageTwo = 24;
  const extraCatYears = (number - 2) * 4;
  const catYears = ageTwo + extraCatYears;
  const extraDogYears = (number - 2) * 5;
  const dogYears = ageTwo + extraDogYears;
  const yearsArray = [number, catYears, dogYears];
  return yearsArray;
};

module.exports = humanCatDogYears;
