const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when passed true and returns no when passed false", () => {
    expect(booleanToWord(true)).toBe("yes");
    expect(booleanToWord(false)).toBe("no");
  });
});
