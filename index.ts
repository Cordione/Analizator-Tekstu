import { countWhiteSpaces } from "./functions/countWhiteSpaces";
import { countLetters } from "./functions/countLetters";
import { countDigits } from "./functions/countDigits";
import { countWords } from "./functions/countWords";
import { sumOfNonWhiteSpaces } from "./functions/sumOfNonWhiteSpaces";
import { sumOfWords } from "./functions/sumOfWords";
import { countApperances } from "./functions/countAppearances";
import { countUniqueLetters } from "./functions/countUniqueLetters";
import { bySignsWhiteSpacesByLength } from "./functions/bySignsWhiteSpacesByLength";

function textAnalyzer(input: string, flag: string): string {
  //Reverse flag input (first element go to last spot and so on)  i.e "10101001"-> 10010101 | (0,1 ... n-1 n)=> n,n-1 ... 1,0
  const reversedFlag = [...flag].reverse();

  //create finalOutputString, empty as base, then add content based on ifs
  let finalOutputString = "";

  //Verify IF reversedFlag[0]  == 1 if so count amount of white spaces in input and pass data as: "ilość spacji: x"
  if (reversedFlag[0] == "1") {
    const amountOfWhiteSpaces = countWhiteSpaces(input, true);
    finalOutputString = `ilość spacji: ${amountOfWhiteSpaces}`;
  }

  //Verify IF reversedFlag[1]  == 1 if so count amount of letters in input and pass data as: "ilość liter: x"
  if (reversedFlag[1] == "1") {
    const amountOfLetters = countLetters(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `ilość liter: ${amountOfLetters}`;
  }

  //Verify IF reversedFlag[2]  == 1 if so count amount of of digits in input  and pass data as: "ilość cyfr: x"
  if (reversedFlag[2] == "1") {
    const amountOfDigits = countDigits(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Ilość cyfr: ${amountOfDigits}`;
  }

  //Verify IF reversedFlag[3]  == 1 if so count amount of words in input and pass data as: "ilość słów: x"
  if (reversedFlag[3] == "1") {
    const amountOfWords = countWords(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Ilość słów: ${amountOfWords}`;
  }

  //Verify IF reversedFlag[4]  == 1 if so count amount of letters excluding white spaces, count length, return sentence with shortest length, display how it looks i.e  "Look at me. There’s nothing left but silent epitaphs" => najkrótsze zdanie pod znaków nie białych: "Look at me", długość: x znaków.
  if (reversedFlag[4] == "1") {
    const shortest = bySignsWhiteSpacesByLength(input, false, true);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Najkrótsze zdanie pod kątem znaków nie białych: ${shortest[0]}, długość: ${shortest[1]}`;
  }

  //Verify IF reversedFlag[5]  == 1 if so count amount of words in input, count length, return sentence with least amount of words, display how it looks i.e  "Look at me. There’s nothing left but silent epitaphs" => najkrótsze zdanie pod kątem słów: "Look at me", długość: x słów.
  if (reversedFlag[5] == "1") {
    const shortest = bySignsWhiteSpacesByLength(input, true, true);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Najkrótsze zdanie pod kątem słów: ${shortest[0]}, długość: ${shortest[1]}`;
  }

  //Verify IF reversedFlag[6]  == 1 if so count amount of letters in input excluding white spaces, count length, return sentence with longest length, display how it looks i.e  "Look at me. There’s nothing left but silent epitaphs" => najdłuższe zdanie pod kątem słów: "There’s nothing left but silent epitaphs", długość: x znaków.
  if (reversedFlag[6] == "1") {
    const longest = bySignsWhiteSpacesByLength(input, false, false);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Najdłuższe zdanie pod kątem ilości znaków: ${longest[0]}, długość: ${longest[1]}`;
  }
  //Verify IF reversedFlag[7]  == 1 if so count amount of words in input, count length, return sentence with longest length, display how it looks i.e  "Look at me. There’s nothing left but silent epitaphs" => najdłuższe zdanie pod kątem słów: "Look at me", długość: x znaków.
  if (reversedFlag[7] == "1") {
    const longest = bySignsWhiteSpacesByLength(input, true, false);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Najdłuższe zdanie pod kątem słów: ${longest[0]}, długość: ${longest[1]}`;
  }
  //Verify IF reversedFlag[8]  == 1 sum all of non-white spaces in string, divide by amount of . in string, "Look at me. A million pictures on the cenotaph." --> średnia wielkość zdania: 19
  if (reversedFlag[8] == "1") {
    const nonWhiteSpacesAverage = sumOfNonWhiteSpaces(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Średnia ilość znaków w zdaniu: ${nonWhiteSpacesAverage}`;
  }
  //Verify IF reversedFlag[9]  == 1 sum all of words in string, divide by amount of . in string, "Look at me. A million pictures on the cenotaph." --> średnia wielkość zdania: 5
  if (reversedFlag[9] == "1") {
    const nonWhiteSpacesAverage = sumOfWords(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Średnia ilość słów w zdaniu: ${nonWhiteSpacesAverage}`;
  }
  //Verify IF reversedFlag[10]  == count how many times each word appears in string input, return one with most appearances, if draw write = "Remis". "Look, look at me! A million pictures on the cenotaph." -> Najwięcej razy wystąpiło: Look ,ilość wystąpień: 2
  if (reversedFlag[10] == "1") {
    const whichWordsAppearedMostOfTime = countApperances(input);
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    if (whichWordsAppearedMostOfTime[0] == "Remis ") {
      finalOutputString += `Było więcej niż jedno najczęśćiej występujące słowo także padł ${whichWordsAppearedMostOfTime[0]}, ilość wystąpień: ${whichWordsAppearedMostOfTime[1]}`;
    } else {
      finalOutputString += `Najczęściej występujące słowo ${whichWordsAppearedMostOfTime[0]}, ilość wystąpień: ${whichWordsAppearedMostOfTime[1]}`;
    }
  }
  //Verify IF reversedFlag[11]  == count how many times each letter appears in string input, return one with most appearances, if draw write all letters, and amount". "Look at me! " -> Najwięcej razy wystąpiło: o ,ilość wystąpień: 2
  if (reversedFlag[11] == "1") {
    const whichLetterAppearedMostOfTime = countUniqueLetters(input);
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += `Najczęściej występująca litera ${whichLetterAppearedMostOfTime[0]}, ilość wystąpień: ${whichLetterAppearedMostOfTime[1]}`;
  }
  return finalOutputString;
}
console.log(textAnalyzer("Look up. The sky is falling!", "111111111111"));
console.log("---------------------------");
console.log(textAnalyzer("", "111111111111"));
console.log("---------------------------");
console.log(textAnalyzer("Look at 123 cats of 4 houses.", "111111111111"));
