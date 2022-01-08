//

//1.promise是一個物件
//new Promise()
//Promise()是一個建構式，他需要一個參數
//這個executor也是一個函式 function()，有兩個參數 resolve reject
//2.// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。
//reslove 是成功的時候呼叫的
//reject 是成功的時候呼叫的
//3.非同步


//Promise 物件會有狀態的移轉
//剛建立的時候狀態會是pending


let doWork = function (job, timer, callback) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      //callback的設計上
      //通常第一個參數是錯誤
      //通常第二個參數會是結果
      reslove(null, `完成工作 ${job}`); //會把這個 Promoise 物件的狀態變成 fulfilled

      //如果發生錯誤
      //reject(err)
      //會把這一個 promise 物件狀態變成rejected
    }, timer);
  });
};

// 刷牙 --> 吃早餐 --> 寫功課
let dt = new Date();
console.log(`Start ${dt.toISOString()}`);
// let work1Promise = doWork("刷牙", 2000);
// work1Promise.then((result) => {
//   let dt = new Date();
//   console.log(`${result} at ${dt.toISOString()}`);
// });

doWork("刷牙", 2000)
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);

    return doWork("吃早餐", 3000);
  })
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
    return doWork("寫功課", 2000);
  })
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
  })
  .catch((err) => {
    // 處理錯誤
    console.error(err);
  });
