import Item from "../../models/item";
import Order from "../../models/orders";
import User from "../../models/user";
import Seller from "../../models/Seller";

const getOneItem = (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};
const updateItem = (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const addItem = (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const deleteItem = (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getAllItem = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getAllUser = async (req, res, next) => {
  try {
  let users = await User.find({});
    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getUserdat = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const login = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const signup = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getAllOrders = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getAcitveOrders = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getDoneOrders = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const updateOrder = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
const getOrderDetail = async (req, res, next) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: "internal server error" });
  }
};
export default {
  getOneItem,
  getAllItem,
  updateItem,
  addItem,
  deleteItem,
  getAllUser,
  getUserdat,
  login,
  signup,
  getAllOrders,
  getDoneOrders,
  getAcitveOrders,
  updateOrder,
  getOrderDetail,
};
