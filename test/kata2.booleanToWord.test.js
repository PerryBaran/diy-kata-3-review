const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when passed true", () => {
    expect(booleanToWord(true)).toBe("yes");
  })

  it("returns No when passed false", () => {
    expect(booleanToWord(false)).toBe("No");
  })

});
