"use strict";

console.log("chap5-exercise.jsが読み込まれました！");

// practice 1
// Promiseオブジェクトを返す関数を作る
const delayMessage = (num) => {
  return new Promise((resolve, reject) => {
    // resolveかrejectで処理を分ける
    const result = num >= 0;

    setTimeout(() => {
      if (result) {
        // resolveが呼ばれたら
        resolve(`${num}ミリ秒待機しました`);
      } else {
        // rejectが呼ばれたら
        reject(new Error("負の時間は待機できません"));
      }
    }, num);
  });
};

delayMessage(1000)
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage.message);
  });

// practice 2

// 練習用APIのURLを定義
const apiUrl = "https://jsonplaceholder.typicode.com/todos/5";

// ToDoデータを取得する関数の定義
const fetchTodo = async () => {
  // 1. fetch()でデータを取得
  // 4. try...catchを導入
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("サーバーエラーが発生しました");
    }

    // 2. JSON -< JSが扱えるオブジェクトに変換
    const todoContent = await response.json();

    // 3. titleプロパティを取り出して表示
    const todoTitle = todoContent.title;
    console.log("取得したToDoタイトル: ", todoTitle);
  } catch (error) {
    console.error("データの取得に失敗しました: ", error);
  }
};

fetchTodo();
