console.log("Node project setup done!");
const fs = require("fs");

fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});