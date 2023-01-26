export function countLetters(input: string): number {
  //Write regex to any other input than small and capital letters
  //Use regex to remove not matching elements
  //Return length of remaining array
  const reg = /[A-Za-z]/;
  const output = [...input].filter((x) => x.match(reg));
  return output.length;
}
