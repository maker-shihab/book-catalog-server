import express from 'express';
import { BookRoutes } from '../modules/book/book.route';
import { UserRoutes } from '../modules/user/user.route';
import { WishListRoutes } from '../modules/wishlist/wishlist.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/book',
    route: BookRoutes,
  },
  {
    path: '/wishlist',
    route: WishListRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
