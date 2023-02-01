import {sumOfNonWhiteSpaces} from '../functions/sumOfNonWhiteSpaces'
describe('Average of non white spaces', ()=>{
    test("Average of non white spaces", ()=>{
        const input = 'Lorem ipsum dolor si amet'
        const result = sumOfNonWhiteSpaces(input)
        expect(result).toEqual(21)
    })
})