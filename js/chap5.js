"use strict";

console.log("chap5.jsが読み込まれました！");

// // 同期処理と非同期処理
// console.log("1. 処理を開始しました");

// setTimeout(() => {
//   console.log("3. 2秒が経過しました。(非同期処理)");
// }, 2000);

// console.log("2. 処理が完了しました");

// // --- コールバック地獄 ---
// console.log("コールバック地獄の開始...");

// setTimeout(() => {
//   console.log("jobA: 1秒が経過しました");
//   setTimeout(() => {
//     console.log("jobB: 2秒が経過しました");
//     setTimeout(() => {
//       console.log("jobC: 3秒が経過しました");
//     }, 3000);
//   }, 2000);
// }, 1000);

// --- promiseによる非同期処理の成功と失敗を定義 ---
// 1秒後に成功または失敗を返す非同期処理をシミュレートする関数を定義
// この関数は「Promise」オブジェクトを返す
const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    // resolve: 処理が成功したときに呼び出す関数
    // reject: 処理が失敗したときに呼び出す関数

    const isSuccess = Math.random() > 0.3;

    setTimeout(() => {
      if (false) {
        // 成功した場合はresolveを呼び出して結果を返す
        // これによりPromiseはfulfilled状態になる
        resolve(`${seconds}秒が経ちました！（成功）`);
      } else {
        // 失敗した場合はrejectを呼び出して結果を返す
        // これによりPromiseはrejected状態になる
        reject(new Error("エラーが発生しました（失敗）"));
      }
    }, seconds * 1000);
  });
};

// console.log("--- Promise処理の開始 ---");

// wait(5)
//   .then((successMessage) => {
//     // wait(5)がfulfilled状態になったら(resolveが呼ばれたら)、この処理が実行される
//     console.log("thenが実行されました");
//     console.log(successMessage);
//   })
//   .catch((errorMessage) => {
//     // wait(5)がrejected状態になったら(rejectが呼ばれたら)、この処理が実行される
//     console.log("catchが実行されました");
//     console.log(errorMessage.message);
//   })
//   .finally(() => {
//     // 成功・失敗にかかわらず最後に必ず実行される
//     console.log("finallyが実行されました");
//   });

// // 実行したい処理をasync関数として定義する
// const execAsync = async () => {
//   console.log("--- async/awaitの処理を開始 ---");

//   try {
//     const result = await wait(5);
//     console.log(result);
//   } catch (error) {
//     console.log("catchブロックが実行されました");
//     console.log(error);
//   }
//   console.log("execAsyncの処理が終了");
// };

// console.log("execAsync呼び出し前");
// execAsync();
// console.log("execAsync呼び出し後");

// fetch APIによるデータ取得
// Promiseチェーンで書く場合
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(console.log);

// async/awaitで書く場合（こっちが主流★）
const fetchUsers = async () => {
  console.log("async/awaitでfetchを開始");

  try {
    const response = await fetch("https://dummyjson.com/users");
    const users = await response.json();
    console.log("async/awaitxで取得したユーザー一覧: ", users);
  } catch (error) {
    console.error("エラーが発生しました: ", error);
  }
};

fetchUsers();
