import { countWhiteSpaces } from "./countWhiteSpaces";

export function sumOfNonWhiteSpaces(input: string){
// Pass input to count non white spaces
const length = countWhiteSpaces(input, false)
// Split by . exclude empty string
const amountOfSentences = input.split(".").filter(x => x != '')
//divide length by amountOfSentences
const output = Math.ceil(length/amountOfSentences.length)
return output
}