const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("should return 'Yes' when input is true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("should return 'No' when input is falso", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
