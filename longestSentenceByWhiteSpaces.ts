import { countWhiteSpaces } from "./countWhiteSpaces";
export function longestSentenceByWhiteSpaces(input: string, byWhiteSpaces: boolean): string {
  //Split sentences by . exclude empty strings
  const inputSplit = input.split(".").filter((x) => x != "");
  //Add variable to store position in inputSplit of shortest sentence, set it as 0 for now
  let position = 0;
  //Add variable to store length of shortest sentence, set it as undefined for now
  let lenght: undefined | number = undefined;
  //Then iterate throught inputSplit.length calling function countWord and update this 2 variables
  for (let index = 0; index < inputSplit.length; index++) {
    const amountOfNonWhiteSigns = countWhiteSpaces(inputSplit[index], byWhiteSpaces);
    if (lenght == undefined) {
      lenght = amountOfNonWhiteSigns;
    } else if (lenght < amountOfNonWhiteSigns) {
      position = index;
      lenght = amountOfNonWhiteSigns;
    }
  }
  return `najdłuższe zdanie pod kątem ilości znaków: ${inputSplit[position]}, długość: ${lenght}`;
}
