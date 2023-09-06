/* eslint-disable @typescript-eslint/no-this-alias */

import moment from 'moment';
import { Schema, model } from 'mongoose';
import { IWishList } from './wishlist.interface';
const date = moment(new Date().toUTCString()).format('YYYY-MM-DD');

const wishListSchema = new Schema<IWishList>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: {
      type: String,
      default: date,
    },
  },
  {
    timestamps: true,
  }
);

export const WishList = model<IWishList>('WishList', wishListSchema);
