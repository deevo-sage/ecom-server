import mongoose from "mongoose";

const Item = new mongoose.Schema({
  name: String,
  description: String,
  pictures: [{ link: String }],
  price: Number,
  Country: String,
  sellerId: String,
  discount: { type: Number, default: 0 },
  Stock: Number,
  category: String,
  bestseller: { type: Boolean, default: false },
  wishlisted: [{ id: String }],
});

export default mongoose.model("Item", Item);
