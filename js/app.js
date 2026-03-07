console.log("app.jsが読み込まれました!"); // コンソールに出力

// --- コメントの書き方 ---
// これは「1行コメント」です。スラッシュ２本の後の行末までテキストが無視されます
// コード意図を説明したり、メモを残すのに使います

/*
    これが「複数行コメント」です。
    スラッシュとアスタリスクで囲まれた範囲が
    全てコメントになります。
    長い説明や、一時的にコードブロック全体を
    無効化したい時に便利です。
*/

// --- デバッグの初歩 ---

let count = 5;
console.log("1. 計算前のcount", count);

count = count * 2;
console.log("2. 計算後のcount", count);

count = count + 10;
console.log("3. 最終的なcount", count);

// --- error message practice ----
// let message = "エラーの練習";
// console.log(massage);
