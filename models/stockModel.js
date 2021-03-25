const mongoose = require("mongoose");
const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  cap: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const stock = mongoose.model("stockSchema", stockSchema);

module.exports = stock;
