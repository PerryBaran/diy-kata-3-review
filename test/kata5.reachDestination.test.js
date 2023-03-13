const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns a string with the estimated time of arrival.", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(66, 22)).toBe("I should be there in 3 hours.");
    expect(reachDestination(74, 19)).toBe("I should be there in 4 hours.");

  })
});