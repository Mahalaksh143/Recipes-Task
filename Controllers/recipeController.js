import recipes from "../Models/recipeSchema.js";

// Creating recipe
export const createRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = new recipes(req.body);
    await newRecipe.save();
    res.status(201).json({
      message: "Recipe created successfully",
    });
  } catch (error) {
  console.error("Create recipe error:", error);

  res.status(500).json({
    message: "Cannot create recipe",
    error: error.message
  });
}

  };


// Get All Recipes
export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipes.find();
    res.status(200).json({
      data: allRecipes,
    });
  } catch (error) {
    res.status(503).json({
      message: "Cannot get all recipes, Error in getting all recipes",
    });
  }
};

// Get Specific Recipe
export const getRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await recipes.findById(recipeId);
    if (!recipe) {
      res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      data: recipe,
    });
  } catch (error) {
    res.status(503).json({
      message: "Cannot get specific recipe, Error in getting specific recipe",
    });
  }
};

// Update recipe
export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const { name, ingredients, instructions } = req.body;
    const result = await recipes.findByIdAndUpdate(
      { _id: recipeId },
      { name, ingredients, instructions },
      { new: true }
    );

    if (result.matchCount == 0) {
      res.status(404).json({
        message: "Recipe not found",
      });
    }
    res.status(200).json({
      message: "Recipe updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(503).json({
      message:
        "Cannot update specific recipe, Error in updating specific recipe",
    });
  }
};

// Delete Recipe
export const deleteRecipeByID = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const result = await recipes.findByIdAndDelete({ _id: recipeId });

    if (!result) {
      res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    res.status(503).json({
      message:
        "Cannot delete specific recipe, Error in deleting specific recipe",
    });
  }
};