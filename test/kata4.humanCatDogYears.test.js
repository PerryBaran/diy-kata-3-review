const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(15)).toEqual([15, 76, 89]);
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
  });
});
