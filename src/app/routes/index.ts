import { Router } from "express";
import { BookRouter } from "../modules/books/book.route";
import { UserRouter } from "../modules/users/user.route";

const router = Router();

const moduleRoute = [
  {
    path: "/books",
    route: BookRouter,
  },
  {
    path: "/users",
    route: UserRouter,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
