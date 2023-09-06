import { Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IBook = {
  title: string;
  author: Types.ObjectId | IUser;
  genre: string;
  publicationDate: string;
  reviews?: string[];
};

export type IBookFilters = {
  searchTerm?: string;
  title?: string;
  author?: string;
  genre?: string;
  publicationYear?: number;
};
