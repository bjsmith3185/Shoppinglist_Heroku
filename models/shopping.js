const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShoppingSchema = new Schema({
  
  item: { type: String },

  store: { type: String },
  
  qty: { type: String, default: 1 },

  strikeThru: { type: Boolean, default: false },
  
});

const Shopping = mongoose.model("Shopping", ShoppingSchema);

module.exports = Shopping;
