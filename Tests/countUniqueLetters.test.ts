import { countUniqueLetters } from "../functions/countUniqueLetters"

describe('Count unique Letters tests', ()=>{
    test('Find most appearing word', ()=>{
        const input = "Somewhere over the rainbow"
        const result = countUniqueLetters(input)
        expect(result).toEqual(["e ", 5])
    })
})