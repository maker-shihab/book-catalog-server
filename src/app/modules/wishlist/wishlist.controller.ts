/* eslint-disable prefer-const */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IWishList } from './wishlist.interface';
import { WishList } from './wishlist.model';
import { WishListService } from './wishlist.service';

const createWishList = catchAsync(async (req: Request, res: Response) => {
  const { ...wishListData } = req.body;
  const isMatch = await WishList.findOne({ book: { _id: wishListData?.book } });
  if (isMatch) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'This Book Already Exists in WishList'
    );
  }
  let result = await WishListService.createWishList(wishListData);
  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList created successfully',
    data: result,
  });
});

const getAllWishList = catchAsync(async (req: Request, res: Response) => {
  const result = await WishListService.getAllWishList();

  sendResponse<IWishList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList retrieved successfully !',
    data: result,
  });
});

const deleteWishList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await WishListService.deleteWishList(id);

  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'IWishList deleted successfully !',
    data: result,
  });
});

export const WishListController = {
  createWishList,
  getAllWishList,
  deleteWishList,
};
