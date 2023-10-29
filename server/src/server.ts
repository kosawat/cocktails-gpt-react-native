import express, { Application } from "express";
import cors from "cors";
import logger from "morgan";

import routes from "./routes";

require("dotenv").config();

// Express app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

// Use the routes
app.use("/", routes);

const port: Number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
