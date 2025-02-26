// function reversestring
/**
 objective: pass in a string and return the string reversed
 * @param str - passed in string
 * @returns str - reversed string
 */

// function reverseString(str: string): string {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello World"));

function reverseString(str: string): string {
  let reversedStr: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("Hello World"));
