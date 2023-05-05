const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns Array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(12)).toEqual([12, 64, 74]);
    expect(humanCatDogYears(17)).toEqual([17, 84, 99]);
  });
});