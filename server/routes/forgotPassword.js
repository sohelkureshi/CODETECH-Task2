import express from "express";
import forgotPassword from "../controllers/ForgotPasswordController.js";

const router = express.Router();

router.put("/forgotpassword", forgotPassword);

export default router;
