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

// --- エラーハンドリング ---
const badReceivedJson = '{"name":"Jiro","age":25,"isAdmin:false}';

try {
  const badUserObject = JSON.parse(badReceivedJson);
  console.log("パース成功: ", badUserObject);
} catch (error) {
  console.error("無効なJSONデータです: ", error.message);
} finally {
  console.log("処理を終了します");
}

// --- 高階関数 ---
const withLogging = (fn) => {
  console.log("--- 処理を開始します ---");
  fn();
  console.log("--- 処理を終了します ---");
};

const sayHello = () => {
  console.log("こんにちは！");
};

withLogging(sayHello);

// reduceで合計値を計算
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, current) => {
  console.log(`total: ${total}, current: ${current}`);
  return total + current;
}, 0);
console.log(sum);

// --- クロージャー ---
const createCounter = () => {
  let count = 0;

  const counter = () => {
    count++;
    console.log(count);
  };
  return counter;
};

const counter1 = createCounter();
counter1();
counter1();
counter1();

const counter2 = createCounter();
counter2();
counter2();
counter2();

// --- Mathオブジェクト ---
console.log(Math.PI);

const randomValue = Math.random();
console.log(randomValue);

console.log("1.8の切り捨て(floor): ", Math.floor(1.8));
console.log("1.2の切り上げ(ceil): ", Math.ceil(1.2));
console.log("1.4の四捨五入(round): ", Math.round(1.4));

console.log("最大値(max): ", Math.max(10, 5, 100, 30));
console.log("最小値(min): ", Math.min(19, 100, 3, 4));

const randomInt = Math.floor(Math.random() * 6) + 1;
console.log("1~6までのランダムな整数: ", randomInt);

// --- Dateオブジェクト ---
const now = new Date();
console.log("現在の日時: ", now);

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

console.log(`${year}年${month}月${day}日`);

const todayString = now.toLocaleDateString("ja-JP");
console.log(`今日のフォーマット済み日付: ${todayString}`);

// --- Mapオブジェクト ---
const userMap = new Map();

userMap.set("name", "Hiroku");
userMap.set("age", 25);

const addressKey = { city: "Tokyo" };
userMap.set(addressKey, "東京都");
console.log("userMap: ", userMap);

console.log("名前: ", userMap.get("name"));
console.log("住所: ", userMap.get(addressKey));

console.log("要素数: ", userMap.size);
console.log("ageキーは存在するか: ", userMap.has("age"));

// --- Setオブジェクト ---
const numberSet = new Set();

numberSet.add(1);
numberSet.add(5);
numberSet.add(10);
numberSet.add(5);
console.log("集合体: ", numberSet);
console.log("要素数: ", numberSet.size);
console.log("10は存在するか: ", numberSet.has(10));

const duplicateNumbers = [1, 2, 2, 3, 4, 4, 4, 5];
const uniqueSet = new Set(duplicateNumbers);
const uniqueNumbers = [...uniqueSet];
console.log("重複排除後の配列; ", uniqueNumbers);
