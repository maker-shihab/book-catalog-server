import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { logger } from "./shared/logger";

async function catalog() {
  try {
    await mongoose.connect(config.database_url as string);
    errorLogger("Server is running! with maker");
    app.listen(config.port, () => {
      logger(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

catalog();
