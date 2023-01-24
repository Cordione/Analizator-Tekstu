export function countApperances(input: string) {
  //split input by white spaces
  const splitInput = input.split(" ");
  //remove dot from last word of the sentences
  const wordsToFix = splitInput.filter((x) => x.includes("."));
  for (let index = 0; index < wordsToFix.length; index++) {
    const findPosition = splitInput.findIndex((x) => x.includes(wordsToFix[index]));
    const lenghtOfWordToFix = wordsToFix[index].length;
    let fixedWord = [...wordsToFix[index]];
    fixedWord.splice(lenghtOfWordToFix - 1, 1);
    splitInput.splice(findPosition, 1, fixedWord.join(""));
  }
  //create helpingArrays to store info
  const appearances: number[] = [];
  const usedWords: string[] = [];
  // Iterate throught array to find usedElements
  splitInput.forEach((element) => {
    let used = usedWords.find((x) => x === element) ? true : false;
    if (!used) {
      usedWords.push(element);
    }
  });
  //Then iterate throught usedWords and find how many times each element from used exist in splitInput.
  usedWords.forEach((element) => {
    const appearance = splitInput.filter((x) => x === element).length;
    appearances.push(appearance);
  });
  //Find most uses
  const mostTimes = Math.max(...appearances);
  //create output sentence based on passed Data
  let output = "";
  
  const verifyDraw = appearances.filter((x) => x == mostTimes);

  for (let index = 0; index < appearances.length; index++) {
    if (appearances[index] === mostTimes && verifyDraw.length > 1) {
      output += `Remis `;
      break;
    } else if (appearances[index] === mostTimes && verifyDraw.length === 1) {
      output += `${usedWords[index]} `;
    }
  }
  return [output, mostTimes];
}
