import { countLetters } from "../functions/countLetters";

describe("Count letters", () => {
  test("Count letters in string", () => {
    const input = "Somewhere over 534 rainbow.";
    const result = countLetters(input);
    expect(result).toEqual(20);
  });
});
