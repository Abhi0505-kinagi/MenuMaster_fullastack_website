const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  billItems: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  billDateTime: {
    type: Date,
    default: Date.now
  }
});

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
