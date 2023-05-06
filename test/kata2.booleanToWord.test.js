const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when passed True", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  test("returns No when passed False", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
