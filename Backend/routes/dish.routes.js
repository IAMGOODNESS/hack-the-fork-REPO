import { Router } from 'express';
import { protect } from '../middleware/auth.middleware.js';
import {
  getDishes,
  getDishById,
  addIngredient,
  updateIngredient,
  deleteIngredient,
} from '../controllers/dish.controller.js';
import {
  createDishWithIngredients,
  analyzeDishProteins,
  selectReplacement,
  generateFinalRecipe,
} from '../controllers/workflow.controller.js';

const router = Router();
router.use(protect);

// Developer A's routes
router.get('/', getDishes);
router.get('/:id', getDishById);
router.post('/:id/ingredients', addIngredient);
router.patch('/:id/ingredients/:ingredientId', updateIngredient);
router.delete('/:id/ingredients/:ingredientId', deleteIngredient);

// Developer B's routes (Your endpoints)
router.post('/', createDishWithIngredients);
router.post('/:id/analyze', analyzeDishProteins);
router.patch('/:id/ingredients/:ingredientId/swap', selectReplacement);
router.post('/:id/generate-recipe', generateFinalRecipe);

export default router;