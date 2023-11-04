const humanCatDogYears = (number) => {
  if (number === 1) {
    return [15, 15, 15];
  }

  if (number === 2) {
    return [24, 24, 24];
  }

  if (number > 2) {
    const catYears = 24 + (number - 2) * 4;
    const dogYears = 24 + (number - 2) * 5;
    return [number * 15, catYears, dogYears];
  }

  throw new Error("Input is not a valid age");
};

module.exports = humanCatDogYears;
