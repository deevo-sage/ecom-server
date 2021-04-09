import mongoose from "mongoose";
const Seller = new mongoose.Schema({
  userId: String, 
  gst: Number,
  items:[{id:String}],
  ordersRecieved:[{id:String}]
});

export default mongoose.model("Seller", Seller);
