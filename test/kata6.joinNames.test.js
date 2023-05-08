const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const name1 = {
      name: "Bart",
    };

    const name2 = {
      name: "Lisa",
    };

    const name3 = {
      name: "Maggie",
    };

    expect(joinNames([name1, name2, name3])).toBe("Bart, Lisa & Maggie");
    expect(joinNames([name1, name2])).toBe("Bart & Lisa");
    expect(joinNames([name2, name3])).toBe("Lisa & Maggie");
  });
});
