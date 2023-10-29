import { Request, Response, Router } from "express";
import { getDrinkIdeasController } from "./controllers";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Server is running ...");
});

router.post("/drinkideas", async (req: Request, res: Response) => {
  try {
    const result = await getDrinkIdeasController(req, res);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

export default router;
