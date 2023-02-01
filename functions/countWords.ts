export function countWords(sentence: string): number {
  const haveAtLeastOneLetter = /[A-Za-z]/;
  const haveSpecialCharacters = /[$&+:;=@#|'<>^*()%-]/;
  //Split sentence by Space
  const splitedSentence = sentence.split(" ").filter((x) => x.match(haveAtLeastOneLetter) && !x.match(haveSpecialCharacters));

  return splitedSentence.length;
}
