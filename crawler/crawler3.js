const axios = require("axios");
const { readFile } = require("fs/promises");

(async () => {
  try {
      //根據變數去抓資料
      //從 stock.txt 讀出代碼
    let stockNo = await readFile ('stock.txt', 'utf-8');
    let queryDate = 20220109;
    let data = await axios.get(
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
