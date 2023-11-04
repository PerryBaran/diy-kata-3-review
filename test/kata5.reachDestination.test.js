const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    // Test with a distance of 120 miles and a speed of 60 mph
    const result1 = reachDestination(120, 60);
    expect(result1).toBe("You will arrive in 2 hours.");

    // Test with a distance of 90 miles and a speed of 45 mph
    const result2 = reachDestination(90, 45);
    expect(result2).toBe("You will arrive in 2 hours.");

    // Test with a distance of 100 miles and a speed of 0 mph (stopped)
    const result3 = reachDestination(100, 0);
    expect(result3).toBe("You are not moving, so you're already there!");

    // Test with a distance of 30 miles and a speed of 90 mph
    const result4 = reachDestination(30, 90);
    expect(result4).toBe("You will arrive in 20 minutes.");
  });
});