import express from 'express';
import { WishListController } from './wishlist.controller';
const router = express.Router();

router.post('/create', WishListController.createWishList);
router.get('/', WishListController.getAllWishList);
router.delete('/:id', WishListController.deleteWishList);

export const WishListRoutes = router;
