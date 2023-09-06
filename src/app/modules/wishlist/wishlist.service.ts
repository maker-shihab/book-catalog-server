import { IWishList } from './wishlist.interface';
import { WishList } from './wishlist.model';

const createWishList = async (payload: IWishList): Promise<IWishList> => {
  const result = await WishList.create(payload);
  return result;
};

const getAllWishList = async (): Promise<IWishList[]> => {
  const result = await WishList.find({}).populate('book');

  return result;
};

const deleteWishList = async (id: string): Promise<IWishList | null> => {
  const result = await WishList.findByIdAndDelete({ _id: id });
  return result;
};

export const WishListService = {
  createWishList,
  getAllWishList,
  deleteWishList,
};
