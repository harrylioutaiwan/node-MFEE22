// const axios = require("axios");
// (async () => {
//   try {
//     let data = await axios.get(
//       "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220109&stockNo=2330&_=1641716316315"
//     );
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// })();

//老師的寫法
const axios = require("axios");
(async () => {
  let queryDate = 20220109;
  let stockNo = 2330;
  try {
    let data = await 
    // axios.get(
    //   `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${queryDate}&stockNo=${stockNo}&_=1641716316315`
    // );
    axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        //這裡可以放一些設定
        //params: 放 query string 的參數
        params:{
          response:"json",
          date:queryDate,
          stockNo,
        }
      }
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
