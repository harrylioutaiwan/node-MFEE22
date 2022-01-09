const axios = require("axios").default;

// axios.<method> will now provide autocomplete and parameter typings
axios
  .get(
    "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220109&stockNo=2330&_=1641716452716"
  )
  .then(function (response) {
    // handle success
    // console.log(response);
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
