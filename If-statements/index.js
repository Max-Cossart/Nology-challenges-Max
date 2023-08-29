let n = "dog";

if (typeof n !== "number") {
  console.log("invalid n");
} else if (n % 2 === 0) {
  console.log("n is even");
} else {
  console.log("n is odd");
}

let x = 8;
let y = 8;

if (x === y) {
  console.log("x is equal to y");
} else if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is less than y");
}

let userInput = 7;

if (typeof userInput === "number") {
  console.log(userInput ** 2);
} else if (typeof userInput === "string") {
  console.log(userInput);
} else {
  console.log("invalid Input");
}
