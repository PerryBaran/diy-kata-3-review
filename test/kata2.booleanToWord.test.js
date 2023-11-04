const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("converts true to 'Yes'", () => {
    const result = booleanToWord(true);
    expect(result).toBe("Yes");
  });

  test("converts false to 'No'", () => {
    const result = booleanToWord(false);
    expect(result).toBe("No");
  });
});