let doWork = function (job, timer) {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        //callback的設計上
        //通常第一個參數是錯誤
        //通常第二個參數會是結果
        reslove(`完成工作: ${job}`); //會把這個 Promoise 物件的狀態變成 fulfilled
  
        //如果發生錯誤
        //reject(err)
        //會把這一個 promise 物件狀態變成rejected
      }, timer);
    });
  };

let p1 = doWork("刷牙", 2000);
let p2 = doWork("吃早餐", 3000);
let p3 = doWork("寫功課", 2000);

//當三個全部都做完的時候，就會回傳
Promise.race([p1,p2,p3]).then((value)=>{
    console.log(value)
});


//看誰比較快
  
  