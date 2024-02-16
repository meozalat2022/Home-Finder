import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

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
app.use("/api/listing", listingRouter);

//error handing middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Server Error Occurred";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
