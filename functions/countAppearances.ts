export function countApperances(input: string) {
  //split input by white spaces
  const splitInput = input.split(" ");
  //remove . , ! ? from last word of the sentences
  const wordsToFix = splitInput.filter((x) => x.includes(".") || x.includes("!") || x.includes("?") || x.includes(","));
  for (let index = 0; index < wordsToFix.length; index++) {
    const findPosition = splitInput.findIndex((x) => x.includes(wordsToFix[index]));
    const lengthOfWordToFix = wordsToFix[index].length;
    let fixedWord = [...wordsToFix[index]];
    fixedWord.splice(lengthOfWordToFix - 1, 1);
    splitInput.splice(findPosition, 1, fixedWord.join(""));
  }
  //create helpingArrays to store info
  const appearances: number[] = [];
  const usedWords: string[] = [...new Set(splitInput)].filter((x) => x != "");

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
  //Verify if input length is greater then 0 and split input[0] is different then ""
  console.log(splitInput[0] != "" && splitInput.length > 0);
  if (splitInput[0] != "" && splitInput.length > 0) {
    for (let index = 0; index < appearances.length; index++) {
      if (appearances[index] === mostTimes && verifyDraw.length > 1) {
        output += `Remis `;
        break;
      } else if (appearances[index] === mostTimes && verifyDraw.length === 1) {
        output += `${usedWords[index]} `;
      }
    }
    return [output, mostTimes];
  } else {
    return ["", 0];
  }
}
