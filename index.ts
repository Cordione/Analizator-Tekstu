import { countWhiteSpaces } from "./countWhiteSpaces";
import { countLetters } from "./countLetters";
import { countDigits } from "./countDigits";
import { countWords } from "./countWords";
import { shortestSentenceByWhiteSpaces as shortestSentenceByWhiteSpaces } from "./shortestSentenceByWhiteSpaces";
import { shortestSentenceByWords } from "./shortestSentenceByWords";
import { longestSentenceByWhiteSpaces } from "./longestSentenceByWhiteSpaces";
import { longestSentenceByWords } from "./longestSentenceByWords";
import { sumOfNonWhiteSpaces } from "./sumOfNonWhiteSpaces";
import { sumOfWords } from "./sumOfWords";
import { countApperances } from "./countAppearances";
import { countUniqueLetters } from "./countUniqueLetters";

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
    finalOutputString += amountOfDigits;
  }

  //Verify IF reversedFlag[3]  == 1 if so count amount of words in input and pass data as: "ilość słów: x"
  if (reversedFlag[3] == "1") {
    const amountOfWords = countWords(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += amountOfWords;
  }

  //Verify IF reversedFlag[4]  == 1 if so count amount of letters excluding white spaces, count length, return sentence with shortest length, display how it looks i.e  "Look at me. There’s nothing left but silent epitaphs" => najkrótsze zdanie pod znaków nie białych: "Look at me", długość: x znaków.
  if (reversedFlag[4] == "1") {
    const shortest = shortestSentenceByWhiteSpaces(input, false);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += shortest;
  }

  //Verify IF reversedFlag[5]  == 1 if so count amount of words in input, count length, return sentence with least amount of words, display how it looks i.e  "Look at me. There’s nothing left but silent epitaphs" => najkrótsze zdanie pod kątem słów: "Look at me", długość: x słów.
  if (reversedFlag[5] == "1") {
    const shortest = shortestSentenceByWords(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += shortest;
  }

  //Verify IF reversedFlag[6]  == 1 if so count amount of letters in input excluding white spaces, count length, return sentence with longest length, display how it looks i.e  "Look at me. There’s nothing left but silent epitaphs" => najdłuższe zdanie pod kątem słów: "There’s nothing left but silent epitaphs", długość: x znaków.
  if (reversedFlag[6] == "1") {
    const longest = longestSentenceByWhiteSpaces(input, false);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += longest;
  }
  //Verify IF reversedFlag[7]  == 1 if so count amount of words in input, count length, return sentence with longest length, display how it looks i.e  "Look at me. There’s nothing left but silent epitaphs" => najdłuższe zdanie pod kątem słów: "Look at me", długość: x znaków.
  if (reversedFlag[7] == "1") {
    const longest = longestSentenceByWords(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += longest;
  }
  //Verify IF reversedFlag[8]  == 1 sum all of non-white spaces in string, divide by amount of . in string, "Look at me. A million pictures on the cenotaph." --> średnia wielkość zdania: 19
  if (reversedFlag[8] == "1") {
    const nonWhiteSpaces = sumOfNonWhiteSpaces(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += nonWhiteSpaces;
  }
  //Verify IF reversedFlag[9]  == 1 sum all of words in string, divide by amount of . in string, "Look at me. A million pictures on the cenotaph." --> średnia wielkość zdania: 5
  if (reversedFlag[9] == "1") {
    const nonWhiteSpaces = sumOfWords(input);
    //IF finalOutputString will contain anything add new line
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += nonWhiteSpaces;
  }
  //Verify IF reversedFlag[10]  == count how many times each word appears in string input, return one with most appearances, if draw write = "Remis". "Look, look at me! A million pictures on the cenotaph." -> Najwięcej razy wystąpiło: Look ,ilość wystąpień: 2
  if (reversedFlag[10] == "1") {
    const whichWordsAppearedMostOfTime = countApperances(input);
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += whichWordsAppearedMostOfTime;
  }
  //Verify IF reversedFlag[11]  == count how many times each letter appears in string input, return one with most appearances, if draw write all letters, and amount". "Look at me! " -> Najwięcej razy wystąpiło: o ,ilość wystąpień: 2
  if (reversedFlag[11] == "1") {
    const whichWordsAppearedMostOfTime = countUniqueLetters(input);
    if (finalOutputString.length > 0) {
      finalOutputString += "\r\n";
    }
    finalOutputString += whichWordsAppearedMostOfTime;
  }
  return finalOutputString;
}

console.log(`Ilość spacji:`, textAnalyzer("Look at me", "1"));
console.log("---------------------------");
console.log(`Ilość liter:`, textAnalyzer("Look at me", "10"));
console.log(`Ilość spacji i liter:`, textAnalyzer("Look at me", "11"));
console.log("---------------------------");
console.log(`Ilość cyfr:`, textAnalyzer("Look at m23e", "100"));
console.log("---------------------------");
console.log(`Ilość słów:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "1000"));
console.log(`Ilość liter:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "1010"));
console.log("---------------------------");
console.log(`Najkrótsze zdanie, ilości znaków:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "10000"));
console.log("---------------------------");
console.log(`Najkrótsze zdanie, ilość słow:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "100000"));
console.log("---------------------------");
console.log(`Najdłuższe zdanie, ilość znaków:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "1000000"));
console.log("---------------------------");
console.log(`Najdłuższe zdanie, ilość słów:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "10000000"));
console.log("---------------------------");
console.log(`Średnia ilość znaków w zdaniu:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "100000000"));
console.log("---------------------------");
console.log(`Średnia ilość słów w zdaniu:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "1000000000"));
console.log("---------------------------");
console.log(`Ilość wystąpień:`, textAnalyzer("Look at me. There’s nothing left but silent epitaphs.", "10000000000"));
console.log(`Ilość wystąpień:`, textAnalyzer("Look Look at me. There’s  nothing left left but silent epitaphs.", "10000000000"));
console.log(`Ilość wystąpień:`, textAnalyzer("Look Look at me. There’s  nothing left left but silent epitaphs.", "100000000000"));
