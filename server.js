import express from "express";
import cors from "cors";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import config from "./config";
import mongoose from "mongoose";
import sellerRouter from "./routes/seller_router/index";
import userRouter from "./routes/user_router/index";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));
app.use(cors());
app.use("/user", userRouter);
app.use("/seller", sellerRouter);
app.get("/", async (req, res) => {
  return res.json({ message: "working" });
});

mongoose.connect(
  config.db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(config.port, () => {
        console.log("server listening on http://localhost:" + config.port);
      });
    }
  }
);
