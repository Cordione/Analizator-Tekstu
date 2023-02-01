import { sumOfWords } from "../functions/sumOfWords"

describe('Average of non white spaces', ()=>{
    test("Average of non white spaces", ()=>{
        const input = 'Lorem ipsum dolor si amet'
        const result = sumOfWords(input)
        expect(result).toEqual(5)
    })
})