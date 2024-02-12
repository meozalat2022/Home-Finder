import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";

const app = express();

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
