const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const quicksort = require("./sort");

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.json({ message: "works" });
});

app.post("/order", (req, res) => {
  console.log(req.body);

  let numbers = req.body.numbers.split(",").map((str) => Number(str));
  let ordered = quicksort(numbers, 0, numbers.length - 1);

  res.json({ ordered });
});

app.listen(6001, () => {
  console.log("running on port 6000");
});
