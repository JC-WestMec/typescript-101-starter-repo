function sayPrime(n: number): string[] {
  let stringArr: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (
      (i % 2 == 0 && i != 2) ||
      (i % 3 == 0 && i != 3) ||
      (i % 5 == 0 && i != 5) ||
      (i % 7 == 0 && i != 7)
    ) {
      stringArr.push(i.toString());
    } else {
      stringArr.push("Prime");
    }
  }
  return stringArr;
}
console.log(sayPrime(50));
