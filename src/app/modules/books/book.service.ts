import { IBooks } from "./book.interface";
import Book from "./book.model";

const createBook = async (payload: IBooks) => {
  const result = await Book.create(payload);
  return result;
};

const getAllBooks = async () => {
  const result = await Book.find({}); // Find all books

  return result;
};
const updateBook = async (id: string, payload: IBooks) => {
  const result = await Book.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};
const deleteBook = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
};
