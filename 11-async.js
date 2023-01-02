const { readFile, writeFile } = require("fs");
console.log("start");

readFile("Tutorial/content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("Tutorial/content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "Tutorial/content/result-async.txt",
      `Here is the result: ${first} and ${second}`,
      "utf8",
      (err, result) => {
        if (err) {
          return;
        }
        console.log('done with this test')
      }
    );
  });
});
console.log('starting next task')