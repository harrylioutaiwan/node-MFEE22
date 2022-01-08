// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。
const { readFile } = require ("fs");
let readfilePromise = new Promise((reslove), reject) 
readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  // insert to mysql
});

