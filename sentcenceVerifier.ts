import { checkWords } from "./wordVerifier";

export function sentenceVerifier(input: string) {
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
  //split by space, ensure that we store words that only contain at least one letter, then ensure this words does not contain special characters
  let amountOfSentences = 0;
  for (let index = 0; index < inputSplit.length; index++) {
    const abc = checkWords(inputSplit[index]);
    if (abc.length > 0) {
      amountOfSentences++;
    }
  }
}

sentenceVerifier("Ala ma ko$t3a. A Ania psa. aha");
