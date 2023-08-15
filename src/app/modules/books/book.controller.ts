import { NextFunction, Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...bookDetails } = req.body;
    const result = await BookService.createBook(bookDetails);

    res.status(200).json({
      success: true,
      message: "Book create successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookService.getAllBooks();

    res.status(200).json({
      success: true,
      message: "Book retrip successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const upateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await BookService.updateBook(id, req.body);

    res.status(200).json({
      success: true,
      message: "Book update successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await BookService.deleteBook(id);

    res.status(200).json({
      success: true,
      message: "Book Delete successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const BookController = {
  createBook,
  getBooks,
  upateBook,
  deleteBook,
};
