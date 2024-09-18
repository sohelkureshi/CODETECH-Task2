import express from "express";
import jwt from "jsonwebtoken";
import loginController from "../controllers/LoginController.js";

const router = express.Router();

router.post("/login", loginController);

export function verifyToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
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
