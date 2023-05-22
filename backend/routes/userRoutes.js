import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  registerUser,
  updateUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);

export default router;
