import express, { Application } from "express";
import router from "./app/routes";
const app: Application = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

export default app;
