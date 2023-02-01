import { countDigits } from "../functions/countDigits";

describe('Count digits', ()=>{
    test('Count digits', ()=>{
        const input = "Somewhere over 534 rainbow.";
        const result = countDigits(input);
        expect(result).toEqual(3);
    })
})