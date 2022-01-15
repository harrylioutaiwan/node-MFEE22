const axios = require("axios");
const { readFile } = require("fs/promises");
const moment = require("moment");

(async () => {
  try {
    //根據變數去抓資料
    //從 stock.txt 讀出代碼
    let stockNo = await readFile("stock.txt", "utf-8");
    //修改成自動更新當天入期
    let queryDate = moment().format("YYYYMMDD");
    console.log(queryDate);
    let data = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        //這裡可以放一些設定
        //params: 放 query string 的參數
        params: {
          response: "json",
          date: queryDate,
          stockNo,
        },
      }
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
