// 儲存名字
async function saveStockName(connection, stockNo, stockName){
    //connection.execute -> 處理 bulk insert 的 prerpare statement 會有一點小問題
    //-->回傳的是 promise 可以被 await
    //connection.query
    //-->回傳的不是 promise 不可以被 await
    let saveNameResult = await connection.execute(
        "INSERT IGNORE INTO stocks (id, name) VALUES (?, ?)",
        [stockNo, stockName]
      );
      return saveNameResult;
}

// 儲存價格
async function saveStockPrice(connection, processedData){
    let savePriceResult = await connection
      .promise()
      .query(
        "INSERT IGNORE INTO stock_prices (stock_id, date, volume, amount, open_price, high_price, low_price, close_price, delta_price, transactions) VALUES ?",
        [processedData]
      );
      return savePriceResult;
}

module.exports ={saveStockName, saveStockPrice}

//老師的做法：
// 儲存名字
// async function saveStockName(connection, stockNo, stockName) {
//     let saveNameResult = await connection.execute(
//       "INSERT IGNORE INTO stocks (id, name) VALUES (?, ?)",
//       [stockNo, stockName]
//     );
//     return saveNameResult;
//   }
  
//   // 儲存價格
//   async function saveStockPrice(connection, processData) {
//     return await connection
//       .promise()
//       .query(
//         "INSERT IGNORE INTO stock_prices (stock_id, date, volume, amount, open_price, high_price, low_price, close_price, delta_price, transactions) VALUES ?",
//         [processData]
//       );
//   }
  
//   module.exports = { saveStockName, saveStockPrice };