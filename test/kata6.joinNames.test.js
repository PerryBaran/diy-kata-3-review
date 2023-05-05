const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Harry",
        },
        {
          name: "Ron",
        },
        {
          name: "Hermione",
        },
      ])
    ).toBe("Harry, Ron & Hermione");
  });
});
