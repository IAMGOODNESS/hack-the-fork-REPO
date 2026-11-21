import axios from 'axios';
import { GoogleGenAI } from '@google/genai';
import {
  GeneratedIngredientsSchema,
  ProteinAnalysisSchema,
  GeneratedRecipeSchema,
} from '../schemas/ai.schema.js';

const pythonAiClient = axios.create({
  baseURL: process.env.AI_SERVICE_URL || 'http://localhost:8000',
  timeout: 15000,
});

const gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const aiConnector = {
  // 1. Generates editable ingredient list when user adds a new meal
  async generateIngredients(dishName) {
    const prompt = `List the standard ingredients for the dish "${dishName}". 
    Return ONLY valid JSON in this exact format: 
    {"ingredients": [{"name": "Ingredient Name", "quantity": "amount"}]}`;

    const response = await gemini.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: 'application/json' },
    });

    const parsed = JSON.parse(response.text);
    return GeneratedIngredientsSchema.parse(parsed).ingredients;
  },

  // 2. Sends ingredients to teammate's Python Decision Tree to flag animal proteins & suggest plant swaps
  async analyzeProteins(dishName, ingredients, allergies = []) {
    const { data } = await pythonAiClient.post('/analyze-proteins', {
      dishName,
      ingredients,
      allergies,
    });
    return ProteinAnalysisSchema.parse(data).analysis;
  },

  // 3. Generates final step-by-step chef recipe using the chosen plant-based replacements
  async generateChefRecipe(dishName, finalIngredients) {
    const prompt = `You are an executive chef. Write a clear, step-by-step cooking recipe for "${dishName}" using these exact ingredients (including plant-based protein swaps): ${JSON.stringify(finalIngredients)}.
    Return ONLY valid JSON in this exact format:
    {
      "totalCookTime": "45 mins",
      "skillLevel": "Intermediate",
      "instructions": ["Step 1...", "Step 2..."]
    }`;

    const response = await gemini.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: 'application/json' },
    });

    const parsed = JSON.parse(response.text);
    return GeneratedRecipeSchema.parse(parsed);
  },
};