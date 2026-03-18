"use strict";

// 問題1
const getUserName = (user) => {
  // try...catch
  try {
    // JSON文字列をパース
    const userObject = JSON.parse(user);
    console.log(userObject);

    // パースしたオブジェクトにnameキーが含まれていなければエラー
    if (!("name" in userObject)) {
      throw new Error("nameキーを含んでいません");
    }
    return userObject.name;
  } catch (error) {
    console.error("無効なJSONデータです: ", error);
    return "Unknown";
  }
};

const userJsonString = '{"Name": "Hiroku","age": "30"}';
const name = getUserName(userJsonString);
console.log(name);

// 問題2
const cartItems = [
  { name: "ノートPC", price: 120000, quantity: 1 },
  { name: "マウス", price: 3000, quantity: 2 },
  { name: "キーボード", price: 5000, quantity: 1 },
];

const totalObject = cartItems.reduce(
  (total, current) => {
    return {
      totalAmount: total.totalAmount + current.price * current.quantity,
      totalQuantity: total.totalQuantity + current.quantity,
    };
  },
  { totalAmount: 0, totalQuantity: 0 },
);

console.log(totalObject);

// 問題3
const createCounter = () => {
  let count = 0;

  const counterObject = {
    up() {
      count++;
    },
    down() {
      count--;
    },
    getValue() {
      console.log(count);
    },
  };
  return counterObject;
};

const counterObject1 = createCounter();
counterObject1.up();
counterObject1.up();
counterObject1.up();
counterObject1.up();
counterObject1.up();
counterObject1.down();
counterObject1.getValue();

// 問題4
const userData = [
  { id: 1, name: "Taro", region: "Tokyo" },
  { id: 2, name: "Jiro", region: "Osaka" },
  { id: 3, name: "Saburo", region: "Tokyo" },
  { id: 1, name: "Taro", region: "Tokyo" }, // 重複データ
];

// 4-1
const userRegion = userData.map((data) => data.region);
console.log(userRegion);
const userRegionSet = new Set(userRegion);
console.log(userRegionSet);
console.log(userRegionSet.size);

// 4-2
const userMap = new Map();
userData.forEach((user) => {
  userMap.set(user.id, user);
});

// 4-3
console.log("IDが2のユーザ: ", userMap.get(2));
