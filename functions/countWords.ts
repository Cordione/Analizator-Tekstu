export function countWords(input: string): number {
  //Split input by space, exclude empty inputs and return length
  //Add regex to ensure that word contains at least one letter
  const reg = /[a-zA-Z]/;
  const output = input.split(" ").filter((x) => x != "" && x.match(reg)).length;
  return output;
}
