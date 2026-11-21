import { prisma } from '../config/prisma.js';
import { aiConnector } from '../services/aiConnector.service.js';

// 1. New Meal: User adds dish name -> AI generates editable ingredient list
export const createDishWithIngredients = async (req, res, next) => {
  try {
    const { name } = req.body;
    const generatedList = await aiConnector.generateIngredients(name);

    const dish = await prisma.dish.create({
      data: {
        name,
        userId: req.userId,
        ingredients: {
          create: generatedList.map((item) => ({
            name: item.name,
            quantity: item.quantity,
          })),
        },
      },
      include: { ingredients: true },
    });

    res.status(201).json(dish);
  } catch (err) {
    next(err);
  }
};

// 2. Click Dish: Flags animal proteins & fetches plant-based alternatives from Python model
export const analyzeDishProteins = async (req, res, next) => {
  try {
    const dish = await prisma.dish.findFirst({
      where: { id: req.params.id, userId: req.userId },
      include: { ingredients: true, user: true },
    });
    if (!dish) return res.status(404).json({ message: 'Dish not found' });

    const userAllergies = dish.user?.preferences?.allergies || [];

    const analysis = await aiConnector.analyzeProteins(
      dish.name,
      dish.ingredients.map(({ id, name, quantity }) => ({ id, name, quantity })),
      userAllergies
    );

    await prisma.$transaction(
      analysis.map((item) =>
        prisma.ingredient.update({
          where: { id: item.ingredientId },
          data: {
            isAnimalProtein: item.isAnimalProtein,
            suggestedSwaps: item.alternatives,
          },
        })
      )
    );

    const updatedDish = await prisma.dish.update({
      where: { id: dish.id },
      data: { status: 'ANALYZED' },
      include: { ingredients: true },
    });

    res.json(updatedDish);
  } catch (err) {
    next(err);
  }
};

// 3. Pick Best Replacement: Saves the user's selected plant-based alternative
export const selectReplacement = async (req, res, next) => {
  try {
    const { selectedReplacement } = req.body;
    const updated = await prisma.ingredient.update({
      where: { id: req.params.ingredientId },
      data: { selectedReplacement },
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// 4. Generate Recipe: Builds final chef instructions & moves dish to Saved Meals
export const generateFinalRecipe = async (req, res, next) => {
  try {
    const dish = await prisma.dish.findFirst({
      where: { id: req.params.id, userId: req.userId },
      include: { ingredients: true },
    });
    if (!dish) return res.status(404).json({ message: 'Dish not found' });

    const finalIngredients = dish.ingredients.map((ing) => ({
      name: ing.selectedReplacement ? ing.selectedReplacement.name : ing.name,
      quantity: ing.quantity,
      swapDetails: ing.selectedReplacement || null,
    }));

    const aiRecipe = await aiConnector.generateChefRecipe(dish.name, finalIngredients);

    const recipe = await prisma.recipe.upsert({
      where: { dishId: dish.id },
      update: {
        instructions: aiRecipe.instructions,
        totalCookTime: aiRecipe.totalCookTime,
        skillLevel: aiRecipe.skillLevel,
      },
      create: {
        dishId: dish.id,
        instructions: aiRecipe.instructions,
        totalCookTime: aiRecipe.totalCookTime,
        skillLevel: aiRecipe.skillLevel,
      },
    });

    await prisma.dish.update({
      where: { id: dish.id },
      data: { status: 'SAVED' },
    });

    res.status(201).json(recipe);
  } catch (err) {
    next(err);
  }
};