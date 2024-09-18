// import express from "express";
// const app = express();
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();
// const router = express.Router();

// app.use(express.json());
// app.use(cors());

// const config = require("./db/config");
// const Home = require("./controllers/controller");
// const LoginRoute = require("./routes/LoginRoute");
// const RegisterRoute = require("./routes/RegisterRoute");
// const verifyToken = require("./Middleware/middleware");
// const RecipeRoute = require("./routes/RecipeRoute");
// const ForgotPassword = require("./routes/forgotPassword");

// app.use("/auth", LoginRoute);
// app.use("/auth", RegisterRoute);
// app.use("/auth", RecipeRoute);
// app.use("/auth", router);
// app.use("/auth", ForgotPassword);

// router.get("/", verifyToken, Home.Home);

// module.exports = router;

// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const router = express.Router();

// Middleware
app.use(express.json());
app.use(cors());

// Utility for __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import routes and middleware
import config from "./db/config.js";
import * as Home from "./controllers/controller.js";
import LoginRoute from "./routes/LoginRoute.js";
import RegisterRoute from "./routes/RegisterRoute.js";
import verifyToken from "./Middleware/middleware.js";
import RecipeRoute from "./routes/RecipeRoute.js";
import ForgotPassword from "./routes/forgotPassword.js";

// Routes
app.use("/auth", LoginRoute);
app.use("/auth", RegisterRoute);
app.use("/auth", RecipeRoute);
app.use("/auth", router);
app.use("/auth", ForgotPassword);

router.get("/", verifyToken, Home.Home);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
