import express from "express";
import {
  createRecipe,
  deleteRecipeByID,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
} from "../Controllers/recipeController.js";

const router = express.Router();

router.post("/create", createRecipe);
router.get("/allrecipes", getAllRecipes);
router.get("/:id", getRecipeById);
router.put("/update/:id", updateRecipe);
router.delete("/delete/:id", deleteRecipeByID);

export default router;