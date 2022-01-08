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

const { readFile } = require("fs/promises");

readFile("text.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
