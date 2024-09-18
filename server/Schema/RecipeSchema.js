import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
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

const Recipe = mongoose.model("Recipe", recipeSchema);

// Use default export
export default Recipe;
