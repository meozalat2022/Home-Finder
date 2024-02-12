import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then((result) => {
    console.log("connected to MondoBD");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server is running now on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
