console.log("Node project setup done!");
const fs = require("fs");

fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
const fs = require("fs");

fs.writeFile("examples/output.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("File saved!");
});
const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello World!");
}).listen(8080);

console.log("Server running at http://localhost:8080/");
const https = require("https");

https.get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
  let data = "";

  resp.on("data", (chunk) => {
    data += chunk;
  });

  resp.on("end", () => {
    console.log(JSON.parse(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
const myModule = require("./my-module.js");
console.log(myModule.myFunction());