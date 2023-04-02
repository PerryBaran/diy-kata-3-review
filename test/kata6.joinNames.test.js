const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart",
        },
        {
          name: "Lisa",
        },
        {
          name: "Maggie",
        },
      ])
    ).toEqual("Bart, Lisa & Maggie");
    expect(
      joinNames([
        {
          name: "Cloud",
        },
        {
          name: "Tifa",
        },
        {
          name: "Zack",
        },
        {
          name: "Aeris",
        },
      ])
    ).toEqual("Cloud, Tifa, Zack & Aeris");
  });
});
