const { humanCatDogYears } = require("../src");

  describe("humanCatDogYears", () => {
    it("for the first human year return 15 animal years", () => {});
    expect(humanCatDogYears(1)).toEqual([1,15,15])
  });

  describe("humanCatDogYears", () => {
    it("for the second human year return 9 animal years", () => {});
    expect(humanCatDogYears(2)).toEqual([2,24,24])
  });

  describe("humanCatDogYears", () => {
    it("for every subsequent year add 4 cat years & 5 Dog years", () => {});
    expect(humanCatDogYears(3)).toEqual([3,28,29])
    expect(humanCatDogYears(10)).toEqual([10,56,64])
  });


