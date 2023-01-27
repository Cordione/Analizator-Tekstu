import { countWhiteSpaces } from "./countWhiteSpaces";
export function longestSentenceByWhiteSpaces(input: string, byWhiteSpaces: boolean) {
  //Add Regex to split by . ? !
  const reg = /[\.\?\!]/g;
  //Split sentences by . ? ! exclude empty strings
  const inputSplit = input.split(reg).filter((x) => x != "");
  //Store information about element position by which it was splitted.
  const splitters = [...input.matchAll(reg)];
  //Add missing . ! ? to sentences
  for (let index = 0; index < inputSplit.length; index++) {
    //create helping array to split input by signs
    const modifiedInputSplit = [...inputSplit[index]];
    // push removed splitter to sentence
    modifiedInputSplit.push(splitters[index][0]);
    //join array
    const singleSentenceWithEndingSign = modifiedInputSplit.join("");
    //overwrite
    inputSplit.splice(index, 1, singleSentenceWithEndingSign);
  }

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
      }
    }
    return [inputSplit[position], length];
  } else {
    return ["", 0];
  }
}
