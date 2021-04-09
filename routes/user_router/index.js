import express from "express";
import user_controller from "../../controllers/user_controller/index";

const router = express.Router();

router.get("/item", user_controller.getHomePageItem);
router.get("/item/:category", user_controller.getCategoryItem);
router.get("/item/:id", user_controller.getOneItem);
router.get("/userdat/:id", user_controller.getUserdat);
router.post("/userdat/:id", user_controller.updateUserdat);
router.post("/login", user_controller.login);
router.post("/signup", user_controller.signup);
router.get("/order", user_controller.getAllOrders);
router.get("/order/:id", user_controller.getOrderDetail);
router.post("/order/:id", user_controller.cancelOrder);
router.post("/order", user_controller.newOrder);
router.get("/wishlist", user_controller.getWishList);
router.post("/wishlist", user_controller.addToWishList);

export default router;
