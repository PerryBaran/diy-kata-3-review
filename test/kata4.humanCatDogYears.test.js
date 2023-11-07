const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("calculates cat and dog years based on human years", () => {
    // Test with a human age of 5 years
    const result = humanCatDogYears(5);
    expect(result).toEqual([75, 36, 39]);
  });
});