const express = require("express");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const stockModel = require("./models/stockModel");
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./public");

mongoose.connect(
  "mongodb+srv://stocks:showStocks@cluster0.b7vnt.mongodb.net/viewStocks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use(cors());

app.use(express.static(publicDirectoryPath));

app.post("/create", async (req, res) => {
  const findElement = await stockModel.findOne(
    { symbol: req.body.symbol },
    function (err) {
      if (err) return handleError(err);
    }
  );
  if (!findElement) {
    await stockModel.create({
      name: req.body.name,
      symbol: req.body.symbol,
      cap: req.body.cap,
      price: req.body.price,
    });
    res.send("success");
  } else {
    // res.json({
    //   alreadyExists: true,
    // });
    res.send("fail");
  }
});

app.get("/getStocks", async (req, res) => {
  const stocks = await stockModel.find();
  res.json(stocks);
});

app.post("/delete", async (req, res) => {
  await stockModel.deleteOne(
    {
      symbol: req.body.symbol,
    },
    function (err) {
      if (err) return handleError(err);
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(publicDirectoryPath + "/index.html");
});

app.listen(3001, () => {
  console.log("express is running");
});
