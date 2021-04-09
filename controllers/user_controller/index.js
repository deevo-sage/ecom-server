import Item from "../../models/item";
import Order from "../../models/orders";
import User from "../../models/user";
import Seller from "../../models/Seller";

const getHomePageItem = async (req, res, next) => {
  try {
    const items = await Item.find({ bestseller: true });
    if (items) res.status(200).send({ items });
    else {
      res.status(404).send({ message: "no items found" });
    }
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};

const getCategoryItem = async (req, res, next) => {
  try {
    const items = await Item.find({ category: req.params.category });
    if (items) res.status(200).send({ message: "success" });
    else {
      res.status(404).send({ message: "no items found" });
    }
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};

const getOneItem = async (req, res, next) => {
  try {
    const item = await Item.findById({ _id: req.params.id });
    if (item) res.status(200).send({ item });
    else {
      res.status(404).send({ message: "not found" });
    }
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};

const getUserdat = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (user) res.status(200).send({ user });
    else {
      res.status(404).send({ message: "not found" });
    }
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};

const updateUserdat = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    if (user) {
      res.status(200).send({ message: "successfully updated" });
    } else {
      res.status(404).send({ message: "not found" });
    }
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      if (user.comparePass(req.body.password)) {
        res.status(200).send({ user });
      } else {
        res.status(400).send({ message: "wrong password" });
      }
    } else {
      res.status(404).send({ message: "email not found" });
    }
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};

const signup = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).send({ message: "email already exist" });
    } else {
      let newuser = new User({ ...req.body });
      // await User.create(req.body);
      // let user = await User.find({ email: req.body.email });
      await newuser.save();

      res.status(200).send({ newuser });
    }
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = Order.find({});
    if (orders) res.status(200).send({ orders });
    else res.status(404).send({ message: "no orders found" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getOrderDetail = async (req, res, next) => {
  try {
    const order = Order.findById(req.body.id);
    if (order) res.status(200).send({ order });
    else res.status(404).send({ message: "no orders found" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const newOrder = async (req, res, next) => {
  try {
    let newOrder = new User({ ...req.body.item });
    await newOrder.save();
    res.status(200).send({ newOrder });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const cancelOrder = async (req, res, next) => {
  try {
    const order = Order.findById(req.body.id);
    order.status = "cancel requested";
    await order.save();
    res.status(200).send({ message: "request sent" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const addToWishList = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getWishList = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};

export default {
  getHomePageItem,
  getCategoryItem,
  getOneItem,
  getUserdat,
  updateUserdat,
  login,
  signup,
  getAllOrders,
  cancelOrder,
  getOrderDetail,
  newOrder,
  addToWishList,
  getWishList,
};
