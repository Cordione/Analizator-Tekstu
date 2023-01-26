export function countUniqueLetters(input: string) {
  //create regex to remove other input than letters
  const reg = /[A-Za-z]/;
  //split array, remove non letter characters
  const splitInput = [...input].filter((x) => x.match(reg));
  //create 2 helping arrays
  const appearances: number[] = [];
  const uniqueLetters: string[] = [];
  // Iterate throught array to find usedLetters
  splitInput.forEach((element) => {
    let used = uniqueLetters.find((x) => x.toLowerCase() === element.toLowerCase()) ? true : false;
    if (!used) {
      uniqueLetters.push(element);
    }
  });
  //Then iterate throught uniqueLetters and find how many times each element from used exist in splitInput.
  uniqueLetters.forEach((element) => {
    const appearance = splitInput.filter((x) => x.toLowerCase() === element.toLowerCase()).length;
    appearances.push(appearance);
  });
  //Find most uses
  const mostTimes = Math.max(...appearances);
  //create output sentence based on passed Data
  let output = "";

  for (let index = 0; index < appearances.length; index++) {
    if (appearances[index] === mostTimes) {
      output += `${uniqueLetters[index]} `;
      break;
    }
  }
  return [output, mostTimes];
}
