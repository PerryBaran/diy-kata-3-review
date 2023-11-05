const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns 'Fizz' when passed a multiple of 3", () => {
    // Test with a multiple of 3
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(12)).toBe("Fizz");
  });

  test("returns 'Buzz' when passed a multiple of 5", () => {
    // Test with a multiple of 5
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
  });

  test("returns 'FizzBuzz' when passed a multiple of both 3 and 5", () => {
    // Test with a multiple of both 3 and 5
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
  });
});
