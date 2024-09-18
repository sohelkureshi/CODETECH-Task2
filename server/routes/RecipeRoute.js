import express from "express";
import verifyToken from "../Middleware/middleware.js";
import {
  getAllRecipes,
  createRecipe,
  deleteRecipe,
  LikedList,
  getAllLikedRecipes,
  removeFromLikedRecipes,
  searchRecipes,
} from "../controllers/RecipeController.js";

const router = express.Router();

router.post("/recipe", createRecipe);
router.get("/recipe", verifyToken, getAllRecipes);
router.get("/likedRecipes", getAllLikedRecipes);
router.delete("/recipe/:id", deleteRecipe);
router.post("/likedRecipes/:id", LikedList);
router.delete("/removeLiked/:id", removeFromLikedRecipes);
router.get("/searchRecipes/:key", searchRecipes);

// Use default export
export default router;
