// exports = module.exports = {};
// exports 本身是一個物件

let productItem = "default";

function setProductItem(newProductItem) {
    productItem = newProductItem;
}

function showProductItem() {
  console.log(productItem);
}

module.exports = { setProductItem, showProductItem };

// return module.exports;


//老師示範：

// exports = module.exports = {};
// exports 本身是一個物件

// let name = "default";

// function setName(newName) {
//   name = newName;
// }

// function showName() {
//   console.log(name);
// }

// module.exports = { setName, showName };

// return module.exports;