const express = require("express");
const user = require("./user");

const app = express();

app.get("/", (_, res) => {
  res.json({ response: "OK" });
});
console.log(1 + 1);
console.log(JSON.stringify(user));
console.log(user);

app.listen(80);
