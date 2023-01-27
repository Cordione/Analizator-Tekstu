// Merge functions ShortestSentenceByWords, LongestSentenceByWords, ShortestSentenceByWhiteSpaces, LongestSentenceByWhiteSpaces
// For reusability

import { countWhiteSpaces } from "./countWhiteSpaces";
import { countWords } from "./countWords";

export function bySignsWhiteSpacesByLength(input: string, byWhiteSpaces: boolean, isShortest: boolean) {
  //Add Regex to split by . ? !
  const reg = /[\.\?\!]/g;
  //Split sentences by . ? ! exclude empty strings
  const inputSplit = input.split(reg).filter((x) => x != "");
  //Store information about element position by which it was splitted.
  if (inputSplit.length > 0 && inputSplit[0] != undefined) {
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
  }
  //Add variable to store position in inputSplit of shortest sentence, set it as 0 for now
  let position = 0;
  //Add variable to store length of shortest sentence, set it as undefined for now
  let length: undefined | number = undefined;
  //Then iterate throught inputSplit.length calling function countWord and update this 2 variables
  //Verify if inputSplit.length is greater then 0
  if (inputSplit.length > 0) {
    for (let index = 0; index < inputSplit.length; index++) {
      //set types of amount
      let amount: number | undefined;
      //verify first bool
      if (byWhiteSpaces) {
        amount = countWords(inputSplit[index]);
      }
      if (!byWhiteSpaces) {
        amount = countWhiteSpaces(inputSplit[index], byWhiteSpaces);
      }
      //if length is not defined set is as equal to amount
      if (length == undefined) {
        length = amount;
      }
      //if isShortest
      if (isShortest && length != undefined && amount != undefined) {
        if (length > amount) {
          position = index;
          length = amount;
        }
      }
      //if !isShortest
      if (!isShortest && length != undefined && amount != undefined) {
        if (length < amount) {
          position = index;
          length = amount;
        }
      }
    }
    return [inputSplit[position], length];
  } else {
    return ["", 0];
  }
}
