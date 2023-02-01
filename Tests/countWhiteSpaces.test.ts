import { countWhiteSpaces } from "../functions/countWhiteSpaces";

describe("Count white spaces", () => {
  test("Count white spaces in string", () => {
    const sentence = "Does it really matters?";
    const result = countWhiteSpaces(sentence, true);
    expect(result).toEqual(3);
  });
  test("Count non white spaces in string", () => {
    const sentence = "Does it really matters?";
    const result = countWhiteSpaces(sentence, false);
    expect(result).toEqual(20);
  });
});
