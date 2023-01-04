const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


// async pattern using promise and await

const start = async () => {
  try {
    const first = await readFilePromise("Tutorial/content/first.txt", "utf8");
    const second = await readFilePromise("Tutorial/content/second.txt", "utf8");
    await writeFilePromise("Tutorial/content/result-mid.txt", `This is awesome: ${first} ${second}`)
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log("There is an error: ", error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText('Tutorial/content/first.txt')
// .then((result) =>console.log(result)
// .catch((err) => console.log(err))
// );
