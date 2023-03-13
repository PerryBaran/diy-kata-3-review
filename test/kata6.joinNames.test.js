const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, separated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toBe('Bart, Lisa & Maggie')
  });
});
