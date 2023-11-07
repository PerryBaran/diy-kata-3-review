const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    // Test with a number that has multiple digits
    const result1 = numberToReversedDigits(12345);
    expect(result1).toEqual([5, 4, 3, 2, 1]);

    // Test with a single-digit number
    const result2 = numberToReversedDigits(7);
    expect(result2).toEqual([7]);

    // Test with a zero
    const result3 = numberToReversedDigits(0);
    expect(result3).toEqual([0]);
  });
});
