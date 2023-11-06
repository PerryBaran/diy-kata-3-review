const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const inputNames = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
    expect(joinNames(inputNames)).toEqual("Bart, Lisa & Maggie");
  });
});
