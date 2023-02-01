import { countApperances } from "../functions/countAppearances"

describe('Count appearances tests', ()=>{
    test('Find most appearing word', ()=>{
        const input = "Somewhere over the rainbow"
        const result = countApperances(input)
        expect(result).toEqual(["Remis ", 1])
    })
})