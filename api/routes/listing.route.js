import express from "express";
import { verifyToken } from "../util/verifyUser.js";
import { createListing } from "../controllers/listing.controller.js";

const router = express.Router();

router.get("/create", verifyToken, createListing);

export default router;
