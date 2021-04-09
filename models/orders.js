import mongoose from "mongoose";

const Order = new mongoose.Schema({
  items: [{ id: String, amount: Number }],
  userId: String,
  payment: Boolean,
  sellerid: String,
  status: String,
});

export default mongoose.model("Order", Order);
