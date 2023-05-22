import express from "express";
import {
  getAllUsers,
  getUserById,
  registerUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getAllUsers);
ro