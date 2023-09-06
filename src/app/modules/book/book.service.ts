import { bookSearchableFields } from './book.constant';
import { IBook, IBookFilters } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload);
  return result;
};

const getAllBooks = async (filters: IBookFilters): Promise<IBook[]> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Book.find(whereConditions).populate('author');

  return result;
};

const getLatestBooks = async (): Promise<IBook[] | null> => {
  const result = await Book.find({})
    .sort({ _id: -1 })
    .limit(10)
    .populate('author');
  return result;
};
const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOne({ _id: id }).populate('author');
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const bookReview = async (
  id: string,
  payload: { reviews: string }
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: payload?.reviews } }
  );
  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete({ _id: id });
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getLatestBooks,
  getSingleBook,
  updateBook,
  bookReview,
  deleteBook,
};
