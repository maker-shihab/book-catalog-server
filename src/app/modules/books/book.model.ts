import mongoose, { Schema } from "mongoose";
import { IBooks } from "./book.interface";
const BookSchema = new Schema<IBooks>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  publicationYear: {
    type: String,
  },
  wishlist: [
    {
      type: String,
    },
  ],
  collections: [
    {
      type: String,
    },
  ],
  addedBy: {
    type: String,
  },
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
