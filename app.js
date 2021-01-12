const express = require("express");
const user = require("./user");
const Dog = require("./dog");

const app = express();
const todd = new Dog("Todd", 2, "Labrador", "golden");
const tobby = new Dog("Tobby", 2, "Chow chow", "black");

app.get("/", (_, res) => {
  res.json({ response: "OK" });
});
console.log(todd.present());
console.log(todd.name);
console.log(tobby.present());
console.log(tobby.age);
console.log(1 + 1);
console.log(JSON.stringify(user));
console.log(user);

app.listen(80);
