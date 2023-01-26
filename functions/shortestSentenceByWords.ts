import { countWords } from "./countWords";
export function shortestSentenceByWords(input: string) {
  //Take input, split it by .
  const inputSplit = input.split(".").filter((x) => x != "");
  //Add variable to store position in inputSplit of shortest sentence, set it as 0 for now
  let position = 0;
  //Add variable to store length of shortest sentence, set it as undefined for now
  let length: undefined | number = undefined;
  //Then iterate throught inputSplit.length calling function countWord and update this 2 variables
  //Verify if inputSplit.length is greater then 0

  if (inputSplit.length > 0) {
    for (let index = 0; index < inputSplit.length; index++) {
      const amountOfWords = countWords(inputSplit[index]);
      if (length == undefined) {
        length = amountOfWords;
      } else if (length > amountOfWords) {
        position = index;
        length = amountOfWords;
      }
    }
    return [inputSplit[position], length];
  } else {
    return ["", 0];
  }
}
