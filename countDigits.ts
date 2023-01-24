export function countDigits(input: string) {
  //Write regex to any other input than digits
  //Use regex to remove not matching elements
  //Return length
  const output = input.replace(/[^0-9]/g, "");
  return output.length;
}
