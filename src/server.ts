import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { errorLogger, logger } from "./shared/logger";

process.on("uncaughtException", (error) => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function catalog() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info("Server is running! with maker");
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error(error);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

catalog();

process.on("SIGTERM", () => {
  logger.info("SIGTERM is received");
  if (server) {
    server.close();
  }
});
