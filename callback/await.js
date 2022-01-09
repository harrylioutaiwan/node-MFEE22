//await 是因為大家覺得 promise 還是不夠好看
//希望可以更像『同步』的程式
//await / async
//是 promise 的語法糖
// -> 還是要有 promise才可以用
// 看到 lib

let doWork = function (job, timer) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      //callback的設計上
      //通常第一個參數是錯誤
      //通常第二個參數會是結果
      reslove(`完成工作 ${job}`); //會把這個 Promoise 物件的狀態變成 fulfilled

      //如果發生錯誤
      //reject(err)
      //會把這一個 promise 物件狀態變成rejected
    }, timer);
  });
};

// 刷牙 --> 吃早餐 --> 寫功課

let dt = new Date();
console.log(`Start ${dt.toISOString()}`);

//await 必須放在 async 函式裡
//await 是一種『 暫停鍵 』，暫停到外包公司有結果為止
//而且結果會被回傳，放到 result1 這個變數裡面

async function main() {
  let result1 = await doWork("刷牙", 2000);
  let dt = new Date();
  console.log(`${result1} at ${dt.toISOString()}`);

  let result2 = await doWork("吃早餐", 3000);
  dt = new Date();
  console.log(`${result2} at ${dt.toISOString()}`);

  let result3 = await doWork("寫功課", 2000);
  dt = new Date();
  console.log(`${result3} at ${dt.toISOString()}`);
}

main();

//   //IIFE 立即被執行的函式
//   (async ()=>{

//   })();
