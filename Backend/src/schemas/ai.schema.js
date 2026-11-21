import { z } from 'zod';

export const GeneratedIngredientsSchema = z.object({
  ingredients: z.array(
    z.object({
      name: z.string(),
      quantity: z.string().optional().default('to taste'),
    })
  ),
});

export const SwapOptionSchema = z.object({
  name: z.string(),
  texture: z.string(),
  ingredientCookTime: z.string(),
  totalDishCookTime: z.string(),
  allergenFree: z.boolean(),
  allergenNotes: z.string().optional(),
  skillLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  confidence: z.number().optional(),
  costNgn: z.number().optional(),
});

export const ProteinAnalysisSchema = z.object({
  analysis: z.array(
    z.object({
      ingredientId: z.string(),
      isAnimalProtein: z.boolean(),
      alternatives: z.array(SwapOptionSchema).default([]),
    })
  ),
});

export const GeneratedRecipeSchema = z.object({
  totalCookTime: z.string(),
  skillLevel: z.string(),
  instructions: z.array(z.string()),
});