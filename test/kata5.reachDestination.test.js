const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(66, 10)).toEqual("I will be there in 6.5 hours");
    expect(reachDestination(44, 10)).toEqual("I will be there in 4.5 hours");
  });
});
