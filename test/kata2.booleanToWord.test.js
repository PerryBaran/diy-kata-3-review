// When booleanToWord is passed true, 
// it should return 'Yes'. When it is 
// passed false, it should return 'No'.

const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("return Yes when passed true", () => {});
  expect(booleanToWord(true)).toBe('Yes')
});

describe("booleanToWord", () => {
  it("return No when passed false", () => {});
  expect(booleanToWord(false)).toBe('No')
});
