"use strict";

// --- practice 1 ---
const price = 1500;
const TAX_RATE = 0.1;

console.log(`税込価格は${price * (1 + TAX_RATE)}です。`);

// --- practice 2 ---
const age = 18;

if (age >= 65) {
  console.log("高齢者です");
} else if (age >= 20 && age < 65) {
  console.log("成人です");
} else {
  console.log("未成年です");
}

// --- practice 3 ---

const a = 3;
console.log(a % 3 === 0);

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
