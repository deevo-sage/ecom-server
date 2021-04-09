import express from "express";
import seller_controller from "../../controllers/seller_controller/index";
const router = express.Router();

router.get("/item/:id", seller_controller.getOneItem);
router.get("/item", seller_controller.getAllItem);
router.put("/item", seller_controller.updateItem);
router.post("/item", seller_controller.addItem);
router.delete("/item/:id", seller_controller.deleteItem);
router.get("/user", seller_controller.getAllUser);
router.get("/user/:id", seller_controller.getUserdat);
router.post("/login", seller_controller.login);
router.post("/signup", seller_controller.signup);
router.get("/order", seller_controller.getAllOrders);
router.get("/order/done", seller_controller.getDoneOrders);
router.get("/order/active", seller_controller.getAcitveOrders);
router.put("/order/:id", seller_controller.updateOrder);
router.get("/order/:id", seller_controller.getOrderDetail);

export default router;
