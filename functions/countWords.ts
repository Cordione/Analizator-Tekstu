export function countWords(input: string): number {
  //Split input by space, exclude empty inputs and return length
  const output = input.split(" ").filter((x) => x != "").length;
  return output;
}
