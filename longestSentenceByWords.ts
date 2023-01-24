import { countWords } from "./countWords";
export function longestSentenceByWords(input: string){
  //Take input, split it by .
  const inputSplit = input.split(".").filter((x) => x != "");
  //Add variable to store position in inputSplit of shortest sentence, set it as 0 for now
  let position = 0;
  //Add variable to store length of shortest sentence, set it as undefined for now
  let lenght: undefined | number = undefined;
  //Then iterate throught inputSplit.length calling function countWord and update this 2 variables
  for (let index = 0; index < inputSplit.length; index++) {
    const amountOfWords = countWords(inputSplit[index]);
    if (lenght == undefined) {
      lenght = amountOfWords;
    } else if (lenght < amountOfWords) {
      position = index;
      lenght = amountOfWords;
    }
  }
  return [inputSplit[position], lenght]
}
