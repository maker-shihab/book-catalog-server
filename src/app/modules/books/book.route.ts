import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();

router.post("/creat-book", BookController.createBook);
router.get("/", BookController.getBooks);
router.patch("/:id", BookController.upateBook);
router.delete("/:id", BookController.deleteBook);

export const BookRouter = router;
