import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
const User = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  gender: String,
  country: String,
  password: String,
  cards: [{ number: String, holder: String }],
  number: Number,
  address: [{ line1: String, line2: String, pincode: Number }],
  orders: [{ id: String }],
  seller: {
    type: Boolean,
    default: false,
  },
  wishlist: [{ id: String }],
  wallet: Number,
  cart: [{ id: String, amount: Number }],
});
User.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    return next();
  } else {
    bcrypt.hash(user.password, null, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  }
});
User.methods.comparePass = (password) => {
  var user = this;
  return bcrypt.compareSync(password, user.password);
};
export default mongoose.model("User", User);
