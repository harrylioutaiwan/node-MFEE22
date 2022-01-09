//The fs module

// const { unlink } = require('fs/promises');

// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
//   } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// })('/tmp/hello');

//=======================

const { readFile } = require("fs/promises");

async function main() {
  try {
    let result = await readFile("text.txt", "utf-8");
    console.log(`這是內建的 promise版本 ${result}`);
  } catch (err) {
    console.log(err);
  }
}

main();

//=======================

// const { readFile } = require("fs/promises");

// (async()=>{
//     try{
//         let result = await readFile("text.txt", "utf-8");
//     console.log(`這是內建的 promise版本 ${result}`);
//     }catch (err){
//         console.log(err)
//     }
// })();
