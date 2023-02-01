import { countWords } from "./functions/countWords"

test("Should count 5 words", ()=> {
    const result = countWords("Sth sth sth sth sth");
    expect(result).toEqual(5)
})