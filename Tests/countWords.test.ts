import { countWords } from "../functions/countWords";

describe("Count word tests", () => {
  test("Should count 5 words", () => {
    const result = countWords("Sth sth sth sth sth");
    expect(result).toEqual(5);
  });
  test("Should only count words with proper input", () => {
    const result = countWords("2day is a g**d day");
    expect(result).toEqual(4);
  });
  test("Should word properly with multisentence input.", () => {
    const result = countWords("2day is a g**d day. Yesterday was far worse 123!");
    expect(result).toEqual(8);
  });
});
