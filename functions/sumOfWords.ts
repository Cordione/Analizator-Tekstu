import { countWords } from "./countWords";

export function sumOfWords(input: string) {
  //Add Regex to split by . ? !
  const reg = /[\.\?\!]/g;
  // Pass input to count words
  const length = countWords(input);
  // Split by . ! ? exclude empty string
  const amountOfSentences = input.split(reg).filter((x) => x != "");
  //Verify if length && amount of sentences != 0
  if (length != 0 && amountOfSentences.length != 0) {
    //divide length by amountOfSentences
    const output = Math.ceil(length / amountOfSentences.length);
    return output;
  } else {
    return 0;
  }
}
