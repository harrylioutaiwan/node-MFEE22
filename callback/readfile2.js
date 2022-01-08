// const { readFile } = require("fs");

// readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
//   // insert to mysql
// });

//改成 Promise
// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。
const { readFile } = require("fs");

const readFilePromise = new Promise((reslove, reject) => {
  readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      reslove(data);
      // insert to mysql
    }
  });
});

// 確認目前的狀態
console.log(readFilePromise); //pending

readFilePromise
  .then((data) => {
    console.log(`從 resolve 傳來的 data 內容: ${data}`);
  })
  .catch((err) => {
    console.log(`從 reject 傳來的 data 內容: ${err}`);
  });
