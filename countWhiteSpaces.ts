export function countWhiteSpaces(input: string, bool: boolean): number {
  //Take input and filter out white spaces
  //Return length of remaining elements in array
  if (bool) {
    const output = [...input].filter((x) => x == " ");
    return output.length;
  } else {
    const output = [...input].filter((x) => x != " ");
    return output.length
  }
}
