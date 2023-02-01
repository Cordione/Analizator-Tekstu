import { byNonWhite } from "../functions/byNonWhiteCharacters";

describe("Non white characters tests", () => {
  test("Find shortest sentence and return number of non white characters ", () => {
    //Given
    const sentence = "Look up! Two horses were eating grass here.";
    //when
    const result = byNonWhite(sentence, true);
    //then
    expect(result).toEqual(["Look up!", 7]);
  });
  test("Find longest sentence and return number of non white characters ", () => {
    //Given
    const sentence = "Look up! Two horses were eating grass here.";
    //when
    const result = byNonWhite(sentence, false);
    //then
    expect(result).toEqual([" Two horses were eating grass here.", 29]);
  });

});
