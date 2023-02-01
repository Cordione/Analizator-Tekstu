// Merge functions ShortestSentenceByWords, LongestSentenceByWords, ShortestSentenceByWhiteSpaces, LongestSentenceByWhiteSpaces
// For reusability

import { countWords } from "./countWords";

export function byWords(input: string, isShortest: boolean) {
  //Add Regex to split by . ? !
  const endingCharacters = /[\.\?\!]/g;
  const charactersToMatch = /[A-Za-z]/;
  const splitedSentences = input.split(endingCharacters);
  const modifiedSentences: string[][] = [];
  const splitters: string[] = [];
  const inputSplit = input.split(endingCharacters).filter((x) => x.match(charactersToMatch));

  if (inputSplit.length > 0) {
    const splitters = [...input.matchAll(endingCharacters)];
    //Add missing . ! ? to sentences
    for (let index = 0; index < inputSplit.length; index++) {
      //create helping array to split input by signs
      //verify if array contains splitter for sentence
      if (splitters[index] != undefined) {
        const modifiedInputSplit = [...inputSplit[index]];
        // push removed splitter to sentence
        modifiedInputSplit.push(splitters[index][0]);
        //join array
        const singleSentenceWithEndingSign = modifiedInputSplit.join("");
        //overwrite
        inputSplit.splice(index, 1, singleSentenceWithEndingSign);
      }
    }
  }
  //Add variable to store position in inputSplit of shortest sentence, set it as 0 for now
  let position = 0;
  //Add variable to store length of shortest sentence, set it as undefined for now
  let length: undefined | number = undefined;
  //Then iterate throught inputSplit.length calling function countWord and update this 2 variables
  //Verify if inputSplit.length is greater then 0
  let amount: number | undefined;
  if (inputSplit.length > 0) {
    for (let index = 0; index < inputSplit.length; index++) {
      //set types of amount
      //verify first bool
      amount = countWords(inputSplit[index]);

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
  }
  if (amount != undefined && amount > 0) {
    return [inputSplit[position], length];
  } else {
    return ["", 0];
  }
}
