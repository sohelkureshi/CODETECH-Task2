import mongoose from "mongoose";

const LikedRecipes = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [String],
  instructions: {
    type: String,
    required: true,
  },
  imageUrl: String,
});

const Liked = mongoose.model("LikedRecipe", LikedRecipes);

// Use default export
export default Liked;
