"use strict";

console.log("chap2.jsが読み込めれました！");

// --- 変数 let ---
// 1. 宣言（箱の用意）
let userName;
console.log(userName);

// 2. 代入
userName = "Hiroku";
console.log(userName);

// 3. 宣言と代入を同時に行う（一般的）
// let age = 25;
// console.log(age);

// 4. 再代入
// age = 26;
// console.log(age);

// --- 定数 const ---
const BIRTHDAY = "1991-03-24";
console.log(BIRTHDAY);

// 定数には再代入できない（エラーが発生する）
// BIRTHDAY = "2001-03-24";

// --- String(文字列)---
const userName2 = "Taro";
console.log(userName2);
console.log(typeof userName2);

const greeting = `こんにちは、${userName2}`;
console.log(greeting);

// --- Number（数値） ---
// 整数も少数もnumber型になる
const userAge2 = 30;
const rate = 0.1;
console.log(userAge2, rate);
console.log(typeof userAge2, typeof rate);

// --- Boolean(真偽値)---
const isAdult = true;
console.log(typeof isAdult);

// --- Undefined ---
let value;
console.log(value);
console.log(typeof value);

// --- Null ---
const stock = null;
console.log(typeof stock);

// ---算術演算子 ---
console.log("1 + 2 = ", 1 + 2);
console.log("6 - 4 = ", 6 - 4);
console.log("5 * 6 = ", 5 * 6);
console.log("24 / 3 = ", 24 / 3);
console.log("10 % 3 = ", 10 % 3);
console.log("2 ** 4 = ", 2 ** 4);

let count = 10;
let count2 = 20;
console.log("++count: ", ++count);
console.log("count2++: ", count2++);
console.log("count2の最終的な値:", count2);

// --- 代入演算子 ---
let totalPrice = 1000;
totalPrice += 500;
console.log(`加算後の値: ${totalPrice}`);

totalPrice -= 200;
console.log(`減算後の値: ${totalPrice}`);

// --- 関係演算子 ---
const age = 20;
console.log("age > 18: ", age > 18);
console.log("age >= 20: ", age >= 20);

const numValue = 1;
const stringValue = "1";

console.log('1 === "1":', numValue === "1");
console.log('1 !== "1":', numValue !== stringValue);
console.log('1 == "1":', numValue == stringValue);

// --- 三項演算子 ---
const age2 = 25;
const userType = age2 >= 20 ? "成人" : "未成年";
console.log("ユーザー種別:", userType);

// --- 論理演算子 ---
const harLicense = true;
const isTierd = false;
console.log("運転できるか？（AND）:", harLicense && isTierd);

const isHoliday = true;
const isSunny = false;
console.log("外出日和か？（OR）:", isHoliday || isSunny);

console.log("isHolidayの反転（NOT):", !isHoliday);

// --- truthy/falsyと論理演算子の応用 ---
const receivedUsername = "Hiroku";
const displayName = receivedUsername || "Guest";
console.log("表示名:", displayName);

receivedUsername && console.log("ようこそ！", receivedUsername);

// --- if文 ---
const score = 50;

if (score > 80) {
  console.log("素晴らしい！合格です！");
} else if (score > 60) {
  console.log("合格です！");
} else {
  console.log("残念！不合格です");
}

//--- switch文 ---
const signal = "y";

switch (signal) {
  case "red":
    console.log("とまれ");
    break;
  case "yellow":
    console.log("注意");
    break;
  case "blue":
    console.log("進め");
    break;
  default:
    console.log("信号の色ではありません");
}

// --- for文 ---
for (let i = 1; i < 5; i++) {
  console.log(`${i}回目のループです`);
}

// --- while文 ---
let j = 1;
while (j <= 5) {
  console.log(`${j}回目のループです`);
  j++;
}

let undeclaredVariable = "Hiroku";
console.log(undeclaredVariable);
