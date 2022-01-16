// exports = module.exports = {};
// exports 本身是一個物件

exports.size = "large";

let productItem = "default";
let product = "T-shirt";
let color = "black";

exports.setProductItem = function (product, color) {
    productItem = `${product} ${color}`;
};

exports.showProductItem = function () {
  console.log(`This is product is ${productItem}`);
};

return module.exports;



//老師示範：

// exports = module.exports = {};
// exports 本身是一個物件

// exports.color = "red";

// let name = "default";

// exports.setName = function (firstName, lastName) {
//   name = `${firstName} ${lastName}`;
// };

// exports.showName = function () {
//   console.log(`Hi, ${name}`);
// };

// return module.exports;