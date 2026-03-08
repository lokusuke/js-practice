"use strict";

console.log("chap4.jsが読み込まれました！");

// --- 関数の定義 ---
function sayHello() {
  console.log("こんにちは！");
  console.log("関数が呼び出されました！");
}

// --- 関数の呼び出し ---
sayHello();
sayHello();

// --- 引数ありの関数の定義 ---
function selfIntroduction(name, region) {
  console.log(`こんにちは、${name}です。${region}在住です。`);
}

// --- 引数を変えて関数を呼び出す ---
selfIntroduction("Hiroku", "Chiba");
selfIntroduction("Miroku", "Tokyo");

// --- デフォルト引数 ---
function greetingWithDefault(name, greeting = "こんばんは") {
  console.log(`${greeting}, ${name}さん！`);
}

greetingWithDefault("Hiroku");
greetingWithDefault("Hiroku", "ごきげんよう");

// --- 戻り値 ---
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

console.log(add(1, 2));

// --- オブジェクトが関数を持つ ---
const user = {
  name: "Hiroku",
  region: "Chiba",
  showSelfIntroduction() {
    console.log(`こんにちは！${this.name}です。${this.region}在住です。`);
  },
};

user.showSelfIntroduction();

// --- 文字列におけるオブジェクトのようなふるまい ---
const userName = "Hiroku";
console.log(userName.length);
console.log("すべての文字を大文字に変換: ", userName.toUpperCase());

// --- 関数式 ---
const greeting = function (name) {
  return `こんにちは！、${name}さん`;
};

console.log(greeting("Hiroku"));

// --- アロー関数 ---
const greetingAllow = (name) => {
  return `こんにちは！、${name}さん`;
};
console.log(greetingAllow("Miroku"));

// --- コールバック関数の定義 ---
const square = (num) => num * num;

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(square);
console.log(squaredNumbers);

// グローバルスコープとローカルスコープ
const globalVariable = "わたしはグローバルです";

const checkScope = () => {
  console.log(globalVariable);
  const localVariable = "僕はローカルです";
  if (true) {
    console.log(localVariable);
    const blockVariable = "ifブロックの中にいます";
  }
  //   console.log(blockVariable);
};

checkScope();
// console.log(localVariable);
