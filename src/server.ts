import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function catalog() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Server is running! with maker");
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

catalog();
