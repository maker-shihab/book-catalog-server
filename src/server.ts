import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function catalog() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/book_catalog");
    console.log("Server is running! with maker");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

catalog();
