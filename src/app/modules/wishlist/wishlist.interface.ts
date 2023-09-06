import { Types } from 'mongoose';
import { IBook } from '../book/book.interface';
import { IUser } from '../user/user.interface';

export type IWishList = {
  book: Types.ObjectId | IBook;
  userId: Types.ObjectId | IUser;
  date: string | null;
};
