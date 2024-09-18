import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Schema/UserSchema.js";
import RegisterController from "../controllers/RegisterController.js";

const router = express.Router();

router.post("/register", RegisterController);

function verifyToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.token = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token." });
  }
}

export default router;
