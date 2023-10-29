import { Request, Response } from "express";
import { getDrinkIdeas } from "./openai";

export const getDrinkIdeasController = async (req: Request, res: Response) => {
  try {
    const { base, flavor, fruit, strength, restriction } = req.body;
    return await getDrinkIdeas(base, flavor, fruit, strength, restriction);
  } catch (err) {
    throw err;
  }
};
