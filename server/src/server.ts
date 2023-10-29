import express, { Application } from "express";
import cors from "cors";
import logger from "morgan";

require("dotenv").config();

// Express app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

const port: Number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  console.log(process.env.OPENAI_API_KEY);
});
