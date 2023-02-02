import { byWords } from "../functions/byWords";

describe("By Words test", () => {
  test("Single sentence: Ala ma kota", () => {
    const sentence = "Ala ma kota";
    const result = byWords(sentence, true);
    expect(result).toEqual(["Ala ma kota", 3]);
  });
  test("Single sentence: Ala ma kota.", () => {
    const sentence = "Ala ma kota.";
    const result = byWords(sentence, true);
    expect(result).toEqual(["Ala ma kota.", 3]);
  });
  test("Single sentence: Damn.", () => {
    const sentence = "Damn.";
    const result = byWords(sentence, true);
    expect(result).toEqual(["Damn.", 1]);
  });
  test("Single sentence: Something.", () => {
    const sentence = "Something";
    const result = byWords(sentence, true);
    expect(result).toEqual(["", 0]);
  });
  test(`Single sentence: "" `, () => {
    const sentence = "";
    const result = byWords(sentence, true);
    expect(result).toEqual(["", 0]);
  });
  test(`Single sentence: "Ala ma k@ta" `, () => {
    const sentence = "Ala ma k@ta";
    const result = byWords(sentence, true);
    expect(result).toEqual(["Ala ma", 2]);
  });
  test(`Single sentence: "Ala k@t" `, () => {
    const sentence = "Ala k@t";
    const result = byWords(sentence, true);
    expect(result).toEqual(["", 0]);
  });
  test(`Single sentence: "1234." `, () => {
    const sentence = "1234.";
    const result = byWords(sentence, true);
    expect(result).toEqual(["", 0]);
  });
  test(`Single sentence: "..." `, () => {
    const sentence = "...";
    const result = byWords(sentence, true);
    expect(result).toEqual(["", 0]);
  });
  test("Shortest sentence:", () => {
    const sentences = "lalala la la. la la.";
    const result = byWords(sentences, true);
    expect(result).toEqual(["la la.", 2]);
  });
  test("Longest sentence:", () => {
    const sentences = "lalala la la. la la.";
    const result = byWords(sentences, false);
    expect(result).toEqual(["lalala la la.", 3]);
  });
});
