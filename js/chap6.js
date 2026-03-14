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

// --- 分割代入 ---
// 配列の分割代入
const team = ["Taro", "Jiro", "Saburou"];
const [captain, ...members] = team;
console.log(captain, members);

// オブジェクトの分割代入
const userProfile = {
  userName: "Hiroku",
  userAge: 34,
  isAdmin: true,
  region: "Tokyo",
  greet() {
    console.log(`こんにちは、${this.userName}です`);
  },
};

const { userName: uName, userAge = 20, ...otherInfo } = userProfile;
console.log(uName, userAge);
console.log(uName, userAge, otherInfo);

const showUserInfo = ({ userName, userAge }) => {
  console.log(`ようこそ、${userName}さん${userAge}歳`);
};

showUserInfo(userProfile);

// --- スプレッド構文 ---
const arr1 = [1, 2, 3];
const copyArr1 = [...arr1, 4, 5];
console.log(copyArr1);

const obj1 = { a: 1, b: 2 };
const copyObj1 = { ...obj1, a: 5 };
console.log(copyObj1);

// --- クラス ---
class User {
  #birthYear; // プライベートプロパティ(クラス外部から閲覧できない)
  constructor(name, birthYear) {
    this.name = name;
    this.#birthYear = birthYear;
  }

  greet() {
    console.log(
      `こんにちは！${this.name}です。年齢は${this.#calcurateAge()}歳です。`,
    );
  }

  #calcurateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.#birthYear;
  }
}

const user1 = new User("Hiroku", 1991);
user1.greet();
// user1.#calcurateAge();

// 継承
class StudentUser extends User {
  constructor(name, birthYear, favoriteSubject) {
    super(name, birthYear);
    this.favoriteSubject = favoriteSubject;
  }

  greet() {
    console.log(`得意科目は${this.favoriteSubject}です`);
  }
}

const student1 = new StudentUser("Hiroku", 1991, "物理");
student1.greet();

// インスタンスのプロパティは簡単に確認や書き換えができてしまう
// プロパティに#を付けるとクラス外部から閲覧できなくなる
// console.log(student1.#birthYear);
// student1.#birthYear = 2000;
// console.log(student1.#birthYear);
