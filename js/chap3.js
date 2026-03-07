"use strict";

console.log("chap3.jsが読み込まれました！");

// --- 配列 ---
const fruits = ["りんご", "みかん", "バナナ"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// --- 要素の更新 ---
fruits[1] = "ブドウ";
console.log(fruits[1]);
console.log(fruits);

// --- 配列の長さ ---
console.log(fruits.length);

// --- push: 末尾に要素の追加 ---
const colors = ["赤", "青", "黄"];
colors.push("紫");
console.log(colors);

// --- pop: 末尾の要素を削除 ---
colors.pop();
console.log(colors);

// --- for文での配列ループ処理 ---
for (let i = 0; i < colors.length; i++) {
  console.log(`${i + 1}番目の色は${colors[i]}です`);
}

// --- forEach: 各要素に対する処理を繰り返す ---
colors.forEach((color, index) => {
  console.log(`${index + 1}番目の色は${color}です`);
});

// --- map: 各要素を加工して新しい要素を作る ---
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

// --- filter: 条件に合う要素だけを集めて新しい配列を作る ---
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// --- オブジェクトの作成 ---
const user = {
  name: "Hiroku",
  age: 34,
  region: "東京",
};
console.log(user);

// --- オブジェクトのプロパティへのアクセス（ドット記法） ---
console.log(`名前: ${user.name}`);
console.log(`年齢: ${user.age}`);

// --- オブジェクトのプロパティへのアクセス（ブラケット記法） ---
const keyName = "region";
console.log(`変数を使ったアクセス: ${user[keyName]}`);

// --- プロパティの追加と更新 ---
// 1. 追加
user.isAdmin = true;
console.log(user);

// 2. 更新
user.age = 26;
console.log(user);

// プリミティブ型（値渡し）
let a = 100;
let b = a; // aの値がコピーされたものがbに入る
b = 200;

console.log(a);
console.log(b);

// オブジェクト型（共有渡し）
let objA = {
  name: "Hiroku",
  age: 30,
};
let objB = objA; // objAのアドレスがコピーされたものがobjBに入る

objB.age = 34; // アドレスに格納してある値を書き換える
console.log(objA);

// オブジェクトの配列
const users = [
  { id: 1, name: "Hiroku", region: "Tokyo" },
  { id: 2, name: "Miroku", region: "Osaka" },
  { id: 3, name: "Hiroki", region: "Hokkaido" },
];

const userNames = users.map((user) => user.name);
console.log(userNames);

// filterを使って東京在住のユーザだけの配列を作る
const tokyoUsers = users.filter((user) => user.region === "Tokyo");
console.log(tokyoUsers);
