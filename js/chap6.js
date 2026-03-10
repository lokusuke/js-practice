"use strict";

console.log("chap6.jsが読み込まれました！");

// --- ブロックスコープ ---
// var で宣言した場合
if (true) {
  var varVariable = "ブロック外でも有効";
}
console.log(varVariable);

for (var varCounter = 0; varCounter < 3; varCounter++) {
  console.log(varCounter);
}

console.log(varCounter);

// let, constで宣言した場合
if (true) {
  let blockScopeVariable = "ブロックの中で有効";
  console.log(blockScopeVariable);
}
// console.log(blockScopeVariable);

for (let i = 0; i < 3; i++) {
  console.log(i);
}
// console.log(i);

// --- アロー関数 ---
// functionキーワードを使う場合
function funcSayHello() {
  console.log("こんにちは！");
  console.log("functionキーワードの関数が呼び出されました");
}
funcSayHello();

// アロー関数で記述する場合
const arrowSayHello = () => {
  console.log("こんばんは！");
  console.log("アロー関数が呼び出されました");
};
arrowSayHello();

// オブジェクト型に「thisをつかう関数」を定義する場合はfunctionキーワードで記述する
// functionキーワードは独自のthisをもっていて、この場合はuserオブジェクトを示す
// 一方でアロー関数は独自のthisをもたないため、thisを使う場合はfunctionキーワードを使う
const user = {
  name: "Hiroku",
  region: "Chiba",
  showSelfIntroduction() {
    console.log(`こんにちは！${this.name}です。${this.region}在住です。`);
  },
};

// --- テンプレートリテラル ---
const userName = "Hiroku";
const age = 34;

// 従来の記法
const message1 =
  "こんにちは" + userName + "さん。 \n" + "来年で" + (age + 1) + "歳です。";
console.log(message1);

// テンプレートリテラル
const message2 = `こんにちは、${userName}さん。
来年で${age}歳です。`;
console.log(message2);
