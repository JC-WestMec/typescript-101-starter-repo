// function reverseString(str: string): string {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello World"));

// function reverseString(str: string): string {
//   let reversedStr: string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }
// console.log(reverseString("Hello World"));

function reverseString(str: string): string {
  let stringArr: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    stringArr.push(str[i]);
  }
  return stringArr.join("");
}
console.log(reverseString("Hello World"));

function isPalindrome(str: string): boolean {
  return str === reverseString(str);
  // if (reverseString(str) === str) {
  //   return true;
  // } else {
  //   return false;
  // }
  // return reverseString(str) === str ? true : false;
}
console.log(isPalindrome("tacocat"));
