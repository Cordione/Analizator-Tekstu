import { countWhiteSpaces } from "./countWhiteSpaces";
export function longestSentenceByWhiteSpaces(input: string, byWhiteSpaces: boolean) {
  //Add Regex to split by . ? !
  const reg = /[\.\?\!]/;
  //Split sentences by reg exclude empty strings
  const inputSplit = input.split(reg).filter((x) => x != "");
  //Add variable to store position in inputSplit of shortest sentence, set it as 0 for now
  let position = 0;
  //Add variable to store length of shortest sentence, set it as undefined for now
  let length: undefined | number = undefined;
  //Then iterate throught inputSplit.length calling function countWord and update this 2 variables
  //Verify if inputSplit length is greater then 0
  if (inputSplit.length > 0) {
    for (let index = 0; index < inputSplit.length; index++) {
      const amountOfNonWhiteSigns = countWhiteSpaces(inputSplit[index], byWhiteSpaces);
      if (length == undefined) {
        length = amountOfNonWhiteSigns;
      } else if (length < amountOfNonWhiteSigns) {
        position = index;
        length = amountOfNonWhiteSigns;
        length++;
      }
    }
    return [inputSplit[position], length];
  } else {
    return ["", 0];
  }
}
