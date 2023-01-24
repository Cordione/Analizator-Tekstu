import { countWords } from "./countWords";

export function sumOfWords(input: string){
// Pass input to count words
const length = countWords(input)
// Split by . exclude empty string
const amountOfSentences = input.split(".").filter(x => x != '')
//divide length by amountOfSentences
const output = Math.ceil(length/amountOfSentences.length)
return output
}