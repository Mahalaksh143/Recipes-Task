import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
  type:[String],
  required:true,
},
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  });

// Creating collection
const recipes = mongoose.model("recipes", recipeSchema);

export default recipes;