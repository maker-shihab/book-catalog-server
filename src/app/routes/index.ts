import { Router } from "express";
import { BookRouter } from "../modules/books/book.route";

const router = Router();

const moduleRoute = [
  {
    path: "/books",
    route: BookRouter,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
