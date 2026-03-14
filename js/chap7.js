"use strict";

console.log("chap7.jsが読み込まれました！");

// --- JSON ---
const user = {
  name: "Hiroku",
  age: 34,
  isAdmin: true,
};

// 1. オブジェクト->JSON文字列に変換(JSON.stringify)
const jsonString = JSON.stringify(user);
console.log(`JSON文字列: ${jsonString}`);
console.log("JSON文字列の型: ", typeof jsonString);

// 2. JSON文字列->オブジェクトに変換（JSON.parse）
const receivedJson = '{"name":"Jiro","age":25,"isAdmin":false}';
const userObject = JSON.parse(receivedJson);
console.log("JSONパース後のオブジェクト: ", userObject);
console.log("JSONパース後の型: ", typeof userObject);
